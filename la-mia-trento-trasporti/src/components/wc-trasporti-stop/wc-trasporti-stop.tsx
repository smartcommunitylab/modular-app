import { Component, Prop, State, Element, Event, EventEmitter, Watch, Listen,h } from '@stencil/core';
// import '@ionic/core';
import moment from 'moment';


@Component({
  tag: 'wc-trasporti-stop',
  styleUrl: 'wc-trasporti-stop.css',
  shadow: true
})

export class WcTrasportiStop {
  @Element() element: HTMLElement;

  @Prop() data: string;
  @State() dataTT: any;
  @State() fontsize: number;
  @Prop() numero: string;
  @Prop() citta: string;
  @Prop() route: string;
  @Prop() name: string;
  @Prop() day: string;
  @Prop() arrows: boolean;
  @Prop() font: string;

  @Prop() accessibility: boolean;
  @Prop() color: string;
  @Prop() labeldelay: string;
  @Prop() labeltrips: string;
  @Prop() tripsvalue: string;
  @Prop() showtrips: boolean;
  @Prop() littletable: boolean;
  directionBar: any;
  @Watch('littletable')
  changeStyle() {
    this.changeStyleTable();
  }
  @Event() changeDateEvent: EventEmitter;
  @Event() showStopEvent: EventEmitter;
  @State() fermate: string;
  @State() orari: string;
  private titleBar: any;
  private subtitleBar: any;
  tableCornerStr: string[];
  @Listen('scroll')
  handleScroll(ev) {
    console.log('the body was scrolled', ev);
  }
  rowHeight = 20;
  headerRowHeight = 25; // has a border
  stopsColWidth = 100; // has border
  tableStyle = 'ic_text_size';
  headervariable = 90;
  stopsColLineHeight = 20;

  // header height from the standard style. Augmented in case of iOS non-fullscreen.
  headerHeight = 44 + this.headervariable + 1;
  cellWidthBase = 50;
  cellHeightBase = 28;
  firstRowHeight = 28;
  scrollLeftPosition = 0;
  tt = null;
  runningDate = new Date();
  scrollHeight: number;
  header_row_number: number;
  header: any;
  col: any;
  tableHeight: number;
  scrollWidth: number;
  tableHeaderHeight: number;
  headStr: string[];


  //    set the variables for bigger style
  setBiggerStyle() {
    this.littletable = true;
    var rowHeight = 30;
    this.rowHeight = rowHeight;
    this.headerRowHeight = 30; // has a border
    this.stopsColWidth = 150; // has border
    this.stopsColLineHeight = 30;
    // if (ionic.Platform.isWebView() && ionic.Platform.isIOS() && ionic.Platform.version() < 9) {
    //   this.stopsColLineHeight = 31;
    //     rowHeight = 31;
    //     this.rowHeight = rowHeight;
    // }
    var headerTable = this.element.shadowRoot.querySelector('#header-table');
    var headerheight = 90;
    if (headerTable) {
      headerheight = headerTable.clientHeight;
    }
    this.headervariable = headerheight + 5 * this.header_row_number;
    // header height from the standard style. Augmented in case of iOS non-fullscreen.
    var headerHeight = 44 + this.headervariable + 1;
    // if (ionic.Platform.isIOS() && !ionic.Platform.isFullScreen) {
    //     headerHeight += 20;
    // }
    this.fontsize = 16;
    this.scrollHeight = window.innerHeight - headerHeight;

  };

  //    set the variables for smaller style
  setSmallerStyle() {
    this.littletable = false;
    var rowHeight = 20;
    this.rowHeight = rowHeight;
    // var headerRowHeight = 20; // has a border
    this.stopsColWidth = 100; // has border
    this.fontsize = 12;
    this.stopsColLineHeight = 20;
    // if (ionic.Platform.isWebView() && ionic.Platform.isIOS() && ionic.Platform.version() < 9) {
    //   this.stopsColLineHeight = 21;
    //     rowHeight = 21;
    //     this.rowHeight = rowHeight;
    // }
    var headerTable = this.element.shadowRoot.querySelector('#header-table');
    var headerheight = 90;
    if (headerTable) {
      headerheight = headerTable.clientHeight;
    }
    this.headervariable = headerheight + 5 * this.header_row_number;

    // header height from the standard style. Augmented in case of iOS non-fullscreen.
    var headerHeight = 44 + this.headervariable + 1;
    // if (ionic.Platform.isIOS() && !ionic.Platform.isFullScreen) {
    //     headerHeight += 20;
    // }
    this.scrollHeight = window.innerHeight - headerHeight;
  };

