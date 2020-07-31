<template>
  <div class="box">
    <van-nav-bar
      title="地址管理"
      left-text="返回"
      right-text="新增"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-radio-group v-model="radio">
      <div class="item" v-for="(ele,index) in list" :key="ele.Pid">
         
        <!-- <van-radio style="font-size:12px" name="1">单选框 1</van-radio> -->
        <p class="accept">
          <span>收货人：{{ele.acceptName}}</span>
          <span style="margin-left:20px">电话：{{ele.acceptPhone}}</span>
        </p>
        <p class="addr">地址：{{ele.address}}</p>
        <p class="send">
          <span>订货人：{{ele.sendName}}</span>
          <span style="margin-left:20px">电话：{{ele.sendPhone}}</span>
        </p>
        <div class="do">
          <span>
            <van-radio :name="index">默认</van-radio>
          </span>
          <span @click="edit(index)">编辑</span>
          <span @click="removeItem(index)">删除</span>
        </div>
      </div>
    </van-radio-group>
    <!-- 测试 -->
    <!-- <van-radio-group v-model="radio">
      <van-radio name="1">单选框 1</van-radio>
      <van-radio name="2">单选框 1</van-radio>
      <van-radio name="3">单选框 1</van-radio>
    </van-radio-group>

     <van-radio-group v-model="radio">
      <van-radio name="1">单选框 1</van-radio>
      <van-radio name="2">单选框 1</van-radio>
      <van-radio name="3">单选框 1</van-radio>
    </van-radio-group> -->
  </div>
  <!-- <div></div> -->
</template>
<script>
// import Vue from 'vue';
import axios from "axios";

export default {
  data() {
    return {
      list: [],
      // checked: true
      radio: "1"
    };
  },

  methods: {
    onClickLeft() {
      this.$router.push("/mine");
    },
    onClickRight() {
      // 点击新增
      this.$router.push("/address");
    },
    // 删除地址
    async removeItem(index) {
      // window.console.log("删除地址");
      window.console.log(this.list[index]);
      let id = this.list[index].Pid;
      let data = await axios.get(`http://localhost:1912/user/removeAddress`, {
        params: { id }
      });
      window.console.log(data);
      this.list.splice(index, 1);
      window.console.log(this.list);
    },
    // /编辑地址
    async edit(index) {
      // window.console.log(data);
      // window.console.log(this.list[index]);
      // 跳转地址页
      this.$router.push({
        name: "address",
        params: {
          // 携带参数
          Pid: this.list[index].Pid,
          acceptName: this.list[index].acceptName,
          acceptPhone: this.list[index].acceptPhone,
          address: this.list[index].address,
          sendName: this.list[index].sendName,
          sendPhone: this.list[index].sendPhone
        }
      });
    }
  },
  async created() {
    let data = await axios.get("http://localhost:1912/user/checkAddress");
    window.console.log(data);
    this.list = data.data;
  },
  computed: {
    get() {
      return {
        // 单选
      };
    }
  }
};
</script>
<style scoped>
.box {
  height: 100%;
  overflow: auto;
  background: #e6e6e6;
}
.item {
  font-size: 12px;
  text-align: left;
  background: #fff;
  border-radius: 0px;
  margin-bottom: 5px;
  padding: 0px 0 30px 0;
}
p {
  padding: 3px 20px;
  color: #8f8f94;
}
.do {
  /* margin: auto; */
  text-align: center;
  color: #666;
  font-size: 13px;
  margin-left: 20px;
}
.do span {
  display: block;
  /* height: ; */
  width: 70px;
  float: left;
  overflow: hidden;
}
</style>