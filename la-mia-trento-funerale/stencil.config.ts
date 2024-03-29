import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'wc-dettagliofunerale',
  outputTargets: [
    {
      type: 'dist'    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
