// 引入第三方模块
const express=require("express");
// 路由模块
const list=express.Router();
const bodyparser=require("body-parser");
let parser=bodyparser.urlencoded({extended:false});

const { find, remove,findFenye ,add,update} = require('../database/mongo1');
// 查询商品数据
list.get("/list",async(req,res)=>{
    let {pages,num}=req.query;

  // 没有传参数时设置默认值
  pages=pages||1;
  num=parseInt(num)||6;
  
  let index=(pages - 1) * num
  let data= await findFenye(num,index)
  // let data = await col.find().limit(num).skip(index).toArray();
// 查询总的记录条数，计算总页数
let data2=await find()
let result={};
if(data2.length){
let count=Math.ceil(data2.length/num);
result={type:1,res1:data,count}
}else{
  result2={type:0,res1:[],msg:"商品表没有数据"}
}
  res.send(result)
 
})

// 删除商品数据
list.delete("/del/:id",async (req,res)=>{
  // console.log(req.params);
  let{id}=req.params
  let data=await remove({id:Number(id)});
  console.log(data);
  res.send(data)
})

// 修改商品数据
list.put("/updataGoods/:id",parser,async(req,res)=>{
  let {price,title,des}=req.body;
  let {id}=req.params;
  console.log(price,id,des);
  // id为int类型时，要报id转为数字类型才能查出来
  let data=await update({id:Number(id)},{$set:{price,title,des}});
  let result=data.modifiedCount?{type:1,msg:"修改成功"}:{type:0,msg:"修改失败"}

   res.send(result)
})



//添加商品数据
list.post("/add",parser,async (req,res)=>{
  let{id,img,title,price,des,pic}=req.body;
  let data=await find({id:Number(id)});
  let result={}
  if(data.length){
    result={type:0,msg:"该商品已存在"}
    res.send(result)
  }else{
     let data1 =await add([{id:Number(id),img,title,price,des,pic}])
     res.send(data1)
  }

})

// 把子路由list暴露出去
module.exports=list;

