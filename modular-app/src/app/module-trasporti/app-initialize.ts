import { defineCustomElements as WcTrasporti } from 'wc-trasporti/dist/loader';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      WcTrasporti(win);
    }
  };
}

