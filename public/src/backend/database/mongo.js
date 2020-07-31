const mongodb=require("mongodb");
let MongodbClient=mongodb.MongoClient;
// 连接MongoDB
MongodbClient.connect("mongodb://localhost:27017",{useUnifiedTopology: true},async (error,client)=>{
    if(error) throw error;
    // 连接数据库，有就连接，没有就创建
    let db=client.db("goodslist");
    let col=db.collection("goods");
    
    let good=[
       
        {
            "id": 22,
            "img": "https://img2.ch999img.com/pic/product/440x440/20191203135132521.jpg.webp",
            "title": "华为 nova 6 全网通4G版 普罗旺斯 8GB+128GB  105°前置广角双摄，超感光暗拍，麒麟990芯片",
            "price": "2541",
            "des": "已有 1 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20191203135127349.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191203135130562.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191203135132521.jpg.webp"
            ]
        },
        {
            "id": 23,
            "img": "https://img2.ch999img.com/pic/product/440x440/20190326224307246.jpg.webp",
            "title": "华为 P30 全网通版 珠光贝母 6GB+128GB  【影像之美】后置徕卡三摄,麒麟980智慧大脑",
            "price": "3520",
            "des": "已有 3345 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20190326224307246.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190326224310153.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190618233105598.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190326224315701.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190326224307246.jpg.webp"
            ]
        },
        {
            "id": 24,
            "img": "https://img2.ch999img.com/pic/product/440x440/20181017013320816.jpg.webp",
            "title": "华为 Mate 20 X 全网通版 幻影银 8GB+256GB  【现货热销】7.2英寸OLED显示屏，海思麒麟980",
            "price": "1630",
            "des": "已有 1305 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20190212085323948.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20181017013320816.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20181017013320816.jpg.webp"
            ]
        },
        {
            "id": 25,
            "img": "https://img2.ch999img.com/pic/product/440x440/2018101700435789.jpg.webp",
            "title": "华为 Mate 20 Pro 全网通版 宝石蓝 6GB+128GB  【现货热销】后置4000万徕卡三摄，40W超级快充",
            "price": "2999",
            "des": "已有 3378 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/2018101700435789.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20181017004426673.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20181017004407680.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190107145837565.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20181017004341612.jpg.webp"
            ]
        },
        {
            "id": 26,
            "img": "https://img2.ch999img.com/pic/product/440x440/20191203135020342.jpg.webp",
            "title": "华为 nova 6 全网通5G版 普罗旺斯 8GB+128GB  105°前置广角双摄，超感光暗拍，海思麒麟990+巴龙5000",
            "price": "3777",
            "des": "已有 1 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20191203135020342.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191203135009232.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191205173805074.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191203135001394.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191203135011925.jpg.webp"
            ]
        },
        {
            "id": 27,
            "img": "https://img2.ch999img.com/pic/product/440x440/20190919213338928.jpg.webp",
            "title": "华为 Mate 30 全网通4G版 罗兰紫 6GB+128GB  【重构想象】麒麟990，4000万超感光徕卡影像，OLED全面屏",
            "price": "1997",
            "des": "已有 2264 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20190919213338928.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190919213335773.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190919213341710.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191209200130148.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190919213350724.jpg.webp"
            ]
        },
        {
            "id": 28,
            "img": "https://img2.ch999img.com/pic/product/440x440/20190326225049644.jpg.webp",
            "title": "华为 P30 Pro 全网通版 亮黑色 8GB+128GB  【影像之美】超感光徕卡四摄，麒麟980智慧大脑",
            "price": "999",
            "des": "已有 3140 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20190326225049644.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190326225203323.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190326225200485.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190326225208219.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191213102718207.jpg.webp"
            ]
        },
        {
            "id": 29,
            "img": "https://img2.ch999img.com/pic/product/440x440/20191209200031510.jpg.webp",
            "title": "华为 Mate 20 X 全网通5G版 宝石蓝 8GB+256GB  获首张中国5G进网许可证的5G双模（同时支持SA和NSA组网架构）全网通手机",
            "price": "1789",
            "des": "已有 114 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20190726154446263.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191209200031510.jpg.webp"
            ]
        },
        {
            "id": 30,
            "img": "https://img2.ch999img.com/pic/product/440x440/20191209195715026.jpg.webp",
            "title": "华为 Mate 30 全网通5G版 亮黑色 8GB+128GB  【重构想象】搭载华为首款旗舰 5G SoC 芯片，4000万超感光徕卡影像",
            "price": "6520",
            "des": "已有 1080 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20191106094836979.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191106094843687.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191106094852218.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191106094757296.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191209195715026.jpg.webp"
            ]
        },
        {
            "id": 31,
            "img": "https://img2.ch999img.com/pic/product/440x440/20190919223508290.jpg.webp",
            "title": "华为 Mate 30 Pro 全网通4G版 翡冷翠 8GB+256GB  【重构想象】麒麟990，双4000万徕卡电影四摄，超曲面OLED环幕屏",
            "price": "1345",
            "des": "已有 984 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20190919223453920.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190919223449727.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190919223457675.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190919223500606.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20190919223508290.jpg.webp"
            ]
        },
        {
            "id": 32,
            "img": "https://img2.ch999img.com/pic/product/440x440/20190326225205984.jpg.webp",
            "title": "华为 P30 Pro 限量套装版 天空之境 8GB+512GB  【限量套装版】采用施华洛奇元素，璨若星辰的银色礼盒，星钻保护壳",
            "price": "6541",
            "des": "已有 16 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20190326225205984.jpg.webp"
            ]
        },
        {
            "id": 33,
            "img": "https://img2.ch999img.com/pic/product/440x440/20191106095009199.jpg.webp",
            "title": "华为 Mate 30 Pro 全网通5G版 青山黛 8GB+128GB  【重构想象】搭载华为首款旗舰 5G SoC 芯片，麒麟990",
            "price": "4321",
            "des": "已有 1225 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20191209195431227.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191106095009199.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191106095012433.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191106095015875.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191106094958881.jpg.webp"
            ]
        },
        {
            "id": 34,
            "img": "https://img2.ch999img.com/pic/product/440x440/20181112155038673.jpg.webp",
            "title": "华为 Mate 20 RS 保时捷版 玄黑 8GB+512GB  【保时捷设计】压感屏内指纹识别，4000万徕卡超广角三摄",
            "price": "1940",
            "des": "已有 68 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20181112155038673.jpg.webp"
            ]
        },
        {
            "id": 35,
            "img": "https://img2.ch999img.com/pic/product/440x440/20191023170211935.jpg.webp",
            "title": "华为 Mate 30 RS 保时捷版 玄黑 12GB+512GB  【致敬时代】保时捷设计，搭载华为首款 5G SoC芯片，麒麟990",
            "price": "1230",
            "des": "已有 11 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20191023170211935.jpg.webp",
                "https://img2.ch999img.com/pic/product/440x440/20191023170214212.jpg.webp"
            ]
        },
        {
            "id": 36,
            "img": "https://img2.ch999img.com/pic/product/440x440/20191023153323307.jpg.webp",
            "title": "华为 Mate X 全网通5G版 星际蓝 8GB+512GB  【5G 折叠屏手机】5G芯片麒麟980+巴龙5000",
            "price": "8999",
            "des": "已有 0 人评价",
            "pic": [
                "https://img2.ch999img.com/pic/product/440x440/20191023153323307.jpg.webp"
            ]
        }
    ];
    // col.insertMany(good);
    // let data =await col.find().toArray();
    // console.log(data);
    // let data8 = await col.deleteMany({
    //     id: 31
    // });
    // console.log(data8);

    // let data6=await col.updateMany({id:2},{$set:{price:9999}})
    // console.log(data6);
    
    // let num = 5;
    // let page = 2;
    // let data6 = await col.find().limit(num).skip((page - 1) * num).toArray();
    // console.log(data6);
    
    client.close()
})
