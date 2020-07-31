<template>
  <div id="app">
    <van-nav-bar style="background:#fff;color:#fff !important" title="登录" @click-left="onClickLeft" left-text="返回" left-arrow>
      <!-- <van-icon name="plus" /></van-nav-bar> -->
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <van-cell-group>
      <van-field v-model="phone" label="账号" placeholder="请输入账号"/>
      <van-field v-model="password" label="密码" placeholder="请输入密码"/>
    </van-cell-group>
    <van-cell-group>
      <van-switch-cell v-model="checked" title="自动登录" />
    </van-cell-group>
    <button @click="loginBtn" 
    style="border:none;letter-spacing:20px;width:80%;height:40px;background:#dd524d;font-size:18px;color:#fff;text-align:center;">
    登录</button>
    <p @click="toReg" style="font-size:12px;text-align:center">注册账号</p>
  </div>
</template>
<script>
import axios from "axios";
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  data() {
    return {
      password: "",
      phone: "",
      checked: true
    };
  },
  methods: {
    onClickLeft(){
      this.$router.push("./mine");
    },
    async loginBtn() {
      
    // 点击登录
    let data = { phone: this.phone, password: this.password };
    window.console.log(this.phone,this.password)
    let res=await axios.post(`http://localhost:1912/user/login`, data)
      window.console.log(res.data);

      if(res.data.status=="success"&&this.password){
        Toast('登录成功');
        // 跳转
        this.$router.push("/mine");
        localStorage.phone=res.data.phone;
      }
      if(res.data.status=="incompelete")Toast("用户名或密码不能为空")
      if(!/^1[3-9]\d{9}$/.test(this.phone))Toast('手机号码格式错误');
      if(res.data.status=="error")Toast('用户名或登录密码不正确！');
    },
    toReg(){
      this.$router.push("/reg")
    }
  }
};
</script>