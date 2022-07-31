const { defineConfig } = require('@vue/cli-service')
const path = require("path")

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  // outputDir: path.resolve(__dirname, "../templates/spa"),
  // assetsDir: "../../static/spa"
})
