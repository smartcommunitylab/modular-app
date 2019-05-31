import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transport-tt',
  templateUrl: './transport-tt.page.html',
  styleUrls: ['./transport-tt.page.scss'],
})
export class TransportTtPage implements OnInit {
  agencyId: any;
  routeId: any;
  dataTT:any={};
  constructor(private trasportiService: TransportService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.agencyId = this.route.snapshot.paramMap.get('agencyId');;
    this.routeId = this.route.snapshot.paramMap.get('routeId');
    this.getTT(new Date().getTime());
  }
  getTT(date) {
    // Config.loading();
    var that = this;
    this.trasportiService.getTT(this.agencyId, this.routeId , date).then(
      function (data) {
        console.log(data);
        that.dataTT=data;
      }, function (err) {
        console.log(err);
        that.dataTT=null;

      }
    )
  };
};

