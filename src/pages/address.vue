<template>
  <div class="box">
    <div>
      <van-nav-bar title="新增地址" @click-left="onClickLeft" left-text="返回" left-arrow></van-nav-bar>
      <van-field v-model="acceptName" label="收货人姓名" :formatter="formatter" placeholder="请输入收货人姓名" />
      <van-field v-model="acceptPhone" label="收货人手机" :formatter="formatter" placeholder="请输入收货人手机" />
      <van-cell is-link @click="showPopup">
        配送地址
        <input style="margin-left:30px;border:none" type="text" v-model="per_addr" />
      </van-cell>
      <!-- 选择地址弹框 -->
      <van-popup confirm-button-text v-model="show" position="bottom" :style="{ height: '50%' }">
        <van-area :area-list="areaList" />
      </van-popup>
      <van-field v-model="address" label="详细地址" :formatter="formatter" placeholder="请填写详细地址" />
      <van-field v-model="sendName" label="订货人姓名" :formatter="formatter" placeholder="填写订货人姓名" />
      <van-field v-model="sendPhone" label="订货人电话" :formatter="formatter" placeholder="填写手机" />
      <van-button @click="saveAddr" style="width:80%" type="primary">保存</van-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Toast } from 'vant';
export default {
  data() {
    return {
      show: false,
      formatter: "",
      // 收送货人信息
      acceptName:"",
      acceptPhone:"",
      address:"",
      sendName:"",
      sendPhone:"",

      per_addr: "", //   收获地址前缀
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
          // ....
        }
      }
    };
  },
  methods: {
    onClickLeft(){
      this.$router.push("/addressManage")
    },
    showPopup() {
      this.show = true;
    },
    // 保存地址
    async saveAddr() {
      let data = {
        acceptName: this.acceptName,
        acceptPhone: this.acceptPhone,
        address:this.address,
        sendName:this.sendName,
        sendPhone:this.sendPhone
      };
      // window.console.log(this.acceptName, this.acceptPhone,
      // this.address,this.sendPhone,this.sendName);
      if(!/^1[3-9]\d{9}$/.test(this.acceptPhone))Toast('收货人手机号码格式错误');
      else if(!/^1[3-9]\d{9}$/.test(this.sendPhone))Toast('订货人手机号码格式错误')
      else if(!this.address)Toast("收货地址不能为空")
      else{
        let res = await axios.post(`http://localhost:1912/user/addAddress`, data);
        window.console.log(res.data);
        window.console.log(res.data.status)
        if (res.data.status == "sussess")Toast("操作成功")
      }
    }
  },
  // 接收路由传参（点击编辑地址是传过来的参数，并把参数设置到节点上）
  async created(){
    window.console.log(this.$route.params);
    this.acceptName=await this.$route.params.acceptName
    this.acceptPhone=await this.$route.params.acceptPhone
    this.address=await this.$route.params.address
    this.sendName=await this.$route.params.sendName
    this.sendPhone=await this.$route.params.sendPhone
  }
}
</script>
