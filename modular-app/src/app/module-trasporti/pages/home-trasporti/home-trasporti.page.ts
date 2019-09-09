import { Component, OnInit, ViewChild } from '@angular/core';
import { MainPage } from '../../class/MainPage'
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/module-trasporti/services/config.service';
import { DbService } from '../../services/db.service';
import { LoadingController, IonContent } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { TransportService } from '../../services/transport.service';

@Component({
  selector: 'app-home-trasporti',
  templateUrl: './home-trasporti.page.html',
  styleUrls: ['./home-trasporti.page.scss'],
})
export class HomeTrasportiPage extends MainPage implements OnInit {
  primaryLinks: any = [];
  min_grid_cell_width = 90;
  ref: string;
  agencyId: any;
  groupId: any;
  title = null;
  view = 'list';
  hasMap = false;
  allMarkers = null;
  markerIcon: any;
  icon: any;
  elements: any = [];
  gridRows: any[];
  @ViewChild(IonContent) content: IonContent;
  actualVisualized: string;

  constructor(private router: Router, private transportService: TransportService, private loadingController: LoadingController, public translate: TranslateService, private dbService: DbService, private config: ConfigService) {
    super(translate);
  }

  async ngOnInit() {
    this.translate.get('initdb_label').subscribe(
      value => {
        var initDb = value;
        this.synch(initDb);

      }, err => {
        this.synch("");
      }
    );

  }
  async synch(initDb: any): Promise<any> {
    const loading = await this.loadingController.create({
      message: initDb
    });
    await loading.present();
    this.dbService.Init().then(function () {
      loading.dismiss();
    }, function (err) {
      loading.dismiss();
    })
    this.translate.get('home_trasporto').subscribe(
      value => {
        console.log(value);
      }
    );
    this.config.getHomeButtons().then(res => {
      this.primaryLinks = res;
      this.loadListAll(this.primaryLinks);
    })
  }

  private prepareGrid() {
    var cols = Math.floor(window.innerWidth / this.min_grid_cell_width);
    var gridRows = [];
    var row = [];
    gridRows.push(row);
    for (var i = 0; i < this.elements.length; i++) {
      row.push(this.elements[i]);
      if ((i + 1) % cols == 0) {
        row = [];
        gridRows.push(row);
      }
    }
    for (var i = row.length; i < cols; i++) {
      row.push({});
    }
    this.gridRows = gridRows;
    if (this.elements[0] && this.elements[0].ref)
      this.actualVisualized = this.elements[0].ref

  }
  selectInternalElement(ref) {
    var elem: any = document.getElementsByClassName(ref.state);
    if (elem.length > 0) {
      let yOffset = elem[0].offsetTop;
      this.content.scrollToPoint(0, yOffset - 100, 0)
    }
    this.actualVisualized = ref.state;
  }
  getHtml(elem) {
    if (elem.ref == "trains")
      return ""
    if (this.inside(elem.title))
      return "<span>" + elem.title + "</span>"
    else return "<span>" + elem.title.substring(0, 3); +"</span>"
  }
  getIcon(elem) {
    if (elem.ref == "trains")
      return "train"
  }
  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible && this.actualVisualized != target.className)
      this.actualVisualized = target.className;
    console.log(target + "" + visible);
  }
  isSelected(category) {
    console.log("category.state" + category.state);
    console.log("this.actualVisualized" + JSON.stringify(this.actualVisualized));
    console.log(" category.state == this.actualVisualized" + (category.state == this.actualVisualized));
    return category.state == this.actualVisualized;
  }
  getIconStyle(elem) {
    return { 'color': elem.color }

  }
  compareElements(i) {
    if (i == 0)
      return true
    if (i == this.elements.length - 1)
      return false
    if (this.elements[i].ref != this.elements[i - 1].ref)
      return true
    return false
  }
  getLabel(i) {
    return this.elements[i].ref
  }
  loadListAll(primaryLinks) {
    var funcs = [];
    for (var i = 0; i < this.primaryLinks.length; i++) {
      funcs.push(this.loadList(primaryLinks[i]))
    }
    Promise.all(funcs).then((values) => {
      console.log(values);
      for (var i = 0; i < values.length; i++) {
        var element = values[i];
        if (element) {
          this.hasMap = (<any>element).hasMap;
          this.markerIcon = (<any>element).markerIcon;
          this.icon = (<any>element).icon;
          var newElems = this.transportService.flattenData(element, this.primaryLinks[i].state, this.agencyId);
          this.elements = this.elements.concat(newElems);
          this.view = (<any>element).view ? (<any>element).view : 'list';
          if (this.view == 'grid') {
            this.prepareGrid();
          }
        }
        this.transportService.setElements(this.elements)
      };

    })

  }
  getStyle(elem) {
    return { 'border': '4px solid ' + elem.color }
  }
  titleisPresent(elem) {
    return (elem && elem.group && elem.group.routes && elem.group.routes.length > 0 && elem.group.routes[0].title) ? true : false;
  }
  inside(string) {
    return string.length < 3


  }
  selectElement(e) {
    // route element: go to table
    if (e.route != null) {
      // if (!this.groupId) {
      //   this.groupId = "no-group";
      // }
      this.router.navigate(['/tt', e.ref, e.agencyId, this.groupId ? this.groupId : e.title, e.route.routeSymId, e.title, e.color]);

      // group with single route: go to table
    } else if (e.group.routes != null && e.group.routes.length == 1) {
      this.router.navigate(['/tt', e.ref, e.agencyId, e.group.label, e.group.routes[0].routeSymId, e.title, e.color]);

      // group with multiple elements: go to group
    } else {
      this.router.navigate(['/ttgroup', e.ref, e.agencyId, this.groupId ? (this.groupId + ',' + e.group.label) : e.group.label]
      );

    }
  }

  loadList(ref): Promise<any> {

    return this.transportService.getTTData(ref.state, this.agencyId, this.groupId)
  }
}
