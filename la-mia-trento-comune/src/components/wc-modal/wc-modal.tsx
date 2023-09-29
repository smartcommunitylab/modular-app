import { Component, Prop, Watch, Event,h, EventEmitter } from '@stencil/core';
import tingle from 'tingle.js';

@Component({
    tag: 'wc-modal',
    styleUrl: 'wc-modal.css'
})
export class WcModal {
    constructor() {

    }
    private modal: any;

    /** Titolo Modale */
    @Prop({mutable:true}) titleMod: string;
    /** Contenuto */
    @Prop({mutable:true}) text: string;
    /** Testo del bottone */
    @Prop({mutable:true}) btnText: string;
    /** Contenuto inviato nell'evento al click del bottone */
    @Prop({mutable:true}) data: any;
    /** Visualizza/Nascondi modal */
    @Prop({mutable:true}) shown: boolean = false;
    
    @Event() actionSelected: EventEmitter;
    actionSelectedHandler(target:string){
        this.actionSelected.emit(target);
    }

    @Watch('title')
    @Watch('text')
    @Watch('data')
    @Watch('btnText')
    @Watch('shown')
    buildModalContent(newValue:boolean){
        this.shown = newValue;
        if(this.shown === true){
            this.modal.open();
        }
        else{
            this.modal.close();
        }
        this.modal.setContent(
            "<h3>"+this.titleMod+"</h3>"+
            "<p>"+this.text+"</p>"
         );
    }

    componentWillLoad(){
        var _class = this;
        this.modal = new tingle.modal({
            footer:true,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: "Chiudi",
            cssClass: ['custom-class-1', 'custom-class-2'],
            onOpen: function() {
                console.log('modal open');
                
            },
            onClose: function() {
                console.log('modal closed');
                _class.shown=false;
            }
        });
        this.modal.setContent(
           "<h3>"+this.titleMod+"</h3>"+
           "<p>"+this.text+"</p>"
        );
        this.modal.addFooterBtn(this.btnText,'tingle-btn tingle-btn--primary', () => {
            this.actionSelectedHandler(this.data);
            this.modal.close();
        });
        if(this.shown){
            this.modal.open();
        }
    }

    render() {
        return ([
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tingle/0.15.1/tingle.min.css"></link>
        ]);
    }
}