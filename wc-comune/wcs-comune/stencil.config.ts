import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ws-comune',
  plugins: [
    sass()
  ],
  copy: [
    {
      src: "**/*.i18n.*.json",
      dest: "i18n"
    }
  ],
  outputTargets: [
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
