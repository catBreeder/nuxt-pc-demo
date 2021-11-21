import Vue from 'vue';
import {Button} from 'element-ui';
import '../assets/scss/element-variables.scss'
const components=[
  Button
]
const Element ={
  install(Vue){
    components.forEach(component=>{
      Vue.component(component.name,component)
    })
  }
}
Vue.use(Element)
