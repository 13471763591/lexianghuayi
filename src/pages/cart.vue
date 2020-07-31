<template>
  <div>
    <!-- 回到上一页 -->
    <van-nav-bar
      title="购物车"
      left-text
      left-arrow
      @click-left="onClickLeft"
      style="background :#ff464e;font-color:white"
    />
    <div class="carWarp">
      <!-- <img src="../img/cart11.png" alt="" class="cart11" v-if="isnone" style="width:100%" @click.prevent="tolist"> -->
      <!-- 商品购物车列表 -->
      <div class="list">
        <ul class="cartul">
          <li class="cartli" v-for="(item,index) in cartlist" :key="index">
            <div class="cartcont">
              <div class="cartcheck">
                <input type="checkbox" id="onebox" v-model="item.ischecked"/>
              </div>
              <div class="cartpic">
                <a href class="carta">
                  <img
                    :src="item.gpic"
                    class="cartimg"
                  />
                </a>
              </div>
              <div class="cartitle">
                <p class="cartt">{{item.gtitleA}}</p>
                <p class="carti">花材：{{item.gtitleB}}</p>
                <em>￥{{item.gprice}}</em>
              </div>
              <div class="cartcontroal">
                <p id="cartbtns">
                  <img src="../img/cart.png" alt="" class="del" @click.prevent="cartdel(index)">
                  <input type="button" value="-" class="cartbtncom" @click="lecart(index)"/>
                  <input type="text" class="cartbtncom1" v-model="item.cartnum"/>
                  <input type="button" value="+" class="cartbtncom" @click="adcart(index)"/>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 结算 -->
      <van-submit-bar button-text="提交订单" @submit="onSubmit" style="border-radius:0">
        <!-- <van-checkbox v-model="checkedall">全选</van-checkbox> -->
        <input type="checkbox" v-model="checkedall" class="allchoose" style="float:left" value="全选">全选  
        总价为：
        <span style="color:red;font-size:20px;width:20px">￥</span>
        <span v-text="price" style="width:110px;color:red;font-size:20px"></span>
       
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
// import appBack from "../components/appback";

export default {
  data() {
    return {
      isnone:true,
      // cartlist:[],
      cartlist:""
      
    };
  },
  methods: {
    onSubmit() {},
    onClickLeft() {
      this.$router.back();
    },
    cartdel(index){
      let istrue = confirm('您确定要删除吗?');
      if(istrue)  this.cartlist.splice(index,1);
      localStorage.setItem("cartlist",JSON.stringify(this.cartlist))
    },
    lecart(index){
    if(this.cartlist[index].cartnum>1)
      this.cartlist[index].cartnum--
    },
    adcart(index){
    this.cartlist[index].cartnum++
    },
    tolist(){
      this.$router.push({ name: "list2"} )
    },
    
  },
  computed:{
      checkedall:{
        get(){
          return this.cartlist.every(item => item.ischecked);
        },
        set(val){
        this.cartlist.forEach(item => item.ischecked=val);
        }
      },
      price:{
        get(){
          let totalprice=0;
          let finaltotal= this.cartlist.map(item => {
            let totalprice=0;
            if(item.ischecked){
               totalprice+=item.gprice * item.cartnum*1;
              
            }else{
              totalprice=0;
            }
            return totalprice
           });
           
          for(let i=0;i<finaltotal.length;i++){
            totalprice+=finaltotal[i]
          }
          return totalprice;
          
        },
        set(){}
      }
  },
  components: {
    // appBack
  },
  async created() {
     if(localStorage.cartlist && localStorage.cartlist.length!=0){
      this.cartlist=JSON.parse(localStorage.getItem("cartlist"))
      // this.cartlist.splice(0,1);
    }else{
      this.cartlist=[], 
    localStorage.setItem("cartlist", JSON.stringify(this.cartlist));
    this.cartlist.splice(0,1);
    }
    let {cid,cid1,cid2,gid,cartnum}=this.$route.params;
    window.console.log(this.$route)
    let res=this.cartlist.findIndex(item=>{
      return item.gid==gid
    })
    if(this.$route.query.length!=0 && res==-1){
    let {data}=await this.$axios.get("http://localhost:1912/goods/cartlist",{params:{cid,cid1,cid2,gid}});
    data[0].cartnum=cartnum;
    data[0].ischecked=false;
    window.console.log(data,gid,cartnum);
    this.cartlist.push(data[0])
    localStorage.setItem("cartlist",JSON.stringify(this.cartlist))
    this.isnone=false;
    }
    
    
  }
};

</script>
<style lang="scss">
@function vw($px) {
  @return ($px/750) * 100vw;
}
body{
   background: #efeff4;
}
.carWarp {
  width: vw(750);
  height: 5.67rem;
  overflow: auto;
  .list {
    height: vw(156);
    .cartul {
      height: vw(156);
      .cartli {
        height: 16.8vw;
        padding: 8px 0;
         border-bottom: solid 1px #eee;
         background: white;
        .cartcont {
          .cartcheck {
            width: vw(41.6);
            height: vw(25.6);
            float: left;
            margin-left: 12.8px;
            margin-top: 20.8px;
            position: relative;
            #onebox {
              width: vw(25.6);
              height: vw(25.6);
              position: absolute;
              top: 5px;
              left: 3px;
            }
          }
          .cartpic {
            display: block;
            width: vw(120);
            height: vw(120);
            padding: 3.2px;
            float: left;
           
            margin-left: 4.8px;
            .carta {
              display: block;
              width: 100%;
              height: 100%;
              .cartimg {
                width: 100%;
                height: 100%;
                 border: solid 1px #eee;
              }
            }
          }
          .cartitle {
            font-size: vw(28);
            width: vw(200);
            height: vw(122.4);
            text-align: left;;
            margin-left: vw(20);
            float: left;
            
            .cartt { 
              font-size: vw(28);
              width: vw(200);
              height: 5.73333vw;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .carti {
              font-size: vw(24);
              color: gray;
              width: vw(200);
              height: 5.25333vw;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            em {
              color: #db4453;
            }
          }
          .cartcontroal {
            float: right;
            #cartbtns {

              text-align: left;
              font-size: vw(28);
              display: block;
              line-height: 11vw;
              margin-left: 11px;
                .del{
                  margin-left: 15.6666vw;
                }
              .cartbtncom1,
              .cartbtncom {
                width: vw(60);
                height: vw(40);
              }
              .cartbtncom1 {
                height: vw(34);
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>