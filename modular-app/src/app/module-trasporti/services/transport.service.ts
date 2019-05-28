import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private config: ConfigService) { }

  getTTData(ref,agencyId?,  groupId?, routeId?):Promise<any> {
     return this.config.getTtJsonConfig().then(res => {
      if (!!ref) {
        res = res.elements[ref];
      }
      if (!!agencyId) {
        for (var i = 0; i < res.elements.length; i++) {
          if (res.elements[i].agencyId == agencyId) {
            res = res.elements[i];
            break;
          }
        }
      }
  
      var searchRec = function (res, groupIds, idx) {
        if (idx >= groupIds.length) return res;
        for (var i = 0; i < res.groups.length; i++) {
          if (res.groups[i].label == groupIds[idx]) {
            res = searchRec(res.groups[i], groupIds, idx + 1);
            break;
          }
        }
        return Promise.resolve(res);
      };
  
      if (!!groupId) {
        var groupIds = groupId.split(',');
        res = searchRec(res, groupIds, 0);
      }
      if (!!routeId) {
        for (var i = 0; i < res.routes.length; i++) {
          if (res.routes[i].routeId == routeId) {
            res = res.routes[i];
            break;
          }
        }
      }
      return Promise.resolve(res);
    });
   
  }
  flattenElement = function (e, res, ref, agencyId) {
    var localAgency = agencyId;
    if (e.agencyId != null) localAgency = e.agencyId;
    if (e.groups != null) {
      for (var j = 0; j < e.groups.length; j++) {
        res.push({
          ref: ref,
          agencyId: localAgency,
          group: e.groups[j],
          color: e.groups[j].color,
          label: e.groups[j].label,
          title: e.groups[j].title ? e.groups[j].title : e.groups[j].label,
          gridCode: e.groups[j].gridCode
        });
      }
    }
    if (e.routes != null) {
      for (var j = 0; j < e.routes.length; j++) {
        res.push({
          ref: ref,
          agencyId: localAgency,
          route: e.routes[j],
          color: e.color,
          label: e.routes[j].label ? e.routes[j].label : e.label,
          title: e.routes[j].title ? e.routes[j].title : e.title
        });
      }
    }
  }
  flattenData(data, ref, agencyId) {
    var res = [];
    if (data.elements) {
      for (var i = 0; i < data.elements.length; i++) {
        var e = data.elements[i];
        this.flattenElement(e, res, ref, agencyId);
      }
    } else {
      this.flattenElement(data, res, ref, agencyId);
    }
    return res;
  }
}