  changeStyleTable() {
    //change style to the table

    // var actualPosition = {};
    // var actualCol = 0;
    // var actualRow = 0;
    // $ionicLoading.show({
    //     duration: 2000
    // });
    setTimeout(() => {
      if (!this.littletable) {
        this.setBiggerStyle();
        // profileService.setTableBigSize();
      } else {
        this.setSmallerStyle();
        // profileService.setTableLittleSize()
      }
      this.tableStyle = this.littletable ? 'ic_text_size' : 'ic_text_size_outline';
      // actualPosition = $ionicScrollDelegate.$getByHandle('list').getScrollPosition();
      // actualCol = actualPosition.left / this.colwidth;
      // actualRow = actualPosition.top / this.stopsColLineHeight;
      // $ionicScrollDelegate.$getByHandle('list').scrollTo(0, 0, false);
      // $ionicScrollDelegate.$getByHandle('list').resize();
    }, 100);
    setTimeout(function () {
      // $ionicScrollDelegate.$getByHandle('list').scrollTo(actualCol * this.colwidth, actualRow * this.stopsColLineHeight, false);

    }, 2000);

  }
  initMeasures(data, noscroll) {
    if (window.innerHeight < window.innerWidth) {
      this.stopsColWidth = 170;
    } else {
      if (this.littletable) {
        this.stopsColWidth = 150;
      } else {
        this.stopsColWidth = 100;
      }
    }
    // header rows
    this.header = null;
    // first col with stops
    this.col = null;

    if (!data.tripIds || data.tripIds.length == 0) return;
    this.tableHeight = data.stops.length * this.rowHeight;
    this.scrollWidth = window.innerWidth + (this.accessibility ? 0 : 25); //plus accessibility
    this.scrollHeight = window.innerHeight - this.headerHeight;
    this.tableHeaderHeight = this.header_row_number * this.headerRowHeight;

    if (!noscroll) {
      setTimeout(function () {


        // var columnScrollTo = ttService.locateTablePosition(data, new Date());
        // columnScrollTo = Math.min(columnScrollTo, data.tripIds.length - (this.scrollWidth - this.stopsColWidth) / $scope.colwidth);
        // var pos = this.colwidth * columnScrollTo;
        // $ionicScrollDelegate.$getByHandle('list').scrollTo(pos, 0, true);

      }, 300);
    }
  }


  componentWillLoad() {
    this.changeStyle();
    this.buildData()

  }
  buildData(): any {
    this.dataTT = JSON.parse(this.data);
    this.rootstyle();
    this.Fetch();
    this.initMeasures(this.dataTT, true);

  }


  rootstyle() {
    let root = document.documentElement;
    var top_table = 70
    root.style.setProperty('--dim-orari-wid', (screen.width - (screen.width / 100 * 85)).toString() + 'px');
    root.style.setProperty('--top-table', top_table + 'px');
    root.style.setProperty('--dim-orari-hei', (screen.height - top_table).toString() + 'px');
    root.style.setProperty('--dim-fermate-wid', (screen.width - (screen.width / 100 * 15.5)).toString() + 'px');
    root.style.setProperty('--dim-fermate-hei', (screen.height - top_table).toString() + 'px');

  }
  BiancoNero(param) {
    this.fermate = "";
    for (let i in param) {
      this.fermate += parseInt(i) % 2 == 0 ? "<div id='grigioFermate'>" : "<div id='biancoFermate'>";
      this.fermate += param[i].toString() + "</div>";
    }
  }

