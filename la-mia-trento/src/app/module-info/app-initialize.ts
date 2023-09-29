import { defineCustomElements as WcInfo } from 'la-mia-trento-info/dist//loader';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      WcInfo(win);
    }
  };
}

