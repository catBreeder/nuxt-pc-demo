// router/index.js
// 引入path
import path from 'path'

// 要使用 process.cwd()
const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`)

export const $routes=[
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'Login',
    component: resolve('pages/User/Login/index')
  }
]
const extendRoutes =(routes)=>{
  routes.length =0;
  routes.push(...$routes)
}
export  default {
  base:'/shop',
  extendRoutes
}
