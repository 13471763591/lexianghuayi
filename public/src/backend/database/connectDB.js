// 引入第三方模块mysql
const mysql=require("mysql");
// 创建连接池
let pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port:3306,
    database: 'lxhy',
    multipleStatements: true
})

// 查询连接池
// pool.query("SELECT * FROM `user`",(error,data)=>{
//     console.log(data);
    
// })
// 查询连接池进行封装
// function query(sql,callback){
//     pool.query(sql,(error,data)=>{
//         console.log(data);
//         if(error) throw error;
//         callback(data)
        
//     })
// }

function query(sql){
    return new Promise((resolve,reject)=>{
         pool.query(sql,(error,data)=>{
        if(error) reject();
        resolve(data)
    })
 })
   
}


module.exports=query;


