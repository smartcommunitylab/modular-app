import { defineCustomElements as WcHello } from 'la-mia-trento-hello-world/dist/loader';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      WcHello(win);
    }
  };
}

