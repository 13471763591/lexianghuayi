<template>
  <div>
    <van-nav-bar title="我的订单" left-text="返回" @click-left="onClickLeft" left-arrow>
      <van-icon style="font-size:26px" name="ellipsis" slot="right" />
    </van-nav-bar>
  </div>
</template>
<script>
// import axios from "axios"
export default {
  data(){
    return {}
  },
  methods:{
    onClickLeft(){
      this.$router.push("./mine");
    }
  }
};
</script>