import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import { resolve } from 'url';
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
  remote: any;
  contentTypes: any;
  constructor() {

    this.db = new PouchDB('comune-in-tasca');

    this.remote = //'http://192.168.42.201:5984/comune-in-tasca'
                   'http://127.0.0.1:5984/comune-in-tasca';

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
    this.db.sync(this.remote, options);

  }
  getObjectByType(type,id) {
    return this.getObjectById(id);
    // let view = '';
    // let classification = '';
    // if (type) {
    //   // set view
    //   view = this.contentTypes[type];
    // }
    // if (view) {

    //   return this.db.find({
    //     selector: {
    //       'element-type': view
    //     }
    //   });
    // } else return Promise.reject();
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
        if (query.type != 'event') {
          return this.db.find({
            selector: {
              'element-type': view,
              'classification.it': classification
            }
          });
        } else {
          return this.db.find({
            selector: {
              'element-type': view,
              'category': classification
            }
          });
        }
      } else {
        return this.db.find({
          selector: {
            'element-type': view
          }
        });
      }
    }
    return this.db.find(query);
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
