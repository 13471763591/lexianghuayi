// 引入第三方模块
const mysql = require("mysql");
// 建立连接池
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"lexiang",  //连接的数据库
    multipleStatements:true
})

// 高级用法
function query(sql){
    return new Promise((resolve,reject)=>{
        pool.query(sql,(err,data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
}
module.exports = query;
