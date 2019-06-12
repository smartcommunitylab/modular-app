import { Component, Prop, State, Element,Event, EventEmitter } from '@stencil/core';
import '@ionic/core';
import moment from 'moment';


@Component({
  tag: 'wc-trasporti-table',
  styleUrl: 'wc-trasporti-table.css',
  shadow: true
})

export class AppHome {
  @Prop() data: string;
  @State() dataTT: any;
  @State() fermate: string;
  @State() orari: string;
  @Prop() numero: string;
  @Prop() citta: string;
  @Prop() title: string;
  @Prop() day: string;
  @Prop() arrows: boolean;
  @Prop() font: string;
  @Prop() accessibility: boolean;
  @Prop() color: string;
  @Event() changeDate: EventEmitter;

  @Element() private element: HTMLElement;
  private titleBar: any;
  private subtitleBar: any;


  componentWillLoad() {
    this.dataTT = JSON.parse(this.data);
    this.rootstyle();
    this.Fetch();
  }


  rootstyle() {
    let root = document.documentElement;
    root.style.setProperty('--dim-orari-wid', (screen.width - (screen.width / 100 * 85)).toString() + 'px');
    root.style.setProperty('--dim-orari-hei', (screen.height - (screen.height / 100 * 25)).toString() + 'px');
    root.style.setProperty('--top-orari-dim', '172px');
    root.style.setProperty('--dim-fermate-wid', (screen.width - (screen.width / 100 * 15.5)).toString() + 'px');
    root.style.setProperty('--dim-fermate-hei', (screen.height - (screen.height / 100 * 25)).toString() + 'px');
    root.style.setProperty('--top-fermate-dim', '172px');

  }
  BiancoNero(param) {
    this.fermate = "";
    for (let i in param) {
      this.fermate += parseInt(i) % 2 == 0 ? "<div id='grigioFermate'>" : "<div id='biancoFermate'>";
      this.fermate += param[i].toString() + "</div>";
    }
  }

  componentDidLoad() {
    console.log(this.element);

    // loop over NodeList as per https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
    const list = this.element.querySelectorAll('li.my-list');
    [].forEach.call(list, li => li.style.color = 'red');

    this.setStyle();
  }
  setStyle(): any {
    this.titleBar = this.element.querySelector('#titleBar');
    if (this.titleBar) {
      this.titleBar.style.backgroundColor = this.color;
      this.titleBar.style.color = this.textColor(this.color);
    }
    this.subtitleBar = this.element.querySelector('#subtitleBar');
    if (this.subtitleBar) {
      this.subtitleBar.style.backgroundColor = this.color;
      this.subtitleBar.style.color = this.textColor(this.color);
    }
  }

  StampaOrari(param) {
    try {


      let root = document.documentElement;
      let contatore: number = (window.innerWidth / 68);
      this.orari = "";
      let tmp: string = "";
      for (let i in param[0]) {
        this.orari += parseInt(i) % 2 == 0 ? "<div id='grigioOrari'>" : "<div id='biancoOrari'>";

        for (let j in param) {
          tmp = param[j][i] != "" ? param[j][i] : "&nbsp&nbsp&nbsp&nbsp&nbsp";
          this.orari += tmp + "&nbsp&nbsp&nbsp";
          contatore--;
        }
        console.log(contatore);

        for (let j = 0; j < contatore; j++) {
          this.orari += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
        }

        if (contatore > 0)
          root.style.setProperty('--blocca-barra', 'hidden');

        this.orari += "</div>";
        contatore = window.innerWidth / 68;
      }
    } catch{
      alert("Dati non disponibili");
    }
  }
  Fetch() {
    if (this.dataTT) {
      console.log(this.dataTT);
      // this.dataTT = this.data['stopNames'];
      this.BiancoNero(this.dataTT['stops']);
      // this.dataTT = response['trips'];
      this.StampaOrari(this.dataTT['times']);
    }
    if (this.citta && this.numero) {
      this.remoteFetch();

    }
  }

  remoteFetch(): any {
    fetch('https://os.smartcommunitylab.it/core.mobility/timetable/' + this.citta + '/' + this.numero)
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

  scrollOrari(event) {
    event = event;
    let elemento = this.element.querySelectorAll("#myDIV")[0];
    let daScrollare = this.element.querySelectorAll("#listaFermate")[0];
    daScrollare.scrollTop = elemento.scrollTop;
  }
  visualizza(oggetto: any): string {
    return oggetto;
  }
  prevDate() {
    console.log("prevDate");
    this.changeDate.emit('prevDate');
  }
  nextDate() {
    console.log("nextDate");
    this.changeDate.emit('nextDate');
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
    return [
      <div>
        <div id="header-table">

          <div class="row titleBar">
            <div class="col tt-subtitle">{this.title}</div>
          </div>
          <ion-row class="day-bar">
            <ion-col  size="1" class="col col-25 tt-day btn" onClick={() => this.prevDate()}><ion-icon name="arrow-dropleft"></ion-icon>
            </ion-col>
            <ion-col size="10"  class="col col-50 tt-day">{this.formatDate(this.day, 'ddd')} {this.formatDate(this.day, 'D/M/YYYY')}</ion-col>
            <ion-col size="1"  class="col col-25 tt-day btn" onClick={() => this.nextDate()}><ion-icon name="arrow-dropright"></ion-icon>
            </ion-col>
          </ion-row>
        </div>
        <table>
          <tr>
            <td id="fermate">
              <div id="listaFermate" onScroll={((event) => this.scrollOrari(event))}> <div id="contentFermate" innerHTML={this.visualizza(this.fermate)} ></div></div>
            </td>
            <td id="orari" >
              <div id='myDIV' onScroll={((event) => this.scrollOrari(event))}> <div id='content' innerHTML={this.visualizza(this.orari)} ></div></div>
            </td>
          </tr>
        </table>
      </div>
    ];
  }
  formatDate(day: string, format): any {
    // console.log(moment(day).format(format))
    return moment(Number(day)).format(format);
  }
}