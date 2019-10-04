// tslint:disable: no-shadowed-variable
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import { resolve } from 'url';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from './config.service';
PouchDB.plugin(PouchDBFind);

@Injectable({
  providedIn: 'root'
})
export class DbService {
  elements: any = {};
  pois: any;
  gallery: any;
  categories: any;
  menu: any;
  db: any;
  remoteDb: any;
  opts = { live: true, retry: true };
  contentTypes: any;
  MIN_SYNCH_TIME: number = 24 * 60 * 60 * 1000;
  constructor(private loadingController: LoadingController, private translate: TranslateService) {

    this.db = new PouchDB('comune-in-tasca');

    this.remoteDb = new PouchDB('https://cit.platform.smartcommunitylab.it/comuneintasca2');
    // 'http://192.168.42.201:5984/comune-in-tasca';
    // 'http://192.168.1.197:5984/comune-in-tasca'
    // 'http://127.0.0.1:5984/comune-in-tasca';

    this.contentTypes = {
      'content': 'content-item',
      'poi': 'poi-item',
      'event': 'event-item',
      'restaurant': 'restaurant-item',
      'hotel': 'hotel-item',
      'itinerary': 'itinerary-item',
      'itineraries': 'itinerary-item',
      'mainevent': 'main-event-item'
    };
    const options = {
      live: true,
      retry: true,
      continuous: true
    };
    // var url = 'http://192.168.42.201:5984/comune-in-tasca';
    // var opts = { live: true, retry: true };

  }

  onSyncChange(arg0: string, onSyncChange: any): any {
    throw new Error('Method not implemented.');
  }
  onSyncPaused(arg0: string, onSyncPaused: any): any {
    throw new Error('Method not implemented.');
  }
  onSyncError(arg0: string, onSyncError: any): any {
    throw new Error('Method not implemented.');
  }
  getObjectByType(type, id) {
    return this.getObjectById(id);
  }
  lastTimeSynch() {
    const date = new Date().getTime();
    const last = parseInt(localStorage.getItem('UPDATE_SYNCH') || '0', 10);
    return date - last;
  }
  updateLastTimeSynch() {
    localStorage.setItem('UPDATE_SYNCH', new Date().getTime().toString());
  }

  synch(message?: string): Promise<any> {
    console.log('enter in synch');
    return new Promise(async (resolve, reject) => {
      if (this.lastTimeSynch() > this.MIN_SYNCH_TIME) {
        const loading = await this.loadingController.create({
          message: message || this.translate.instant('init_db')
        });
        if (!localStorage.getItem('UPDATE_SYNCH')) {
          await loading.present();
        }
        console.log('this.lastTimeSynch()>this.MIN_SYNCH_TIME');
        this.remoteDb.replicate.to(this.db, { checkpoint: 'target' }).on('complete', () => {
          console.log('synch done');
          loading.dismiss();
          this.updateLastTimeSynch();
          resolve();
        }).on('error', function (err) {
          console.log('error in sync' + err);

          // boo, we hit an error!
          resolve();
        });
      } else {
        console.log('this.lastTimeSynch()<this.MIN_SYNCH_TIME');

        resolve();
      }
    });
  }
  getMenuById(identificator) {
    return this.db.find({
      selector: {
        id: identificator
      }
    });
  }
  getObjectByDataId(id) {

    return this.db.find({
      selector: {
        'id': id
      }
    });
  }


  getObjectById(id) {

    return this.db.find({
      selector: {
        '_id': id
      }
    });
  }



  getObjectByQuery(query) {
    let view = '';
    let classification = '';
    if (query.type) {
      // set view
      view = this.contentTypes[query.type];
    }
    if (view) {
      if (query.classification) {
        // set classification
        classification = query.classification;
        if (query.type !== 'event') {
          return this.db.find({
            selector: {
              'elementType': view,
              'classification.it': classification
            }
          });
        } else {
          return this.db.find({
            selector: {
              'elementType': view,
              'category': classification
            }
          });
        }
      } else {
        return this.db.find({
          selector: {
            'elementType': view
          }
        });
      }
    }
    if (query.selector) {
      if (query.selector['elementType'] === 'event-item') {
        return this.db.find({
          selector: {
            '$or': [
              {
                    'elementType': 'event-item',
                    '$nor': [
                      {
                        'fromTime': {
                          '$lte': new Date().getTime()
                        }
                      }, {
                        'toTime': {
                          '$lte': new Date().getTime()
                        }
                      }],
                      '$and': [
                                {
                                  'fromTime': {
                                    '$gte': new Date().getTime()
                                  }
                                }, {
                                  'fromTime': {
                                    '$lte': new Date().getTime() + 7 * 24 * 60 * 60 * 1000
                                  }
                                }
                              ]

              },
              // {
              //   'elementType': 'main-event-item'
              // }
            ]

          }
        });
      }
    }
    return this.synch().then(() => this.db.find(query));
  }

