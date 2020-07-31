// 引入第三方模块
const express=require("express");
// 主路由
const bigrounetr=express.Router();
//把这个路由配置放在所有路由的前面，方便调用next操作
bigrounetr.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");
  
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") { //特殊请求：发送了请求头的那些请求
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
  })
// 把路由分得更细，路由模块化
const user=require("./user")
bigrounetr.use("/user",user);

const list=require("./list")
bigrounetr.use("/goods",list)

// 把主路由暴露出去
module.exports=bigrounetr;