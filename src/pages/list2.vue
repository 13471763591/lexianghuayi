<template>
  <div>
    <!-- 回到上一页 -->
    <app-back></app-back>
    <!-- 商品列表 -->
    <ul class="alltopWarp">
      <li class="alltop" @click.prevent="ltotal"><a href="javascript:," class="alla" :class="{active:topindex==1}">综合</a></li>
      <li class="alltop" @click.prevent="lsoal"><a href="javascript:," class="alla" :class="{active:topindex==2}">销量</a></li>
      <li class="alltop" @click.prevent="lprice"><a href="javascript:," class="alla" :class="{active:topindex==3}">价格</a></li>
      <li class="alltop" @click.prevent="lnew"><a href="javascript:," class="alla" :class="{active:topindex==4}">新品</a></li>
      <img src="../img/11.png" alt="" class="footpic">
    </ul>
    
    <div class="contentbox">
  <li class="goodsitem" v-for="item in list" :key="item.gid" @click="todetail(item)">
    <a href="javascript:," class="goodsa">
        <span class="goodspic">
        <img :src="item.gpic" alt="" class="list2img"></span>
        <dl>
          <dt><span class="goodtitle">{{item.gtitleA}}</span><span class="goodtitle">{{item.gtitleB}}</span></dt>
        <dd class="goods-sale"> 
          <span class="goods-price">￥
            <em>{{item.gprice}}</em></span> 
        </dd>
        <dd class="goods-assist"> 
          <span class="goods-sold">{{item.gdes}}</span> 
          </dd></dl>
        </a>
  </li>
  <div class="list2bottom">没有更多数据喽~</div>
    </div>
    
  </div>
</template>
<script>
import appBack from "../components/appback";
export default {
  data() {
    return {
      list: [],
      cid:"",
      cid1:"",
      cid2:"",
      flag:true,
      fprice:true,
      topindex:1

    };
  },
  components: {
    appBack
  },
  methods: {
    // 发送第三个请求
    async getlist3(cid,cid1,cid2){
      let {data}=await this.$axios.get("http://localhost:1912/goods/goods3",{params:{cid,cid1,cid2}})
      this.list=data;
      window.console.log(data);
      
    },
    // 发送ajax请求按价格排序
     async goodsPrice(cid,cid1,cid2,sortType){
      let {data}=await this.$axios.get("http://localhost:1912/goods/goodsPrice",
      {params:{cid,cid1,cid2,sortType}})
      this.list=data;
      window.console.log(data);
      
    },
    // 发送ajax请求按价格排序
     async goodsSoal(cid,cid1,cid2,sortType){
      let {data}=await this.$axios.get("http://localhost:1912/goods/goodsSoal",
      {params:{cid,cid1,cid2,sortType}})
      this.list=data;
      window.console.log(data);
      
    },
    todetail(item) {
      //跳转到详情页
      this.$router.push({ name: "details", query: item });
        window.console.log(this.$route);
    },
    ltotal(){
      window.location.reload();
      this.topindex=1;
    },
    // 按销量排序
    lsoal(){
      this.topindex=2;
      if(this.flag){
        this.goodsSoal(this.cid,this.cid1,this.cid2,1)
        this.flag=false;
        
      }else{
        this.goodsSoal(this.cid,this.cid1,this.cid2,0)
        this.flag=true;
         window.console.log("000")
      }
    },
    // 按价格排序
    lprice(){
      this.topindex=3;
      if(this.fprice){
        this.goodsPrice(this.cid,this.cid1,this.cid2,1)
        this.fprice=false;
      }else{
        this.goodsPrice(this.cid,this.cid1,this.cid2,0)
        this.fprice=true;
      }
    },
    lnew(){
      this.topindex=4;
    },
  },
  created() {
    //发送请求
    this.getlist3(1,1,1);
    let {cid,cid1,cid2}=this.$route.query
    this.getlist3(cid,cid1,cid2);
    // window.console.log(this.$route.params)
    // window.console.log({cid,cid1,cid2})
    window.console.log(this.$route.query)
    this.cid=cid;
    this.cid1=cid1;
    this.cid2=cid2;
  }
};
</script>
<style lang="scss">
// * {
//   margin: 0;
//   padding: 0;
// }
li,ul,dl,dd,dt{
  list-style: none;
}
html {
  // font-size: 13.34vw
  font-size: 100px;
}
.alltopWarp{
  height: 0.44rem;
  width: 100%;
  // width: 3rem;
  font-size: 0.16rem;
  background: rgba(236, 243, 243, 0.5);
  .alltop{
    width: 20%;
    float: left;
    .alla{
      color: #888888;
      line-height: 0.44rem;
    }
  }
  .active{
    color:crimson !important;
  }
  .footpic{
    float: right;
  }
}
.contentbox{
  width: 100%;
  height: 6rem;
  background: white;
  overflow: auto;
  .goodsitem{
    width:45%;
    height: 2.54rem;
    margin-left: 0.11rem;
    border: 1px solid #ddd; 
    margin-bottom: 0.1rem;
    float: left;
  .goodsa{
    display: block;
    .goodspic{
      display: block;
      .list2img{
        width: 1.6rem;
        height:1.7rem ; 
        width: 100%;
      }
    }
    dl{
      // width: 1.73rem;
      height: 0.63rem;
      margin-top: 0.1rem;
      dt{
        // width: 1.67rem;
        height: 0.488rem;
        .goodtitle{
        font-size: 0.12rem;
        height: 0.24rem;
        line-height: 0.24rem;
        color: black;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: normal;
        width: 100%;
        display: block;
        overflow: hidden;
        }
      }
      .goods-sale{
        .goods-price{
        color: #ec5464;
        display: block;
        float: left;
        font-size: 0.14rem;
        line-height: 0.14rem;
        em{
          display: inline-block;
          vertical-align: top;
          font-style: normal;
        }
        }
      }
      .goods-assist{
        display: block;
        overflow: hidden;
        .goods-sold{
          color: #999;
          display: block;
          float: right;
          font-size: 0.12rem;
          line-height: 0.14rem;
          padding-bottom: 0.10rem;
        }
      }
    }
  }
  
}
.list2bottom{
  height:1rem;
  background:white;
  line-height: 1rem;
  font-size: 0.12rem;
  text-align: center;
  clear: both;
  margin-bottom: 0.5rem;
  }
 .footpic{
   float: right;
  
 }
}

</style>