  componentDidLoad() {
    const list = this.element.shadowRoot.querySelectorAll('li.my-list');
    [].forEach.call(list, li => li.style.color = 'red');

    this.setStyle();
  }
  setStyle(): any {
    // console.log(this.element.shadowRoot.innerHTML);
    this.titleBar = this.element.shadowRoot.querySelector('.titleBar');
    if (this.titleBar) {
      this.titleBar.style.backgroundColor = this.color;
      this.titleBar.style.color = this.textColor(this.color);
    }
    this.directionBar = this.element.shadowRoot.querySelector('.directionBar');
    if (this.directionBar) {
      this.directionBar.style.backgroundColor = this.color;
      this.directionBar.style.color = this.textColor(this.color);
    }
    this.subtitleBar = this.element.shadowRoot.querySelector('.day-bar');
    if (this.subtitleBar) {
      this.subtitleBar.style.backgroundColor = this.color;
      this.subtitleBar.style.color = this.textColor(this.color);
    }
  }
  expandStr = function (str) {
    if (str.length < 9) {
      var m = 9 - str.length;
      var l = Math.round(m / 2);
      for (var i = 0; i < l; i++) {
        str = '&nbsp;' + str;
      }
      for (var i = 0; i < m - l; i++) {
        str += '&nbsp';
      }
    }
    return str;
  };
  // convert delay object to string
  getDelayValue(delay) {
    var res = '';
    //    if (delay && delay.SERVICE && delay.SERVICE > 0) {
    //      res += '<span>'+delay.SERVICE+'\'</span>';
    //    }
    //    if (delay && delay.USER && delay.USER > 0) {
    //      res += '<span>'+delay.USER+'\'</span>';
    //    }
    if (delay && delay.SERVICE && delay.SERVICE > 0) {
      res += delay.SERVICE + '\'';
    }
    if (delay && delay.USER && delay.USER > 0) {
      if (res.length > 0) res += ' / ';
      res += delay.USER + '\'';
    }
    return res;
  }
  StampaOrari(data) {
    var time;
    var previousTime;
    var rows = [];
    var rowContent = "";

    if (data) {
      for (var k = 0; k < data.length; k++) {
        time = new Date(data[k].time);
        //check first value of data and put the hour to row[0], the other are values until it changes

        if (k == 0) {
          rowContent = "<span class='hour'>"+ (time.getHours() < 10 ? ' ' : '') +time.getHours() + "</span>|";
        }
        if (k > 0 && previousTime && time.getHours() != previousTime.getHours()) {
          if (time.getDay() != previousTime.getDay()) {
             break
             }
          rows.push(rowContent);
          //new hours line
          rowContent += "<br/><span class='hour'>"+time.getHours() + "</span>|";
        }
        var str = (time.getHours() < 10 ? '0' : '') + time.getHours() + ":" + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
        rowContent += '&nbsp;&nbsp;' + str + '&nbsp;&nbsp;'
        previousTime = time;
      }
    }

    //  this.header_row_number = this.showtrips ? 2 : 1;
    //  // this.header_row_number = 1;

    //   var dataStr = '';
    //   var headStr = this.header_row_number == 2 ? ['', ''] : [''];
    //   var colStr = '';
    //   var tableCornerStr = ['', ''];

    //   var rows = [];
    //   if (data.stops) {
    //     for (var row = 0; row < data.stops.length + this.header_row_number; row++) {
    //       var rowContent = [];
    //       for (var col = 0; col <= data.tripIds.length; col++) {
    //         // corner 0
    //         if (col == 0 && row == 0) {
    //           // var str = $filter('translate')('lbl_delays');
    //           var str = this.labeldelay;
    //           rowContent.push(str);
    //           tableCornerStr[0] = str;
    //           // corner 1
    //         } else if (this.header_row_number == 2 && row == 1 && col == 0) {
    //           // var str = $filter('translate')('lbl_trips');
    //           var str = this.labeltrips;
    //           rowContent.push(str);
    //           tableCornerStr[1] = str;
    //           // stops column
    //         } else if (col == 0) {
    //           rowContent.push(data.stops[row - this.header_row_number]);
    //           //check from data if accessibility
    //           if (!!data.wheelChairBoarding && data.wheelChairBoarding[row - this.header_row_number] == 1) {
    //             // if (data.wheelChairBoarding && data.wheelChairBoarding[row - $scope.header_row_number] == 1) {
    //             colStr += '<div class="accessibilityBullet"><ion-icon name="radio-button-on"></ion-icon></div>';
    //           } else {
    //             colStr += '<div class="accessibilityBullet"></div>';

    //           }
    //           colStr += data.stops[row - this.header_row_number] + '<br/>';
    //           // delays header row
    //         } else if (row == 0) {
    //           var str = '';
    //           if (data.delays) str = this.getDelayValue(data.delays[col - 1]);
    //           rowContent.push(str);
    //           str = this.expandStr(str);
    //           headStr[0] += str;
    //           // train lines header row
    //         } else if (this.header_row_number == 2 && row == 1) {
    //           // var str1 = this.getTripText(data.tripIds[col - 1]);
    //           var str1:any = this.tripsvalue;
    //           rowContent.push(str1);
    //           str1 = this.expandStr(str1);
    //           headStr[1] += str1;
    //           // table data
    //         } else {
    //           var str1 = data.times[col - 1][row - this.header_row_number];
    //           rowContent.push(str1);
    //           if (!str1) str1 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    //           dataStr += '&nbsp;&nbsp;' + str1 + '&nbsp;&nbsp;';
    //           if (col == data.tripIds.length) dataStr += '<br/>';
    //         }
    //       }
    //       rows.push(rowContent);
    //     }
    //   } else {
    //     data.stops = [];
    //     data.stopIds = [];
    //   }
    //   // this.data = rows;
    //   this.headStr = headStr;
    this.orari = rowContent;
    //   this.tableCornerStr = tableCornerStr;
    //   this.fermate = colStr;

    //   this.tt = rows;

    //   this.initMeasures(data, true);
  };
  getTripText(tripLabel) {
    // try {
    //     return this.TRIP_TYPE_EXTRACTOR($stateParams.agencyId, $scope.route.routeSymId, trip);
    // } catch (e) {
    return tripLabel;
    // }
  }

