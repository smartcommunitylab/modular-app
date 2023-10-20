import { defineCustomElements as WcClaudio } from 'la-mia-trento-claudio-module/dist/loader';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      WcClaudio(win);
    }
  };
}
