import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run my-rx-darg:serve',
        production: 'nx run my-rx-darg:preview',
      },
      ciWebServerCommand: 'nx run my-rx-darg:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
