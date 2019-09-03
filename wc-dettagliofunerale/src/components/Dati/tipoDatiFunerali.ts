export class TipoFunerale {

    nome: string;
    dataMorte: string;
    luogoFunerale: string;
    dataFunerale: string;
    oraFunerale: string;
    dataPartenza: string;
    oraPartenza: string;
    constructor(nominativo, dataMorte, luogoFunerale, dataFunerale, oraFunerale, dataPartenza, oraPartenza) {
        this.nome = nominativo;
        this.dataMorte = dataMorte;
        this.luogoFunerale = luogoFunerale;
        this.dataFunerale = dataFunerale;
        this.oraFunerale = oraFunerale;
        this.dataPartenza = dataPartenza;
        this.oraPartenza = oraPartenza;
    }
}

