// 引入第三方模块
const express=require("express");
const app=express();
// 引入主路由，并使用主路由中间件
const bigrounter=require("./backend/rounter/index");
app.use(bigrounter)

// 开启静态资源服务器
app.use(express.static("./"))

// 开启服务器
app.listen(1912,function(){
    console.log("成功开启一个端口号为1912的服务器");
    
})