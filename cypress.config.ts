import { defineConfig } from "cypress"
import 'dotenv/config'
import allureWriter from "@shelex/cypress-allure-plugin/writer"

export default defineConfig({
  video: true,
  execTimeout: 15000,
  taskTimeout: 15000,
  pageLoadTimeout: 15000,
  chromeWebSecurity: false,
  env: {...process.env,allureReuseAfterSpec: true},
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
  },
})
