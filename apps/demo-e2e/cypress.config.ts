import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run demo:serve',
        production: 'nx run demo:preview',
      },
      ciWebServerCommand: 'nx run demo:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
