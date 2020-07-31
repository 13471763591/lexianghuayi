<template>
  <div id="app">
    <Search></Search>
    <!-- 头部列表 -->
    <ul class="toplist">
      <li v-for="(ele,index) in toplist" :key="ele" @click="toSort(index)">{{ele}}</li>
      <span class="toplist_more" @click="toList">></span>
    </ul>
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item style>
          <img src="http://www.leflower.com/images/adimg_m/20180921voptde.jpg" alt />
        </van-swipe-item>
        <van-swipe-item style>
          <img src="http://www.leflower.com/images/adimg_m/20180921voptde.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 分类 -->
    <ul class="sortList" @click="toList2">
      <li v-for="(ele) in sortList" :key="ele.sortName">
        <span :style="{background:ele.background}">
          <van-image round :src="ele.url" />
        </span>
        <p>{{ele.sortName}}</p>
      </li>
    </ul>

    <!-- 电话咨询 -->
    <div class="callPhone">
      <div class="box">
        <li style="background:#4cd964"><van-icon name="chat-o" />a4006785912</li>
        <li style="background:#dd524d"><van-icon name="phone-o" />3645454646554</li>
        <li style="background:#f0ad4e"><van-icon name="friends-o" />55553754</li>
        <li style="background:#007aff"><van-icon name="search" />订单查询</li>
      </div>
    </div>

    <!-- 列表 -->
    <div class="home_list">
      <!-- 特价鲜花 -->
      <ul class="listUl">
        <div class="tejia">
          <span class="tejia_flower" style="font-size:16px;float:left">恋人鲜花</span>
          <span class="tejia_more">更多></span>
        </div>
        <li class="listItem" v-for="(ele,index) in homelist1" :key="ele.gid" @click="toDetail1(index)">
          <img :src="ele.osrc" alt />
          <div class="listItem_details">
            <p>{{ele.otitle}}</p>
            <span class="price">￥{{ele.oprice}}</span>
            <span class="paynum">{{ele.odes}}人已付款</span>
          </div>
        </li>
      </ul>
      <ul class="listUl">
        <div class="tejia">
          <span class="tejia_flower" style="font-size:16px;float:left">新品上架</span>
          <span class="tejia_more">更多></span>
        </div>
        <li class="listItem" v-for="(ele,index) in homelist2" :key="ele.gid" @click="toDetail2(index)">
          <img :src="ele.osrc" alt />
          <div class="listItem_details">
            <p>{{ele.otitle}}</p>
            <span class="price">￥{{ele.oprice}}</span>
            <span class="pingjia">{{ele.odes}}人已付款</span>
          </div>
        </li>
      </ul>
      <ul class="listUl">
        <div class="tejia">
          <span class="tejia_flower" style="font-size:16px;float:left">特价鲜花</span>
          <span class="tejia_more">更多></span>
        </div>
        <li class="listItem" v-for="(ele,index) in homelist3" :key="ele.gid" @click="toDetail3(index)">
          <img :src="ele.osrc" alt />
          <div class="listItem_details">
            <p>{{ele.otitle}}</p>
            <span class="price">￥{{ele.oprice}}</span>
            <span class="pingjia">{{ele.odes}}人已付款</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- 评价 -->
    <div class="pingjia">
      <p class="new_pingjia">
        最新评价
        <span>483726条</span>
      </p>
      <ul>
        <li>
          <div class="item_contents" v-for="ele in pingjiaArr" :key="ele.date">
            <img :src="ele.imgsrc" alt />
            <div class="pingjia_contents">
              <p>
                <span class="email">{{ele.email}}</span>
                <span class="time">{{ele.date}}</span>
              </p>
              <p class="text">{{ele.contents}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 牛郎织女 -->
    <div class="bottom_gif">
      <img src="http://m.leflower.com/img/allhua.gif" alt />
    </div>
    <!-- 火热预定中 -->
    <div class="mui-card-content-inner">
      <p style="color:#8f8f94">鲜花火热预定中......</p>
      <p style="color: #f33;">全国县级以前城市当日可达，提前预定价格优惠哦</p>
    </div>

    <!-- 全部鲜花 跳转到列表页-->
    <div
      class="allflower"
      style="padding:0; font-size:12px;text-align:left; height:20px;padding:10px 15px; border-bottom:#999 solid 2px;line-height:20px"
    >
      <span class="all" style="color:#6d6d72;margin:0:float:lefft" >全部鲜花</span>
      <span class="zhuanqu" style="color:#6d6d72;float:right">3.8节专区</span>
    </div>

    <div class="bottom_imglist">
      <ul>
        <li>
          <img src="http://m.leflower.com/images/pp_1.png" alt />
          <p>10年鲜花品牌</p>
        </li>
        <li>
          <img src="http://m.leflower.com/images/pp_2.png" alt />
          <p>行业认证龙头</p>
        </li>
        <li>
          <img src="http://m.leflower.com/images/pp_3.png" alt />
          <p>低价保证</p>
        </li>
        <li>
          <img src="http://m.leflower.com/images/pp_4.png" alt />
          <p>3小时送花</p>
        </li>
      </ul>
    </div>
    <div class="bootom">
      <p>帮助|查单|在线补款|客服|电脑版</p>
      <p>领先的中国鲜花速递品牌，鲜花速递专家</p>
      <p>© 乐享花艺鲜花网 m.leflower.com</p>
    </div>

    <div style="width:100%;height:55px"></div>

    <Footer></Footer>
  </div>
</template>

<script>
import Search from "../components/search";
import Footer from "../components/footer";
import axios from "axios";
export default {
  components: {
    Search,
    Footer
  },
  data() {
    return {
      toplist: [
        "全部鲜花",
        "爱情鲜花",
        "生日鲜花",
        "开业用花",
        "送老师",
        "送父母",
        "送爱人",
        "送闺蜜"
      ],
      sortList: [
        {
          sortName: "鲜花",
          url: "http://m.leflower.com//images/flower_1.png",
          background: "#fb8989"
        },
        {
          sortName: "送老师",
          url: "http://m.leflower.com/images/flower_2.png",
          background: "#de8dc5"
        },
        {
          sortName: "开业送花",
          url: "http://m.leflower.com/images/flowersong_1.png",
          background: "#77bae6"
        },
        {
          sortName: "蛋糕",
          url: "http://m.leflower.com/images/gifts_2.png",
          background: "#f6b365"
        },
        {
          sortName: "更多分类",
          url: "http://m.leflower.com/images/Plant_2.png",
          background: "#88d4c0"
        }
      ],
      homelist1: [],
      homelist2: [],
      homelist3: [],
      pingjiaArr: []
    };
  },
  async created() {
    let data = await axios.get("http://localhost:1912/goods/home_goods1");
    this.homelist1 = data.data;

    let data2 = await axios.get("http://localhost:1912/goods/home_goods2");
    this.homelist2 = data2.data;

    let data3 = await axios.get("http://localhost:1912/goods/home_goods3");
    this.homelist3 = data3.data;

    // 评价数据请求
    let pingjiaData = await axios.get("http://localhost:1912/goods/pingjia");
    this.pingjiaArr = pingjiaData.data;
  },
  methods: {
    // 列表跳转到详情页
    async toDetail1(index) {
      let item = this.homelist1[index]
      await this.$router.push({name:"details",params:{item}})
    }, 
    async toDetail2(index) {
       let item = this.homelist2[index]
      await this.$router.push({name:"details",params:{item}})
    },
    async toDetail3(index) {
      let item = this.homelist3[index]
      await this.$router.push({name:"details",params:{item}})
    },

    // 分类跳转
    async toSort(index){
      let obj={};
      if(index==1)obj={cid:"1",cid1:"1",cid2:1}
      if(index==2)obj={cid:"1",cid1:"3",cid2:4}
      if(index==3)obj={cid:"1",cid1:"1",cid2:3}
      if(index==4)obj={cid:"1",cid1:"2",cid2:3}
      // 发送请求查询数据(路由传参)
      await this.$router.push({path:"/list2",query:obj})
      window.console.log(obj)
    },
    toList(){
      this.$router.push("/list")
    },
    toList2(){
      this.$router.push("/list")
    }
  }
};
</script>

<style>
@import url(../../node_modules/vant/lib/index.css);
@import url(../css/home.css);
</style>