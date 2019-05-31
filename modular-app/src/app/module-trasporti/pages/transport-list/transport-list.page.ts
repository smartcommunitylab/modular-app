import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportService } from '../../services/transport.service';

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
  constructor(
    private route: ActivatedRoute,
    private transport: TransportService,
    private router: Router) { }

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


  selectElement(e) {
    // route element: go to table
    if (e.route != null) {
      if (!this.groupId){
        this.groupId="no-group";
      }
      this.router.navigate(['/tt',e.ref,e.agencyId,this.groupId,e.route.routeId]);

      // group with single route: go to table
    } else if (e.group.routes != null && e.group.routes.length == 1) {
      this.router.navigate(['/tt',e.ref,e.agencyId,e.group.label,e.group.routes[0].routeId]);

      // group with multiple elements: go to group
    } else {
      this.router.navigate(['/ttgroup',e.ref,e.agencyId, this.groupId ? (this.groupId + ',' + e.group.label) : e.group.label]
      );

    }
  }
  loadList() {
    this.transport.getTTData(this.ref, this.agencyId, this.groupId).then(res => {
      if (res) {
        this.hasMap = (<any>res).hasMap;
        this.markerIcon = (<any>res).markerIcon;
        this.icon = (<any>res).icon;

        // var title = $filter('translate')((<any>data).title ? (<any>data).title : (<any>data).label);
        // if (title.length < 5) title = $filter('translate')('lbl_line') + ' ' + title;
        var title = "Todo"
        this.title = title;
        this.elements = this.transport.flattenData(res, this.ref, this.agencyId);
        this.view = (<any>res).view ? (<any>res).view : 'list';
        if (this.view == 'grid') {
          this.prepareGrid();
        }

      }
    })
    // if (this.agencyId == null && this.groupId == null) {
    //   // main data
    //   var data = this.transport.getTTData(this.ref);
    // } else if (this.agencyId != null) {
    //   // specific data
    //   if (this.groupId != null) {
    //     // specific group
    //     var data = this.transport.getTTData(this.ref, this.agencyId, this.groupId);
    //   } else {
    //     // agency
    //     var data = this.transport.getTTData(this.ref, this.agencyId);
    //   }
    // }

  }



}
