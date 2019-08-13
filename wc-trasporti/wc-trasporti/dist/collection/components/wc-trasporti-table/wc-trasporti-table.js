export class AppHome {
    constructor() {
        this.rowHeight = 20;
        this.headerRowHeight = 25;
        this.stopsColWidth = 100;
        this.tableStyle = 'ic_text_size';
        this.headervariable = 90;
        this.stopsColLineHeight = 20;
        this.headerHeight = 44 + this.headervariable + 1;
        this.cellWidthBase = 50;
        this.cellHeightBase = 28;
        this.firstRowHeight = 28;
        this.scrollLeftPosition = 0;
        this.tt = null;
        this.runningDate = new Date();
        this.expandStr = function (str) {
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
    }
    reloadTable() {
        this.componentWillLoad();
    }
    watchHandler(newValue, oldValue) {
        console.log('animation from' + newValue + 'to' + oldValue);
        this.animateData(oldValue, newValue);
    }
    changeStyle() {
        this.changeStyleTable();
    }
    handleScroll(ev) {
        console.log('the body was scrolled', ev);
    }
    animateData(oldValue, newValue) {
        throw new Error("Method not implemented." + oldValue + newValue);
    }
    setBiggerStyle() {
        this.littletable = true;
        var rowHeight = 30;
        this.rowHeight = rowHeight;
        this.headerRowHeight = 30;
        this.stopsColWidth = 150;
        this.stopsColLineHeight = 30;
        var headerTable = this.element.shadowRoot.querySelector('#header-table');
        var headerheight = 90;
        if (headerTable) {
            headerheight = headerTable.clientHeight;
        }
        this.headervariable = headerheight + 5 * this.header_row_number;
        var headerHeight = 44 + this.headervariable + 1;
        this.fontsize = 16;
        this.scrollHeight = window.innerHeight - headerHeight;
    }
    ;
    setSmallerStyle() {
        this.littletable = false;
        var rowHeight = 20;
        this.rowHeight = rowHeight;
        this.stopsColWidth = 100;
        this.fontsize = 12;
        this.stopsColLineHeight = 20;
        var headerTable = this.element.shadowRoot.querySelector('#header-table');
        var headerheight = 90;
        if (headerTable) {
            headerheight = headerTable.clientHeight;
        }
        this.headervariable = headerheight + 5 * this.header_row_number;
        var headerHeight = 44 + this.headervariable + 1;
        this.scrollHeight = window.innerHeight - headerHeight;
    }
    ;
    changeStyleTable() {
        setTimeout(() => {
            if (!this.littletable) {
                this.setBiggerStyle();
            }
            else {
                this.setSmallerStyle();
            }
            this.tableStyle = this.littletable ? 'ic_text_size' : 'ic_text_size_outline';
        }, 100);
        setTimeout(function () {
        }, 2000);
    }
    initMeasures(data, noscroll) {
        if (window.innerHeight < window.innerWidth) {
            this.stopsColWidth = 170;
        }
        else {
            if (this.littletable) {
                this.stopsColWidth = 150;
            }
            else {
                this.stopsColWidth = 100;
            }
        }
        this.header = null;
        this.col = null;
        if (!data.tripIds || data.tripIds.length == 0)
            return;
        this.tableHeight = data.stops.length * this.rowHeight;
        this.scrollWidth = window.innerWidth + (this.accessibility ? 0 : 25);
        this.scrollHeight = window.innerHeight - this.headerHeight;
        this.tableHeaderHeight = this.showHeader ? (this.header_row_number * this.headerRowHeight) : 0;
        if (!noscroll) {
            setTimeout(function () {
            }, 300);
        }
    }
    componentWillLoad() {
        this.changeStyle();
        this.buildData();
    }
    buildData() {
        this.dataTT = JSON.parse(this.data);
        this.rootstyle();
        this.Fetch();
        this.initMeasures(this.dataTT, true);
    }
    rootstyle() {
        let root = document.documentElement;
        var top_table = 70;
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
    setStyle() {
        this.titleBar = this.element.shadowRoot.querySelector('.titleBar');
        if (this.titleBar) {
            this.titleBar.style.backgroundColor = this.color;
            this.titleBar.style.color = this.textColor(this.color);
        }
        this.subtitleBar = this.element.shadowRoot.querySelector('.day-bar');
        if (this.subtitleBar) {
            this.subtitleBar.style.backgroundColor = this.color;
            this.subtitleBar.style.color = this.textColor(this.color);
        }
    }
    getDelayValue(delay) {
        var res = '';
        if (delay && delay.SERVICE && delay.SERVICE > 0) {
            res += delay.SERVICE + '\'';
        }
        if (delay && delay.USER && delay.USER > 0) {
            if (res.length > 0)
                res += ' / ';
            res += delay.USER + '\'';
        }
        return res;
    }
    StampaOrari(data) {
        this.header_row_number = this.showtrips ? 2 : 1;
        var dataStr = '';
        var headStr = this.header_row_number == 2 ? ['', ''] : [''];
        var colStr = '';
        var tableCornerStr = ['', ''];
        var rows = [];
        if (data.stops) {
            for (var row = 0; row < data.stops.length + this.header_row_number; row++) {
                var rowContent = [];
                for (var col = 0; col <= data.tripIds.length; col++) {
                    if (col == 0 && row == 0) {
                        var str = this.labeldelay;
                        rowContent.push(str);
                        tableCornerStr[0] = str;
                    }
                    else if (this.header_row_number == 2 && row == 1 && col == 0) {
                        var str = this.labeltrips;
                        rowContent.push(str);
                        tableCornerStr[1] = str;
                    }
                    else if (col == 0) {
                        rowContent.push(data.stops[row - this.header_row_number]);
                        if (!!data.wheelChairBoarding && data.wheelChairBoarding[row - this.header_row_number] == 1) {
                            colStr += '<div class="accessibilityBullet"><ion-icon name="radio-button-on"></ion-icon></div>';
                        }
                        else {
                            colStr += '<div class="accessibilityBullet"></div>';
                        }
                        colStr += data.stops[row - this.header_row_number] + '<br/>';
                    }
                    else if (row == 0) {
                        var str = '';
                        if (data.delays)
                            str = this.getDelayValue(data.delays[col - 1]);
                        rowContent.push(str);
                        str = this.expandStr(str);
                        headStr[0] += str;
                    }
                    else if (this.header_row_number == 2 && row == 1) {
                        var str1 = this.getTripText(this.agencyid, data.tripIds[col - 1]);
                        console.log(str1);
                        rowContent.push(str1);
                        str1 = this.expandStr(str1);
                        headStr[1] += str1;
                    }
                    else {
                        var str1 = data.times[col - 1][row - this.header_row_number];
                        rowContent.push(str1);
                        if (!str1)
                            str1 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                        dataStr += '&nbsp;&nbsp;' + str1 + '&nbsp;&nbsp;';
                        if (col == data.tripIds.length)
                            dataStr += '<br/>';
                    }
                }
                rows.push(rowContent);
            }
        }
        else {
            data.stops = [];
            data.stopIds = [];
        }
        this.headStr = headStr;
        this.orari = dataStr;
        this.tableCornerStr = tableCornerStr;
        this.fermate = colStr;
        this.tt = rows;
        this.initMeasures(data, true);
    }
    ;
    tripExtractor(agencyId, tripId) {
        if (agencyId == '5' || agencyId == '6' || agencyId == '10') {
            return tripId.replace(/\d+.*/g, '').toUpperCase();
        }
        return tripId;
    }
    getTripText(agencyId, tripLabel) {
        try {
            return this.tripExtractor(agencyId, tripLabel);
        }
        catch (e) {
            return tripLabel;
        }
    }
    Fetch() {
        if (this.dataTT) {
            console.log(this.dataTT);
            this.StampaOrari(this.dataTT);
        }
        if (this.citta && this.numero) {
            this.remoteFetch();
        }
    }
    remoteFetch() {
        fetch('https://os.smartcommunitylab.it/core.mobility/timetable/' + this.citta + '/' + this.numero)
            .then((response) => {
            response.json();
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
        if (this.header == null) {
            this.header = this.element.shadowRoot.querySelector('#table-header');
        }
        if (this.col == null) {
            this.col = this.element.shadowRoot.querySelector('#table-col');
        }
        var pos = {
            top: event.detail.currentY,
            left: event.detail.currentX
        };
        if (this.header != null) {
            this.header.style.top = pos.top + 'px';
        }
        if (this.col != null) {
            this.col.style.left = pos.left + 'px';
        }
    }
    visualizza(oggetto) {
        return oggetto;
    }
    prevDate() {
        this.changeDateEvent.emit('prevDate');
    }
    nextDate() {
        this.changeDateEvent.emit('nextDate');
    }
    textColor(color) {
        if (this.isDarkColor(color))
            return '#fff';
        return '#000';
    }
    ;
    isDarkColor(color) {
        if (!color)
            return true;
        var c = color.substring(1);
        var rgb = parseInt(c, 16);
        var r = (rgb >> 16) & 0xff;
        var g = (rgb >> 8) & 0xff;
        var b = (rgb >> 0) & 0xff;
        var luma = (r + g + b) / 3;
        return luma < 128;
    }
    ;
    showStop(stop) {
        this.showStopEvent.emit(stop);
    }
    render() {
        var styleTableScroll = {
            height: `${this.scrollHeight}px`,
            width: `${this.scrollWidth}px`
        };
        var styleTableCol = {
            width: `${this.stopsColWidth}px`,
            lineHeight: `${this.stopsColLineHeight}px`,
            backgroundSize: `100% ${this.rowHeight * 2}px`,
            fontSize: `${this.fontsize}px`,
            left: `${this.col ? this.col.style.left : 0}px`,
            top: `${this.col ? this.col.style.top : 25 * (this.showHeader ? this.header_row_number : 0)}px`,
            backgroundImage: `linear-gradient(180deg,#fff, #fff ${this.rowHeight}px, #eee ${this.rowHeight}px, #eee ${this.rowHeight * 2}px`
        };
        var styleTableHeader = {
            left: `${this.stopsColWidth}px`,
            top: `${this.header ? this.header.style.top : 0}`,
            fontSize: `${this.fontsize}}px`
        };
        var styleTableTable = {
            left: `${this.stopsColWidth}px`,
            top: `${this.tableHeaderHeight}px`,
            lineHeight: `${this.stopsColLineHeight}px`,
            backgroundSize: `100% ${this.rowHeight * 2}px`,
            fontSize: `${this.fontsize}px`,
            backgroundImage: `linear-gradient(180deg,transparent, transparent ${this.rowHeight}px, #eee ${this.rowHeight}px, #eee ${this.rowHeight * 2}px)`
        };
        var styleTableCorner = {
            width: `${this.stopsColWidth}px`,
            height: `${this.tableHeaderHeight}px`
        };
        var styleAccessibility = {
            fontSize: `${this.fontsize}px`
        };
        var styleSecondRow = {
            fontSize: `${this.fontsize}px`
        };
        return [
            h("div", null,
                h("div", { id: "header-table" },
                    h("div", { class: "row titleBar" },
                        h("div", { class: "col tt-subtitle" }, this.titolo)),
                    h("ion-row", { class: "line-title" },
                        h("ion-col", { size: "12" }, this.title)),
                    h("ion-row", { class: "day-bar" },
                        h("ion-col", { size: "1", class: "col col-25 tt-day btn", onClick: () => this.prevDate() },
                            h("ion-icon", { name: "arrow-dropleft" })),
                        h("ion-col", { size: "10", class: "col col-50 tt-day " }, this.datetable),
                        h("ion-col", { size: "1", class: "col col-25 tt-day btn", onClick: () => this.nextDate() },
                            h("ion-icon", { name: "arrow-dropright" })))),
                h("div", { class: "row table-container" },
                    h("div", { class: "tt-table" + (this.accessibility === true ? ' tt-table-acc' : ' ') },
                        this.orari && this.showHeader
                            ? h("div", { id: "table-corner", style: styleTableCorner },
                                h("div", { style: styleAccessibility },
                                    " ",
                                    h("ion-icon", { class: "table-accessibility", name: "person" }),
                                    h("span", { class: "corner-delay" }, this.tableCornerStr[0])),
                                this.header_row_number == 2
                                    ? h("div", { class: "delay", style: styleSecondRow }, this.tableCornerStr[1])
                                    : "")
                            : "",
                        h("ion-content", { scrollX: true, scrollY: true, scrollEvents: true, "has-bouncing": "false", id: "tablescroll", onIonScrollStart: () => { }, onIonScroll: (event) => this.scrollOrari(event), onIonScrollEnd: () => { }, style: styleTableScroll, class: "overlapDiv", "delegate-handle": "list" },
                            h("div", { id: "table-col", style: styleTableCol }, this.dataTT.stops.map((stop, index) => parseInt(index) % 2 == 0
                                ? h("div", { id: 'grigioFermate', onClick: () => this.showStop(stop) }, this.accessibility
                                    ? h("div", null, !!this.dataTT.wheelChairBoarding && this.dataTT.wheelChairBoarding[index] == 1
                                        ? h("div", null,
                                            h("div", { class: "accessibilityBullet" },
                                                h("ion-icon", { name: "radio-button-on" })),
                                            stop)
                                        : h("div", null,
                                            h("div", { class: "accessibilityBullet" }),
                                            "  ",
                                            h("span", null, stop)))
                                    : h("div", null, stop))
                                : h("div", { id: 'biancoFermate', onClick: () => this.showStop(stop) }, this.accessibility
                                    ? h("div", null, !!this.dataTT.wheelChairBoarding && this.dataTT.wheelChairBoarding[index] == 1
                                        ? h("div", null,
                                            h("div", { class: "accessibilityBullet" },
                                                h("ion-icon", { name: "radio-button-on" })),
                                            stop)
                                        : h("div", null,
                                            h("div", { class: "accessibilityBullet" }),
                                            " ",
                                            h("span", null, stop)))
                                    : h("div", null, stop)))),
                            this.showHeader
                                ? h("div", { id: "table-header", style: styleTableHeader },
                                    h("div", { innerHTML: this.headStr[0] }),
                                    this.header_row_number == 2
                                        ? h("div", { innerHTML: this.headStr[1], class: "header-row-types" })
                                        : "")
                                : "",
                            h("div", { id: "table-table", innerHTML: this.visualizza(this.orari), style: styleTableTable })))))
        ];
    }
    static get is() { return "wc-trasporti-table"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "accessibility": {
            "type": Boolean,
            "attr": "accessibility"
        },
        "agencyid": {
            "type": String,
            "attr": "agencyid"
        },
        "arrows": {
            "type": Boolean,
            "attr": "arrows"
        },
        "citta": {
            "type": String,
            "attr": "citta"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "data": {
            "type": String,
            "attr": "data",
            "watchCallbacks": ["reloadTable"]
        },
        "dataTT": {
            "state": true
        },
        "datetable": {
            "type": String,
            "attr": "datetable",
            "watchCallbacks": ["watchHandler"]
        },
        "day": {
            "type": String,
            "attr": "day"
        },
        "element": {
            "elementRef": true
        },
        "fermate": {
            "state": true
        },
        "font": {
            "type": String,
            "attr": "font"
        },
        "fontsize": {
            "state": true
        },
        "labeldelay": {
            "type": String,
            "attr": "labeldelay"
        },
        "labeltrips": {
            "type": String,
            "attr": "labeltrips"
        },
        "lang": {
            "type": String,
            "attr": "lang"
        },
        "littletable": {
            "type": Boolean,
            "attr": "littletable",
            "watchCallbacks": ["changeStyle"]
        },
        "numero": {
            "type": String,
            "attr": "numero"
        },
        "orari": {
            "state": true
        },
        "showHeader": {
            "type": Boolean,
            "attr": "show-header"
        },
        "showtrips": {
            "type": Boolean,
            "attr": "showtrips"
        },
        "title": {
            "type": String,
            "attr": "title"
        },
        "titolo": {
            "type": String,
            "attr": "titolo"
        },
        "tripsvalue": {
            "type": String,
            "attr": "tripsvalue"
        }
    }; }
    static get events() { return [{
            "name": "changeDateEvent",
            "method": "changeDateEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "showStopEvent",
            "method": "showStopEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "scroll",
            "method": "handleScroll",
            "passive": true
        }]; }
    static get style() { return "/**style-placeholder:wc-trasporti-table:**/"; }
}
