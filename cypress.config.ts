import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    GRAPHQL_URL: 'https://be-sfx.demo.magexo.cloud/graphql',
    STORE: 'b2c_en',
  },

  defaultCommandTimeout: 10000,

  retries: {
    runMode: 2,
  },

  viewportWidth: 1280,
  viewportHeight: 720,
  scrollBehavior: 'center',
  chromeWebSecurity: false,
})