  Fetch() {
    if (this.dataTT) {
      console.log(this.dataTT);
      // this.dataTT = this.data['stopNames'];
      //this.BiancoNero(this.dataTT['stops']);
      // this.dataTT = response['trips'];
      this.StampaOrari(this.dataTT);
    }
    if (this.citta && this.numero) {
      this.remoteFetch();

    }
  }

  remoteFetch(): any {
    fetch(process.env.mobility_api+'/timetable/' + this.citta + '/' + this.numero)
      .then((response: Response) => {
        response.json()
      })
      .then(response => {
        this.dataTT = response['stopNames'];
        this.BiancoNero(this.dataTT);
        this.dataTT = response['trips'];
        this.StampaOrari(this.dataTT['times']);
      });
  }

  scrollOrari(event?) {
    event = event;
    // let elemento = this.element.shadowRoot.querySelectorAll("#myDIV")[0];
    // let daScrollare = this.element.shadowRoot.querySelectorAll("#listaFermate")[0];
    // daScrollare.scrollTop = elemento.scrollTop;
    if (this.header == null) {
      this.header = this.element.shadowRoot.querySelector('#table-header');
    }
    if (this.col == null) {
      this.col = this.element.shadowRoot.querySelector('#table-col');
    }
    // var pos = $ionicScrollDelegate.$getByHandle('list').getScrollPosition();
    var pos = {
      top: event.detail.currentY,
      left: event.detail.currentX
    }
    if (this.header != null) {
      this.header.style.top = pos.top + 'px';
    }
    if (this.col != null) {
      this.col.style.left = pos.left + 'px';
      //        alert('scroll top' + pos.top + 'px ' + pos.left + 'px');
    }
  }
  visualizza(oggetto: any): string {
    return oggetto;
  }
  prevDate() {
    //console.log("prevDate");
    this.changeDateEvent.emit('prevDate');
  }
  nextDate() {
    //console.log("nextDate");
    this.changeDateEvent.emit('nextDate');
  }
  textColor(color) {
    if (this.isDarkColor(color)) return '#fff';
    return '#000';
  };
  isDarkColor(color) {
    if (!color) return true;
    var c = color.substring(1); // strip #
    var rgb = parseInt(c, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue

    var luma = (r + g + b) / 3; //0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma < 128;
  };

  render() {

    var styleTableTable = {
      left: `50%`,
      top: `${this.tableHeaderHeight}px`,
      lineHeight: `${this.stopsColLineHeight}px`,
      backgroundSize: `100% ${this.rowHeight * 2}px`,
      fontSize: `${this.fontsize}px`,
      // backgroundImage:`-webkit-linear-gradient(90deg,transparent, transparent ${rowHeight}px, #eee ${rowHeight}px, #eee ${rowHeight*2}px)`,
      backgroundImage: `linear-gradient(180deg,transparent, transparent ${this.rowHeight}px, #eee ${this.rowHeight}px, #eee ${this.rowHeight * 2}px)`
    }

    return [
      <div>
        <div id="header-table">
          <div class="row titleBar">
            <div class="col tt-subtitle">{this.route}</div>
          </div>
          <div class="row directionBar">
            <div class="col tt-subtitle">{this.name}</div>
          </div>
          <ion-row class="day-bar">
            <ion-col size="1" class="col col-25 tt-day btn" onClick={() => this.prevDate()}>
              <ion-icon name="arrow-dropleft"></ion-icon>
            </ion-col>
            <ion-col size="10" class="col col-50 tt-day">{this.formatDate(this.day, 'ddd')} {this.formatDate(this.day, 'D/M/YYYY')}</ion-col>
            <ion-col size="1" class="col col-25 tt-day btn" onClick={() => this.nextDate()}><ion-icon name="arrow-dropright"></ion-icon>
            </ion-col>
          </ion-row>
        </div>
        <div id="table-table" innerHTML={this.visualizza(this.orari)} style={styleTableTable} ></div>

        {/* <div class="row table-container" >
          <div  class= { "tt-table" +  (this.accessibility === true ? ' tt-table-acc' : ' ') }>
            <ion-content scrollX={true} scrollY={true} scrollEvents={true} has-bouncing="false" id="tablescroll" onIonScrollStart={() => { }}
              onIonScroll={(event) => this.scrollOrari(event)}
              onIonScrollEnd={() => { }} style={styleTableScroll} class="overlapDiv"
              delegate-handle="list">

              <div id="table-table" innerHTML={this.visualizza(this.orari)} style={styleTableTable} ></div>
            </ion-content>
          </div>
        </div> */}
      </div>
    ];
  }
  formatDate(day: string, format): any {
    // console.log(moment(day).format(format))
    return moment(Number(day)).format(format);
  }
}