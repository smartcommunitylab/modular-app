
import { defineCustomElements as WcPulStrade } from 'la-mia-trento-comune/dist/loader';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements

      WcPulStrade(win);
    }
  };
}

