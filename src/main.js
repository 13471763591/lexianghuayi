import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';
import router from './routers/index';
import axios from "axios";
Vue.config.productionTip = false
Vue.prototype.$axios = axios;


Vue.use(Vant)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


// var olis=document.querySelectorAll(".goods-item")
// var data=[];
// for(var i=0;i<olis.length;i++){
//   var o={};
//   o.pic=olis[i].querySelector("img").src;
//   o.price=olis[i].querySelector("em").innerText;
//   var title=olis[i].querySelector(".goods-name");
//   var num=olis[i].querySelector("a").href;
//   o.number=num.slice(num.indexOf("-")+1,num.indexOf(".h"))
//   o.titleA=title.querySelectorAll("span")[0].innerText;
//   o.titleB=title.querySelectorAll("span")[1].innerText;
//   o.des=olis[i].querySelector(".goods-sold").innerText;
//   data.push(o)
// }
// console.log(data);
// console.log(JSON.stringify(data));


