import{d as i,e as t,f as e,g as s}from"./p-09c8afd0.js";class o{constructor(e){i(this,e),this.showimage=!0,this.Component_Height="100px",this.Component_Border="black",this.Titolo_Visibility="collapse",this.Titolo_Colore="white",this.Titolo_Size="0px",this.Img_Position="absolute",this.Img_Larghezza="95px",this.Img_Altezza="95px",this.Img_MarginLeft="5px",this.Descrizione_Color="black",this.Mappa_Display="none",this.Display="none",this.DisplayReverse="block",this.Opacity="0",this.OpacityReverse="0",this.aperto=!1,this.AddDurata=1,this.chiudiAnteprima=!0,this.eventMappa=t(this,"eventMappa",7),this.eventShare=t(this,"eventShare",7)}close(){this.Component_Height="100px",this.Component_Border="black",this.Titolo_Visibility="none",this.Titolo_Colore="white",this.Titolo_Size="0px",this.Img_Position="absolute",this.Img_Larghezza="95px",this.Img_Altezza="95px",this.Img_MarginLeft="5px",this.Descrizione_Color="black",this.Mappa_Display="none",this.Display="none",this.DisplayReverse="block",this.Opacity="0",this.OpacityReverse="0"}open(){this.Component_Height="auto",this.Component_Border="white",this.Titolo_Visibility="block",this.Titolo_Colore="black",this.Titolo_Size="25px",this.Img_Position="relative",this.Img_Larghezza="96%",this.Img_Altezza="auto",this.Img_MarginLeft="0px",this.Descrizione_Color="white",this.Mappa_Display="block",setTimeout(()=>{this.Display="block"},100),this.DisplayReverse="none",this.Opacity="1",setTimeout(()=>{this.OpacityReverse="1"},100)}DataEvento(){if(""!=this.dataevento)return this.AddDurata++,[e("p",null,e("span",null,"data evento: "),this.dataevento)]}Orario(){if(""!=this.orario)return this.AddDurata++,[e("p",null,e("span",null,"orario: "),this.orario)]}Durata(){if(""!=this.durata&&this.AddDurata<3)return[e("p",null,e("span",null,"durata: "),this.durata)]}VisualizzaDettaglio(){this.chiudiAnteprima?(this.aperto?this.close():this.open(),this.aperto=!this.aperto):this.chiudiAnteprima=!0}VisualizzaMappa(i){this.chiudiAnteprima=!1,this.eventMappa.emit(i)}VisualizzaShare(i){this.chiudiAnteprima=!1,this.eventShare.emit(i)}render(){return[e("div",{class:"component",onClick:()=>this.VisualizzaDettaglio(),style:{"--Component_height":this.Component_Height,"--Component_Border":this.Component_Border,"--Titolo_Visibility":this.Titolo_Visibility,"--Titolo_Colore":this.Titolo_Colore,"--Titolo_Size":this.Titolo_Size,"--Img_Position":this.Img_Position,"--Img_Larghezza":this.Img_Larghezza,"--Img_Altezza":this.Img_Altezza,"--Img_MarginLeft":this.Img_MarginLeft,"--Descrizione_Color":this.Descrizione_Color,"--Mappa_Display":this.Mappa_Display,"--Display":this.Display,"--DisplayReverse":this.DisplayReverse,"--Opacity":this.Opacity,"--OpacityReverse":this.OpacityReverse}},e("h1",{id:"titolo"},this.titolo),e("div",{class:"detail-bar"}),this.showimage?e("img",{src:this.img}):"",e("div",{class:"descrizione"},e("div",{id:"centra"})),e("div",{id:"Informazioni"},e("div",{class:"testo"},e("p",{id:"descrizione",innerHTML:this.descrizione})),e("div",{class:"margine"})))]}get element(){return s(this)}static get style(){return"\@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\");.component{padding:10px 0;height:var(--Component_Height);border:1px none;margin-bottom:5px;width:100%;font-family:Source Sans Pro,sans-serif;background-color:#efefef}.component,.component img{-webkit-transition:.3s;transition:.3s}.component img{position:var(--Img_Position);height:var(--Img_Altezza);width:var(--Img_Larghezza);margin-left:var(--Img_MarginLeft);z-index:0;display:block;margin-left:auto;margin-right:auto;max-width:900px;max-height:700px;top:var(--imgTop);position:relative}.component .descrizione{margin:0 0 0 100px;padding:0 18px 0 5px}.descrizione{display:var(--DisplayReverse);color:var(--Descrizione_Color);-webkit-transition:.3s;transition:.3s}.descrizione #centra{height:16px;display:table-cell;vertical-align:middle}#titolo{text-align:center;color:#707070;-webkit-transition:1;transition:1;position:relative;width:100%;height:auto;z-index:0;font-size:18px}.descrizione h1{padding:0;margin:0 0 5px 0;font-size:18px;max-height:55px;overflow:hidden;width:calc(100vw - 125px)}.descrizione p{margin:1px 0;width:calc(100vw - 125);font-size:12px}.descrizione span{color:grey}.descrizione #campi{max-height:45px;overflow:hidden}#TitoloEspanso{visibility:var(--Titolo_Visibility);color:var(--Titolo_Colore);-webkit-transition:.3s;transition:.3s;font-size:var(--Titolo_Size);text-align:center}.info svg{position:relative;left:25px;height:30px;width:30px}.info p{float:left;margin:0}.testo{opacity:var(--Opacity);-webkit-transition:1.2s;transition:1.2s}#descrizione{top:40px;text-align:justify;display:var(--Mappa_Display);width:96%}#descrizione,.info{position:relative;margin:auto}.info{opacity:var(--OpacityReverse);top:110px;height:45px;width:100%;-webkit-transition:.3s;transition:.3s}#mappa{cursor:pointer;margin:0;padding:0}#mappa,#TxtMappa{display:var(--Display)}#TxtMappa{position:relative;top:8px}#share,#TxtShare{display:var(--Display);margin:0}#TxtShare{position:relative;top:8px;left:6px;padding:0}#Informazioni{display:var(--Display)}.margine{opacity:var(--OpacityReverse);position:relative;margin:50px 0;top:110px;height:45px;width:100%;-webkit-transition:.3s;transition:.3s;z-index:-2}#divMappa{left:2%}#divMappa,#divShare{position:relative;height:60px;width:80px;cursor:pointer}#divShare{top:-60px;left:120px;-ms-flex-line-pack:center;align-content:center}.detail-bar{height:2px;background:#ff6c00;background:-moz-linear-gradient(left,#ff6c00 0,#ff6c00 25%,#f2c60b 25%,#f2c60b 50%,#6c82ff 50%,#6c82ff 75%,#2d981f 75%,#2d981f 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,#ff6c00),color-stop(25%,#ff6c00),color-stop(25%,#f2c60b),color-stop(50%,#f2c60b),color-stop(50%,#6c82ff),color-stop(75%,#6c82ff),color-stop(50%,#2d981f),color-stop(75%,#2d981f));background:-webkit-linear-gradient(left,#ff6c00,#ff6c00 25%,#f2c60b 0,#f2c60b 50%,#6c82ff 0,#6c82ff 75%,#2d981f 0,#2d981f 75%);background:-o-linear-gradient(left,#ff6c00 0,#ff6c00 25%,#f2c60b 25%,#f2c60b 50%,#6c82ff 50%,#6c82ff 75%,#2d981f 50%,#2d981f 75%);background:-ms-linear-gradient(left,#ff6c00 0,#ff6c00 25%,#f2c60b 25%,#f2c60b 50%,#6c82ff 50%,#6c82ff 75%,#2d981f 50%,#2d981f 75%);background:-webkit-gradient(linear,left top,right top,from(#ff6c00),color-stop(25%,#ff6c00),color-stop(25%,#f2c60b),color-stop(50%,#f2c60b),color-stop(50%,#6c82ff),color-stop(75%,#6c82ff),color-stop(50%,#2d981f),color-stop(75%,#2d981f));background:linear-gradient(90deg,#ff6c00 0,#ff6c00 25%,#f2c60b 0,#f2c60b 50%,#6c82ff 0,#6c82ff 75%,#2d981f 0,#2d981f 75%);margin:10px 0}"}}class a{constructor(e){i(this,e),this.Component_Height="100px",this.Component_Border="black",this.Titolo_Visibility="collapse",this.Titolo_Colore="white",this.Titolo_Size="0px",this.Img_Position="absolute",this.Img_Larghezza="95px",this.Img_Altezza="95px",this.Img_MarginLeft="5px",this.Descrizione_Color="black",this.Mappa_Display="none",this.Display="none",this.DisplayReverse="block",this.Opacity="0",this.OpacityReverse="1",this.ImgTop="auto",this.MousePointer="default",this.MarginTitolo="0px",this.aperto=!1,this.AddDurata=1,this.openHeight="auto",this.urlMappa="https://www.google.com/maps/search/?api=1&query=",this.chiudiAnteprima=!0,this.eventMappa=t(this,"eventMappa",7),this.eventShare=t(this,"eventShare",7),this.eventVideo=t(this,"eventVideo",7)}close(){this.Component_Height="100px",this.Component_Border="black",this.Titolo_Visibility="none",this.Titolo_Colore="white",this.Titolo_Size="0px",this.Img_Position="absolute",this.Img_Larghezza="95px",this.Img_Altezza="95px",this.Img_MarginLeft="5px",this.Descrizione_Color="black",this.Mappa_Display="none",this.Display="none",this.DisplayReverse="block",this.Opacity="0",this.OpacityReverse="1",this.DisplayReverse="block",this.ImgTop="auto",this.MousePointer="default",this.MarginTitolo="0px"}open(){this.Component_Height="auto",this.Component_Border="white",this.Titolo_Visibility="block",this.Titolo_Colore="#707070",this.Titolo_Size="25px",this.Img_Position="relative",this.Img_Larghezza="96%",this.Img_Altezza="auto",this.Img_MarginLeft="0px",this.Descrizione_Color="white",this.Mappa_Display="block",setTimeout(()=>{this.Display="block"},100),this.DisplayReverse="none",this.Opacity="1",setTimeout(()=>{this.OpacityReverse="0"},100),this.ImgTop="-110px",this.MousePointer="pointer",this.MarginTitolo="40px"}DataEvento(){if(""!=this.dataevento)return this.AddDurata++,[e("p",null,e("span",null,"data evento: "),this.dataevento)]}Orario(){if(""!=this.orario)return this.AddDurata++,[e("p",null,e("span",null,"orario: "),this.orario)]}Durata(){if(""!=this.durata&&this.AddDurata<3)return[e("p",null,e("span",null,"durata: "),this.durata)]}CalcolaSizeH1(){return this.titolo}VisualizzaDettaglio(){this.chiudiAnteprima?(this.aperto?this.close():this.open(),this.aperto=!this.aperto):this.chiudiAnteprima=!0}VisualizzaMappa(i){this.chiudiAnteprima=!1,this.eventMappa.emit(i)}VisualizzaShare(i){this.chiudiAnteprima=!1,this.eventShare.emit(i)}VisualizzaVideo(i){this.aperto&&(this.chiudiAnteprima=!1,this.eventVideo.emit(i))}render(){return[e("div",{class:"component",onClick:()=>this.VisualizzaDettaglio(),style:{"--displayReverse":this.DisplayReverse,"--imgTop":this.ImgTop,"--mousePointer":this.MousePointer,"--marginTitolo":this.MarginTitolo,"--Component_height":this.Component_Height,"--Component_Border":this.Component_Border,"--Titolo_Visibility":this.Titolo_Visibility,"--Titolo_Colore":this.Titolo_Colore,"--Titolo_Size":this.Titolo_Size,"--Img_Position":this.Img_Position,"--Img_Larghezza":this.Img_Larghezza,"--Img_Altezza":this.Img_Altezza,"--Img_MarginLeft":this.Img_MarginLeft,"--Descrizione_Color":this.Descrizione_Color,"--Mappa_Display":this.Mappa_Display,"--Display":this.Display,"--DisplayReverse":this.DisplayReverse,"--Opacity":this.Opacity}},e("h1",{id:"titolo"},this.titolo),e("div",{class:"detail-bar "}),e("svg",{class:"pointer",onClick:i=>this.VisualizzaVideo(i),id:"play",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},e("path",{fill:"none",d:"M0 0h24v24H0V0z"}),e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5z"})),e("img",{src:this.img}),e("div",{class:"descrizione"},e("div",{id:"centra"})),e("div",{id:"Informazioni"},e("div",{class:"testo"},e("p",{id:"descrizione"},this.descrizione))))]}get element(){return s(this)}static get style(){return"\@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\");.component{padding:10px 0;height:var(--Component_Height);border:1px none;margin-bottom:5px;width:100%;font-family:Source Sans Pro,sans-serif;background-color:#efefef}.component,.component img{-webkit-transition:.3s;transition:.3s}.component img{position:var(--Img_Position);height:var(--Img_Altezza);width:var(--Img_Larghezza);margin-left:var(--Img_MarginLeft);z-index:0;display:block;margin-left:auto;margin-right:auto;max-width:900px;max-height:700px;top:var(--imgTop);position:relative}.component .descrizione{margin:0 0 0 100px;padding:0 18px 0 5px}.descrizione{color:var(--Descrizione_Color);-webkit-transition:.3s;transition:.3s}.descrizione #centra{height:18px;display:table-cell;vertical-align:middle}#titolo{text-align:center;color:#707070;position:relative;width:100%;height:auto;z-index:0;opacity:var(--OpacityReverse);-webkit-transition:1;transition:1;font-size:18px}.descrizione h1{padding:0;margin:0 0 5px 0;font-size:18px;max-height:55px;overflow:hidden;width:calc(100vw - 125px)}.descrizione p{margin:1px 0;width:calc(100vw - 125);font-size:12px}.descrizione span{color:grey}.descrizione #campi{max-height:45px;overflow:hidden}#TitoloEspanso{color:var(--Titolo_Colore);font-size:var(--Titolo_Size);text-align:center;margin-top:var(--marginTitolo)}.info svg{position:relative;left:25px;height:30px;width:30px}.info p{float:left;margin:0}.testo{opacity:var(--Opacity);-webkit-transition:1.2s;transition:1.2s}#descrizione{position:relative;text-align:justify;display:var(--Mappa_Display);margin:auto;width:96%}.info{opacity:var(--Opacity);position:relative;margin-top:70px;top:20px;height:45px;width:100%;-webkit-transition:.3s;transition:.3s}#mappa{cursor:pointer;margin:0;padding:0}#mappa,#TxtMappa{display:var(--Display)}#TxtMappa{position:relative;top:8px}#share,#TxtShare{display:var(--Display);margin:0}#TxtShare{position:relative;top:8px;left:6px;padding:0}#Informazioni{display:var(--Display);top:-120px;position:relative}.margine{opacity:var(--OpacityReverse);position:relative;margin:50px 0;top:10px;height:45px;width:100%;-webkit-transition:.3s;transition:.3s;z-index:-2}#divMappa{left:2%}#divMappa,#divShare{position:relative;height:60px;width:80px;cursor:pointer}#divShare{top:-60px;left:120px;-ms-flex-line-pack:center;align-content:center}#play{display:var(--Display);height:80px;width:80px;z-index:1000000;opacity:var(--Opacity);position:relative;padding:20px;cursor:pointer;top:60px;margin-left:auto;margin-right:auto}#anteprima{opacity:var(--OpacityReverse);-webkit-transition:1;transition:1}.pointer{cursor:var(--mousePointer)}.detail-bar{height:2px;background:#ff6c00;background:-moz-linear-gradient(left,#ff6c00 0,#ff6c00 25%,#f2c60b 25%,#f2c60b 50%,#6c82ff 50%,#6c82ff 75%,#2d981f 75%,#2d981f 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,#ff6c00),color-stop(25%,#ff6c00),color-stop(25%,#f2c60b),color-stop(50%,#f2c60b),color-stop(50%,#6c82ff),color-stop(75%,#6c82ff),color-stop(50%,#2d981f),color-stop(75%,#2d981f));background:-webkit-linear-gradient(left,#ff6c00,#ff6c00 25%,#f2c60b 0,#f2c60b 50%,#6c82ff 0,#6c82ff 75%,#2d981f 0,#2d981f 75%);background:-o-linear-gradient(left,#ff6c00 0,#ff6c00 25%,#f2c60b 25%,#f2c60b 50%,#6c82ff 50%,#6c82ff 75%,#2d981f 50%,#2d981f 75%);background:-ms-linear-gradient(left,#ff6c00 0,#ff6c00 25%,#f2c60b 25%,#f2c60b 50%,#6c82ff 50%,#6c82ff 75%,#2d981f 50%,#2d981f 75%);background:-webkit-gradient(linear,left top,right top,from(#ff6c00),color-stop(25%,#ff6c00),color-stop(25%,#f2c60b),color-stop(50%,#f2c60b),color-stop(50%,#6c82ff),color-stop(75%,#6c82ff),color-stop(50%,#2d981f),color-stop(75%,#2d981f));background:linear-gradient(90deg,#ff6c00 0,#ff6c00 25%,#f2c60b 0,#f2c60b 50%,#6c82ff 0,#6c82ff 75%,#2d981f 0,#2d981f 75%);margin:10px 0}"}}export{o as wc_anteprima,a as wc_video};