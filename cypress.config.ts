import { allureCypress } from "allure-cypress/reporter"
import { defineConfig } from "cypress"
import "dotenv/config"

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
      allureCypress(on, config, {
        resultsDir: "allure-results",
        links: {
          issue: {
            nameTemplate: "Issue #%s",
            urlTemplate: "https://github.com/Rogatto/sauce-demo-testing/issues/%s",
          }
        },
        environmentInfo: {
          host_web_application: "https://www.saucedemo.com",
          version_application_version: "1.0.0",
          environment: "development"
        },
      });
      return config
    },
  },
})
