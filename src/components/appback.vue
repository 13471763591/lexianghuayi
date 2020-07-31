<template>
<div class="box" style="backgorund:red"><van-nav-bar
    title="商品列表"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  style="background :#ff464e;font-color:white"/>
 </div>
  
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      //   Toast("返回");
      this.$router.back();
    },
    onClickRight() {
      //   Toast("按钮");
    }
  }
};
</script>
<style>

</style>