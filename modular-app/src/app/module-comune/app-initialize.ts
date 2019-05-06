import { defineCustomElements as WcPoi} from 'wcs-comune/dist/loader';
import { defineCustomElements as WcPath} from 'wcs-comune/dist/loader';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      WcPoi(win);
      WcPath(win);
    }
  };
}