  getPois() {

    if (this.pois) {
      return Promise.resolve(this.pois);
    }

    return new Promise(resolve => {

      this.db.query('poi-item').then((result) => {

        this.pois = [];

        const docs = result.rows.map((row) => {
          this.pois.push(row);
        });

        resolve(this.pois);

        this.db.changes({
          live: true,
          since: 'now',
          include_docs: true,
          view: '_design/poi-item'
        }).on('change', (change) => {
          this.handleChange(change, 'pois');
        });

      }).catch((error) => {

        console.log(error);

      });

    });

  }

  getMenu() {

    if (this.menu) {
      return Promise.resolve(this.menu);
    }

    return new Promise(resolve => {

      this.db.query('menu-item').then((result) => {

        this.menu = [];

        const docs = result.rows.map((row) => {
          this.menu.push(row);
        });

        resolve(this.menu);

        this.db.changes({
          live: true,
          since: 'now',
          include_docs: true,
          view: '_design/menu-item'
        }).on('change', (change) => {
          this.handleChange(change, 'menu');
        });
        this.db.createIndex({
          index: { fields: ['id'] }
        });
      }).catch((error) => {

        console.log(error);

      });

    });

  }

  getElementsGallery(): any {


    if (this.gallery) {
      return Promise.resolve(this.gallery);
    }

    return new Promise(resolve => {

      this.db.query('gallery-item').then((result) => {

        this.gallery = [];

        const docs = result.rows.map((row) => {
          this.gallery.push(row);
        });

        resolve(this.gallery);

        this.db.changes({
          live: true,
          since: 'now',
          include_docs: true,
          view: '_design/gallery-item'
        }).on('change', (change) => {
          this.handleChange(change, 'gallery');
        });

      }).catch((error) => {

        console.log(error);

      });

    });
  }
  getCategories(): any {


    if (this.categories) {
      return Promise.resolve(this.categories);
    }


    return new Promise(resolve => {

      this.db.query(
        'category-item'


      ).then((result) => {

        this.categories = [];

        const docs = result.rows.map((row) => {
          this.categories.push(row);
        });

        resolve(this.categories);

        this.db.changes({
          live: true, since: 'now',
          include_docs: true,
          view: '_design/category-item'
        }).on('change', (change) => {
          this.handleChange(change, 'categories');
        });

      }).catch((error) => {

        console.log(error);

      });

    });
  }

  // getTodos() {

  //   if (this.data) {
  //     return Promise.resolve(this.data);
  //   }

  //   return new Promise(resolve => {

  //     this.db.allDocs({

  //       include_docs: true

  //     }).then((result) => {

  //       this.data = [];

  //       let docs = result.rows.map((row) => {
  //         this.data.push(row.doc);
  //       });

  //       resolve(this.data);

  //       this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
  //         this.handleChange(change);
  //       });

  //     }).catch((error) => {

  //       console.log(error);

  //     });

  //   });

  // }
  // createTodo(todo){
  //   this.db.post(todo);
  // }

  // updateTodo(todo){
  //   this.db.put(todo).catch((err) => {
  //     console.log(err);
  //   });
  // }

  // deleteTodo(todo){
  //   this.db.remove(todo).catch((err) => {
  //     console.log(err);
  //   });
  // }

  handleChange(change, data) {

    let changedDoc = null;
    let changedIndex = null;

    this.elements[data].forEach((doc, index) => {

      if (doc._id === change.id) {
        changedDoc = doc;
        changedIndex = index;
      }

    });

    // A document was deleted
    if (change.deleted) {
      this.elements[data].splice(changedIndex, 1);
    } else {

      // A document was updated
      if (changedDoc) {
        this.elements[data][changedIndex] = change.doc;
      } else {
        this.elements[data].push(change.doc);
      }

    }

  }

}
