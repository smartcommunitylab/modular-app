export class TipoFunerale {

    nome: string;
    dataMorte: string;
    luogoFunerale: string;
    dataFunerale: string;
    oraFunerale: string;

    constructor(nominativo, dataMorte, luogoFunerale, dataFunerale, oraFunerale) {
        this.nome = nominativo;
        this.dataMorte = dataMorte;
        this.luogoFunerale = luogoFunerale;
        this.dataFunerale = dataFunerale;
        this.oraFunerale = oraFunerale;
    }
}

