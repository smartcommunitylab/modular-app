export class MyComponent {
    render() {
        {
            console.log('ciao');
        }
        return h("div", null, "Hello, World! I'm ");
    }
    static get is() { return "wc-trasporti-table"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:wc-trasporti-table:**/"; }
}
