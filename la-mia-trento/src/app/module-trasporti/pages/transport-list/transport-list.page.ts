import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportService } from '../../services/transport.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.page.html',
  styleUrls: ['./transport-list.page.scss'],
})
export class TransportListPage implements OnInit {
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
  elements: any;
  gridRows: any[];
  line: "";
  color: any;
  constructor(
    private route: ActivatedRoute,
    private transport: TransportService,
    private translate: TranslateService,
    private config: ConfigService,
    private router: Router) { 
      var language = this.config.getLanguage();
    this.translate.use(language);
    }

  ngOnInit() {
    this.ref = this.route.snapshot.paramMap.get('ref');
    this.agencyId = this.route.snapshot.paramMap.get('agencyId');;
    this.groupId = this.route.snapshot.paramMap.get('groupId');
    this.loadList();
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

  notLast(index){
    return index!=this.elements.length-1
  }

  selectElement(e) {
    // route element: go to table
    if (e.route != null) {
      this.router.navigate(['/tt',e.ref,e.agencyId,this.groupId,e.route.routeSymId,e.title, this.color]);

      // group with single route: go to table
    } else if (e.group.routes != null && e.group.routes.length == 1) {
      this.router.navigate(['/tt',e.ref,e.agencyId,e.group.label,e.group.routes[0].routeSymId,e.title,this.color]);

      // group with multiple elements: go to group
    } else {
      this.router.navigate(['/ttgroup',e.ref,e.agencyId, this.groupId ? (this.groupId + ',' + e.group.label) : e.group.label]
      );

    }
  }
  getStyle() {
    return { 'border': '10px solid ' + this.color }
  }
  inside(string) {
    return string.length < 3


  }
  getHtml(elem) {
    if (elem)
    if (this.inside(elem))
      return "<span>" + elem + "</span>"
    else return "<span>" + elem.substring(0, 1); +"</span>"
  }
  loadList() {
    this.transport.getTTData(this.ref, this.agencyId, this.groupId).then(res => {
      if (res) {
        this.color = res.color;
        this.hasMap = (<any>res).hasMap;
        this.markerIcon = (<any>res).markerIcon;
        this.icon = (<any>res).icon;
        this.line = this.groupId?this.groupId:"";
        this.title = this.line;
        this.translate.get('timetable_label').subscribe(
          value => {
            this.title = this.title + " - " + value;
          }
        );
        this.elements = this.transport.flattenData(res, this.ref, this.agencyId);
        this.view = (<any>res).view ? (<any>res).view : 'list';
        if (this.view == 'grid') {
          this.prepareGrid();
        }

      }
    })

  }



}
