import { ModalController, NavController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { NgZone } from '@angular/core';


export class ListPage {

  tags: any = [];
  categories: any = [];
  objects: any[] = null;
  filtered: any[] = null;
  currentCategory = null;

  constructor(
    public navCtrl: NavController,
    public modalController: ModalController,
    public router: Router,
    public utils: UtilsService,
    public zone: NgZone) {
  }

  init() {
    this.getList().subscribe(elements => {
      this.objects = elements;
      this.tags = this.buildFilter();
      this.buildCategories();
      this.filterList();
    });
  }

  getList(): Observable<any[]> {
    return of([]);
  }

  appliesSearch(item: any, value: string) {
    return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
  }
  appliesTag(item: any, value: string) {
    return (this.getItemTags(item) || []).some((t) => t === value);
  }
  getItemTags(item: any) {
    return item.cat;
  }
  getItemCategory(item: any) {
    return item && item.cat && item.cat.length > 0 ? item.cat[0] : null;
  }

  filterList(filters?: any[]) {
    const list = [];
    this.objects.forEach(p => {
      const c = this.getItemCategory(p);
      if (!list[c]) {
        list[c] = [];
      }
      if (filters ? filters.filter((item: any) => item.isChecked && this.appliesTag(p, item.value)).length > 0 : true) {
        list[c].push(p);
      }
    });
    this.filtered = list;
  }

  buildFilter(): any[] {
    const array = this.objects.map(item => this.getItemTags(item));
    const map = array.reduce((prev, curr: string[]) => {if (curr) { curr.forEach(t => prev[t] = true); } return prev; }, {});
    const res = [];
    Object.keys(map).forEach(i => res.push({value: i, isChecked: true}));
    res.sort((a, b) => a.value.localeCompare(b.value));
    return res;
  }

  buildCategories() {
    const cats = [];
    this.objects.forEach(element => {
      const cat = this.getItemCategory(element);
      if (!cats.includes(cat)) {
        cats.push(cat);
      }
    });
    cats.sort();
    this.categories = cats;
    this.currentCategory = this.categories[0];
  }

  onSearchEnd() {
    this.filterList();
  }

  onSearchUpdate(value: string) {
    this.categories.forEach(c => {
      this.filtered[c] = this.objects.filter((el) => {
        if (el.title) {
          return (this.appliesSearch(el, value) && this.getItemCategory(el) === c);
        }
        return false;
      });
    });
  }

  onTagsChanged(values?: any[]) {
    this.filterList(values);
  }

  onExpand(id: string) {
  }

  onContact(data: any) {
    this.utils.openContact(data);
  }
}
