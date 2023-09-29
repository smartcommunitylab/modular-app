import { defineCustomElements as WcTrasporti } from 'la-mia-trento-trasporti/dist/loader';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      WcTrasporti(win);
    }
  };
}

