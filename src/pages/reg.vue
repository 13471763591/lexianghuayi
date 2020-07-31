<template>
  <div id="app">
    <van-nav-bar
      style="background:#fff;color:#fff !important"
      title="注册会员"
      left-text="返回"
      @click-left="onClickLeft"
      left-arrow
    >
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <van-cell-group>
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
      <van-field v-model="password" label="密码" placeholder="请输入密码" error />
    </van-cell-group>
    <button
      @click="regBtn"
      style="border:none;letter-spacing:20px;width:80%;height:40px;background:#f90;font-size:18px;color:#fff;text-align:center;"
    >注册</button>
    <p @click="toLogin" style="font-size:12px;text-align:center">登录</p>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      password: "",
      phone: "",
      errormessage: ""
    };
  },
  methods: {
    async regBtn() {
      // 点击注册
      let data = { phone: this.phone, password: this.password };
      let res = await axios.post(`http://localhost:1912/user/reg`, data);
      window.console.log(res.data);
      if (res.data.status == "success" && this.password) {
        Toast("注册成功");
        // 跳转
        this.$router.push("/mine");
        localStorage.phone = res.data.phone;
      }
      if (!/^1[3-9]\d{9}$/.test(this.phone)) Toast("手机号码格式错误");
      if (res.data.status == "exit") Toast("手机号码已注册");
      if (res.data.status == "incomplete") Toast("请完善注册信息");
    },
    toLogin() {
      this.$router.push("/login");
    },
    //返回Mine
    onClickLeft(){
      this.$router.push("/mine")
    }
  }
};
</script>