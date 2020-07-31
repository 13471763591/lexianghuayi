<template>
  <div class="boxlist">
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 分类 -->
    <div class="content">
      <div class="conleft">
        <div class="lefta">
          <a href v-for="item in goodslist" :key="item.cid" @click.prevent="changelist1(item.cid)" 
          :class="{cur:current==item.cid}">{{item.cname}}</a>
        </div>
      </div>
      <div class="conright">
        <a href class="catager">全部鲜花</a>
        <div class="con-right" v-for="item in goodslist1" :key="item.cname">
          <div class="con-lis">
            <a href>{{item.cname1}}</a>
            <ul>
              <li v-for="(ele,index) in item.contain.split(',')" :key="ele" @click="changelist3(item.cid,item.cid1,index+1)">{{ele}}</li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 搜索框
import Search from "../components/search";
export default {
  data() {
    return {
      activeKey: 0,
      goodslist:[],
      goodslist1:[],
      current:"1"
    };
  },
  components: {
    Search
  },
  methods:{ 
    //发送第一个请求
     async getlist() {
      let { data } = await this.$axios.get(
        "http://localhost:1912/goods/goods",
      );
      // window.console.log(data);
      this.goodslist = data;
      
    },
    // 发送第二个请求
    async getlist1(cid){
      let {data}=await this.$axios.get("http://localhost:1912/goods/goods1",{params:{cid}})
      this.goodslist1=data;
      window.console.log(data);
      this.current=cid;
    },
    
    changelist1(cid){
      this.getlist1(cid);
      
    },
     changelist3(cid,cid1,cid2){
      // this.getlist3(cid,cid1,cid2)
      this.$router.push({ name: "list2", query: { cid,cid1,cid2 } });
    }
  },
  created() {
    this.getlist();
    this.changelist1(1)
  }
};
</script>
<style lang="scss">

// @function vw($px){
//   @return ($px/750)*100vw;
// }
* {
  margin: 0;
  padding: 0;
}
html {
  // font-size: 13.34vw
  font-size: 100px;
}
body{
  box-sizing: border-box;
}
.boxlist{
  width: 100%;
}
.content {
  font-size: 0.14rem;
 
  background-color: #efeff4;
 display: flex;
  .conleft {
    width: 25%;
    float: left;
    .lefta {
      height: 3.54rem;
      a {
        display: block;
        border-bottom: 1px solid #c8c7cc;
        height: 0.506rem;
        line-height: 0.506rem;
        color: black;
      }
      .cur {
      color:blue;

        }
    }
  }
  .conright {
    width: 75%;
    height: 6.67rem;
    // height: 100%;
    overflow: auto;
    background: white;
    float: left;
    .catager {
      display: block;
      height: 0.3rem;
      margin: 0.05rem;
      background-color: #efeff4;
      color: #dd524d;
      line-height: 0.3rem;
      border: 0.01rem solid #dd524d;
    }
    .con-right {
       display: flex;
      .con-lis {
      
        border-bottom: #c8c7cc 0.01rem solid;
        a {
          display: block;
          text-decoration: none;
          text-align: left;
          margin-left: 0.05rem;
          margin-top: 0.05rem;
          color: black;
          height: 0.28rem;
        }
        ul {
       
          // width: 2.4rem;
          height: 0.71rem;
          padding-left:0.4rem;
          li {
            float: left;
            margin: 0.05rem;
            padding-bottom: 0.06rem;
          }
        }
      }
    }
  }
}

</style>