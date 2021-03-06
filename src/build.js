import Vue from 'vue'
import 'vux/src/styles/reset.less';
import "@/assets/sass/style.scss"
Vue.config.productionTip = false

import ThMessage from './components/message'
import ThDoctortitlebar from './components/doctortitlebar'
import ThDialog from './components/dialog'

const components = {
  ThMessage,
  ThDoctortitlebar,
  ThDialog
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign({
  install
}, components)