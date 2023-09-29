import { Component, OnInit, Input, Output, EventEmitter, ContentChild, Directive, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { ModalController, Platform, NavController } from '@ionic/angular';
import { FilterPage } from '../filter-page/filter-page.page';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[listItem]'
})
export class ListItemDirective {}

@Component({
  selector: 'itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemListComponent implements OnInit {

  search = false;
  presentFilter = false;
  typingTimer :any =undefined;        // timer identifier
  doneTypingInterval = 500;  // time in ms, 5 second for example
  isIOS = false;

  firstAccess = true;

  @Input()
  currentCategory: string;
  @Input()
  tags: any = [];
  @Input()
  categories: any = [];
  @Input()
  title: string;
  @Input()
  items: any;

  @Output()
  searchEnd = new EventEmitter<boolean>();
  @Output()
  searchUpdate = new EventEmitter<string>();
  @Output()
  tagsChanged = new EventEmitter<any[]>();
  @Output()
  expand = new EventEmitter<string>();
  @Output()
  contact = new EventEmitter<any>();

  @ContentChild(ListItemDirective, {read: TemplateRef}) listItem;

  @ViewChild('itemlist')
  set itemlist(el: ElementRef) {
    if (!el) {
      return;
    }
    const element = document.getElementById('itemlist');
    if (element) {
      element.addEventListener('expandeClick', async (returnId) => {
        this.expand.emit((<any>returnId).detail);
      });

      element.addEventListener('contactClick', async (contact) => {
        this.contact.emit(JSON.parse((<any>contact).detail));
      });
    }
  }

  constructor(public navCtrl: NavController, public modalController: ModalController, public plt: Platform) {
    this.isIOS = this.plt.is('ios');
  }

  ngOnInit() {}

  get emptyList() {
    return this.items === null || !Object.keys(this.items).some(k => this.items[k].length > 0);
  }

  onSearchEnd() {
    this.searchEnd.emit(true);
  }
  onSearchUpdate(value: string) {
    this.searchUpdate.emit(value);
  }
  onTagsChanged(values?: any[]) {
    this.tagsChanged.emit(values);
  }

  toggleSearch() {
    this.search = !this.search;
    const searchbar = <HTMLElement>document.querySelector('.search');
    if (searchbar && searchbar.style.display === 'none') {
      searchbar.style.display = 'unset';
      this.presentFilter = true;
      searchbar.focus();
    } else if (searchbar) {
      searchbar.style.display = 'none';
      this.presentFilter = false;
      this.onSearchEnd();
    }
  }

  searchChanged(input: any) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      const value = input.detail.target.value;
      this.onSearchUpdate(value);
    }, this.doneTypingInterval);
  }

  removeTag(tag) {
    this.tags = this.tags.map(item => tag.value === item.value
      ? { value: item.value, isChecked: false }
      : { value: item.value, isChecked: item.isChecked });
    this.firstAccess = true;
    const even = function (element) {
      // checks whether an element is even
      return element.isChecked;
    };
    if (this.tags.some(even)) {
      this.presentFilter = true;
      this.firstAccess = false;
      this.onTagsChanged(this.tags);
    } else {
      this.presentFilter = false;
      this.onTagsChanged();
    }
  }

  selectInternalElement(ref) {
    const elem = document.getElementById('list_' + ref);
    if (elem) {
      elem.scrollIntoView(true);
    }
    this.currentCategory = ref;
  }

  async filterClicked() {
    const modal = await this.modalController.create({
      component: FilterPage,
      componentProps: {
        'filters': Object.assign([], this.tags)
      }
    });
    modal.onDidDismiss()
      .then((result) => {

        this.firstAccess = true;
        if (result.data) {
          this.tags = result.data;
        }
        if (result.data && (result.data as any[]).some((e) => e.isChecked)) {
          this.presentFilter = true;
          this.firstAccess = false;
          this.onTagsChanged(this.tags);
        } else {
          this.presentFilter = false;
          this.onTagsChanged();
        }
      });
    return await modal.present();
  }

  goBack() {
    this.navCtrl.back();
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible && this.currentCategory !== target.className) {
      this.currentCategory = target.className;
    }
    // scroll to posiition
    const element = document.getElementById(this.currentCategory);
    if (element) {
      element.scrollIntoView({ block: 'center' });
    }
  }

}
