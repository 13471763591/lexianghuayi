<template>
  <div id="app">
    <Search></Search>
    <!-- 主体 -->
    <!-- <main> -->
      <!-- <ul>
        <li v-for="ele in toplist"></li>
      </ul> -->
    <!-- </main> -->
    <Footer></Footer>
  </div> 
</template>

<script>
import Search from "./search"
import Footer from "./footer"
export default {
  // name: 'Search',
  components:{
    Search,
    Footer
  },
  data(){
    return {
      toplist:["全部鲜花","爱情鲜花","生日鲜花","开业用花","送老师","送父母","送爱人","送闺蜜"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* @import url(../css/home.css); */
</style>
