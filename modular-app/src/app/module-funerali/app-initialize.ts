import { defineCustomElements as wcFunerale } from 'wcs-dettagliofunerale/dist/loader';


export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      //WALoader(win);
      wcFunerale(win);
    }
  };
}
