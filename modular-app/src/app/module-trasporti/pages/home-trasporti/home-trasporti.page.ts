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
  elements: any=[];
  gridRows: any[];
  @ViewChild(IonContent) content: IonContent;

  constructor(private router: Router, private transportService:TransportService, private loadingController: LoadingController, public translate: TranslateService, private dbService: DbService, private config: ConfigService) {
    super(translate);
  }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    //await loading.present();
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
  }
  selectInternalElement(ref){
    var elem:any = document.getElementsByClassName(ref.state);
    if (elem.length>0){
      var scrollheight= elem[0].getBoundingClientRect().top;
      // if (scrollheight>200){
      this.content.scrollToPoint(0, scrollheight,1000);}
    // }
   }

  loadListAll(primaryLinks) {
    var funcs = [];
    for (var i=0; i<this.primaryLinks.length;i++){
      funcs.push(this.loadList(primaryLinks[i]))
    }
    Promise.all(funcs).then((values) => {
      console.log(values);
      for (var i= 0;i<values.length;i++) {
        var element = values[i];
        if (element){
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
    return {'background-color': elem.color}
  }
titleisPresent(elem) {
  return (elem && elem.group && elem.group.routes &&  elem.group.routes.length>0 && elem.group.routes[0].title)? true :false;
}
  selectElement(e) {
    // route element: go to table
    if (e.route != null) {
      if (!this.groupId){
        this.groupId="no-group";
      }
      this.router.navigate(['/tt',e.ref,e.agencyId,this.groupId,e.route.routeSymId,e.title]);

      // group with single route: go to table
    } else if (e.group.routes != null && e.group.routes.length == 1) {
      this.router.navigate(['/tt',e.ref,e.agencyId,e.group.label,e.group.routes[0].routeSymId,e.title]);

      // group with multiple elements: go to group
    } else {
      this.router.navigate(['/ttgroup',e.ref,e.agencyId, this.groupId ? (this.groupId + ',' + e.group.label) : e.group.label]
      );

    }
  }
  
  loadList(ref):Promise<any> {

    return this.transportService.getTTData(ref.state, this.agencyId, this.groupId)
    // .then(res => {
    //   if (res) {
    //     this.hasMap = (<any>res).hasMap;
    //     this.markerIcon = (<any>res).markerIcon;
    //     this.icon = (<any>res).icon;

    //     // var title = $filter('translate')((<any>data).title ? (<any>data).title : (<any>data).label);
    //     // if (title.length < 5) title = $filter('translate')('lbl_line') + ' ' + title;
    //     var title = "Todo"
    //     this.title = title;
    //     this.elements = this.transport.flattenData(res, this.ref, this.agencyId);
    //     this.view = (<any>res).view ? (<any>res).view : 'list';
    //     if (this.view == 'grid') {
    //       this.prepareGrid();
    //     }

    //   }
    // })
  }
}