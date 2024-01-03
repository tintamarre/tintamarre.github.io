import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const { description } = require('../../package')

module.exports = {
  title: 'Tintamarre',

  description: 'Personal website of Tintamarre',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
     registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    'vuepress-plugin-mermaidjs',
  ]
}
