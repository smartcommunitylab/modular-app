import { Component, State, Prop } from '@stencil/core';

@Component({
  tag: 'wc-trasporti-table',
  styleUrl: 'wc-trasporti-table.css',
  shadow: true
})

export class AppHome {

  @State() name: string;
  @State() oggetto: Array<any>;
  @State() fermate: string;
  @State() orari: string;
  @Prop() numero: string;
  @Prop() citta: string;


  componentWillLoad() {
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
  BiancoNero() {
    this.fermate = "";
    for (let i in this.oggetto) {
      this.fermate += parseInt(i) % 2 == 0 ? "<div id='grigioFermate'>" : "<div id='biancoFermate'>";
      this.fermate += this.oggetto[i].toString() + "</div>";
    }
  }
  StampaOrari() {
    try {


      let root = document.documentElement;
      let contatore: number = (window.innerWidth / 68);
      this.orari = "";
      let tmp: string = "";
      for (let i in this.oggetto[0].stopTimes) {
        this.orari += parseInt(i) % 2 == 0 ? "<div id='grigioOrari'>" : "<div id='biancoOrari'>";

        for (let j in this.oggetto) {
          tmp = this.oggetto[j].stopTimes[i] != "" ? this.oggetto[j].stopTimes[i] : "&nbsp&nbsp&nbsp&nbsp&nbsp";
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
    }catch{
      alert("Dati non disponibili");
    }
  }
  Fetch() {
    fetch('https://os.smartcommunitylab.it/core.mobility/timetable/' + this.citta + '/' + this.numero)
      .then((response: Response) => response.json())
      .then(response => {
        this.oggetto = response['stopNames'];
        this.BiancoNero();
        this.oggetto = response['trips'];
        this.StampaOrari();
      });
  }

  scrollOrari(event) {
    event = event;
    let elemento = document.getElementById("myDIV");
    let daScrollare = document.getElementById("listaFermate");
    daScrollare.scrollTop = elemento.scrollTop;
  }
  visualizza(oggetto: any): string {
    return oggetto;
  }
  render() {
    return [
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
    ];
  }
}