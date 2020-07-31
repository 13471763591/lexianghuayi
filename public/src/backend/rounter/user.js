// 引入第三方模块
const express=require("express");
// 路由模块
const user=express.Router()

const bodyparser=require("body-parser");
let parser=bodyparser.urlencoded({extended:false});
// 引入数据库操作的模块
const query=require("../database/connectDB")
// 查询数据库
// user.get("/userbiao",(req,res)=>{
//   query("SELECT * FROM `user` WHERE phone='17878192837'",data=>res.send(data))  
// })

// 查询管理员是否存在
user.get("/checkname",async (req,res)=>{
  try{
    let {adname}=req.query;
    if(adname){
      let data1=await query(`SELECT * FROM admin WHERE adname='${adname}'`)
    let result={};
    if(data1.length){
      result={type:0,mes:"用户名已经存在"}
    }else{
      result={type:1,mes:"用户名没有该用户"}
    }
    res.send(result)
    }
    res.send("用户名不能为空")
  }catch{

  }
  
})

// 注册功能
user.post("/reg",parser,express.json(),async (req,res)=>{
  try{
    // 从post参数中结构
  let {adname,adpassword}=req.body;
  // 查询用户名
  let data2=await query(`SELECT * FROM admin WHERE adname='${adname}'`)
  var result1={};
  // 用户名已经存在
  if(data2.length){
    result1={type:0,mes:"用户名已经存在"}
  }else{
    // 用户名不存在，向数据库中插入一条数据
    let data3=await query(`INSERT INTO admin (adname,adpassword) VALUES("${adname}","${adpassword}")`)
    // 判断是否插入成功
    if(data3.affectedRows){
      result1={type:1,mes:"注册成功"}
    }else{
      result1={type:0,mes:"注册失败"}
    }
  }
  res.send(result1)
  }catch{

  }
  
 
})

// 分页功能
user.get("/fenye",async (req,res)=>{
  try{
     // 从get参数中结构，pages为页码，num为每一页的条数
  let {pages,num}=req.query;
  // 没有传参数时设置默认值
  pages=pages||1;
  num=num||5;
  let startIndex=(pages-1)*num;
  let data4=await query(`SELECT * FROM user LIMIT ${startIndex},${num}`)
  // 查询总的记录条数，计算总页数
  let data5=await query(`SELECT * FROM user`)
  let result2={};

  if(data5.length){
  let count=Math.ceil(data5.length/num);
  result2={type:1,res1:data4,count}
  }else{
    result2={type:0,res1:[],msg:"用户表没有数据"}
  }
    res.send(result2)
  }catch{

  }
 
})

// 登录功能
user.post("/login",parser,async (req,res)=>{
  try{
      // 从post参数中结构
  let {adname,adpassword}=req.body;
  // 查询用户名
  let data6=await query(`SELECT * FROM admin WHERE adname='${adname}'`)
  let result3={}
 if(data6.length){
  result3=data6[0].adpassword!=`${adpassword}`?{type:0,mes:"密码不正确"}:{type:1,mes:"登录成功",adid:data6[0].adid}
  
  // console.log(data6[0].password);
   res.send(result3)
 }

 res.send({type:0,mes:"用户名不存在"})
  }catch{

  }

 
 
})


// 删除功能
user.delete("/del/:id",async (req,res)=>{
  let {id}=req.params;
  console.log(id);
  
  let data7=await query(`DELETE FROM user WHERE id=${id}`)
  console.log(data7);
  let result=data7.affectedRows?{type:1,mes:"删除成功",res1:await query(`SELECT * FROM user`)}:{type:0,mes:"删除失败"};
  res.send(result)
})

// 修改管理员密码
user.put("/updata/:adid",parser,async (req,res)=>{
  try{
  let {adid}=req.params;
  // adid=parseInt(adid)
   let obj = req.body; //{name : '杰克',psw:'666'}
    console.log(obj);
    //name='JJJJJ', psw='6666'
    let msg = '';
    for (let key in obj) {
        msg += key + '=' + `'${obj[key]}'` + ',';
    }
    msg = msg.slice(0, -1);
    console.log(msg);
    let sql = `UPDATE  admin SET ${msg} WHERE adid=${adid}`;
    let data = await query(sql); 
    console.log(data);
    let result=data.affectedRows?{type:1,mes:"修改成功"}:{type:0,mes:"修改失败"};
    res.send(result)
  }catch{}
})

// 修改用户密码、邮箱功能
user.put("/updataUser/:id",parser,async (req,res)=>{
  try{
  let {id}=req.params;
  // adid=parseInt(adid)
   let obj = req.body; //{name : '杰克',psw:'666'}
    console.log(obj);
    //name='JJJJJ', psw='6666'
    let msg = '';
    for (let key in obj) {
        msg += key + '=' + `'${obj[key]}'` + ',';
    }
    msg = msg.slice(0, -1);
    console.log(msg);
    let sql = `UPDATE  user SET ${msg} WHERE id=${id}`;
    let data = await query(sql); 
    console.log(data);
    let result=data.affectedRows?{type:1,mes:"修改成功"}:{type:0,mes:"修改失败"};
    res.send(result)
  }catch{}
})


// 添加用户
user.post("/adduser",parser,async(req,res)=>{
  try{
    // 从post参数中结构
  let {phone,email,password}=req.body;
  // 查询用户名
  let data2=await query(`SELECT * FROM user WHERE phone='${phone}'`)
  var result1={};
  // 用户名已经存在
  if(data2.length){
    result1={type:0,mes:"用户名已经存在"}
  }else{
    // 用户名不存在，向数据库中插入一条数据
    let data3=await query(`INSERT INTO user (phone,password,email) VALUES("${phone}","${password}","${email}")`)
    // 判断是否插入成功
    result1=data3.affectedRows?{type:1,mes:"添加成功"}:{type:0,mes:"添加失败"}
  }
  res.send(result1)
  }catch{

  }
  
})

// 把子路由user暴露出去
module.exports=user;