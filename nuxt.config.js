const {internalIpV4Sync} = require('internal-ip')
const env = require('./env.js')
import router from './router'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-shop-pc',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    // { src: '@/assets/scss/element-variables.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],
  router,
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  env:{
    baseURL:env[process.env.NODE_ENV].ENV_API
  },
  axios:{
    //开启代理
    proxy: true,
    //最多重发三次
    retry: { retries: 3 },
    //是否是可信任
    withCredentials: true
  },
  proxy:{
    '/api':{
      target:env[process.env.NODE_ENV].ENV_API,
      changeOrigin:true,
    }
  },
  vender:[
    'element-ui'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["axios"],//防止重复打包
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  },
  server:{
    host:internalIpV4Sync(),
    port:4000
  }
}
