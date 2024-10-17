import { defineConfig } from "cypress"
import 'dotenv/config'

export default defineConfig({
  video: true,
  execTimeout: 15000,
  taskTimeout: 15000,
  pageLoadTimeout: 15000,
  chromeWebSecurity: false,
  env: {...process.env},
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      return config
    },
  },
});
