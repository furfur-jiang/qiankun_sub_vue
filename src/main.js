import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false
// 全改qiankun
let instance = null

console.log('a')
function render(){
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')  //这里是挂到自己的html，基座会拿到这个挂载后的html，将其插入
}
if(window.__POWERED_BY_QIANKUN__){ //动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if(!window.__POWERED_BY_QIANKUN__){//默认独立运行
  render()
}

export async function bootstrap(){}
export async function mount(props){
  console.log(props)
  render(props)
}
export async function unmount(){
  instance.$destroy()
}
