import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import router from "./routers/index" //导入router
// 引入vant
import vant from "vant"
import "../node_modules/vant/lib/index.css"
Vue.use(vant)

Vue.config.productionTip = false  //阻止启动生产消息，常用作指令。
Vue.prototype.$axios = axios;
// 把axios挂载在Vuede原型上，故Vue创建出来的实例对象都可以调用该方法

new Vue({
  router,  //把router注入Vue,因此子组件能用this.router找到路由对象
  render: h => h(App),
}).$mount('#app')

// var olis=document.querySelectorAll(".goods-item")
// var data=[];
// for(var i=0;i<olis.length;i++){
//   var o={};
//   o.pic=olis[i].querySelector("img").src;
//   o.price=olis[i].querySelector("em").innerText;
//   var title=olis[i].querySelector(".goods-name");
//   o.titleA=title.querySelectorAll("span")[0].innerText;
//   o.titleB=title.querySelectorAll("span")[1].innerText;
//   o.des=olis[i].querySelector(".goods-sold").innerText;
//   data.push(o)
// }
// console.log(data);
