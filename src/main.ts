/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 *
 * @Description: 入口文件
 * @version:
 * @Date: 2023-02-07
 * @LastEditors: 97972619@qq.com
 * @LastEditTime:
 * @Author: 97972619@qq.com
 */

import '@/utils/system.copyright'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'

import 'overlayscrollbars/overlayscrollbars.css'

import App from './App.vue'
import pinia from './store'
import router from './router'
import ui from './ui-provider'

// 自定义指令
import directives from '@/directives/index'

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 加载 iconify 图标
import { downloadAndInstall } from '@/iconify'
import icons from '@/iconify/index.json'

import 'virtual:uno.css'

// 全局样式
import '@/assets/styles/globals.scss'
import '@/assets/styles/loading.scss'

// element-plus样式覆盖
import '@/assets/styles/element.scss'

async function setupApp() {
  const app = createApp(App)
  app.use(FloatingVue, {
    distance: 12,
  })
  app.use(Message)
  app.use(pinia)
  app.use(router)
  app.use(ui)
  app.use(directives)
  if (icons.isOfflineUse) {
    for (const info of icons.collections) {
      downloadAndInstall(info)
    }
  }

  app.mount('#app')
}
setupApp()
