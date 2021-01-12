<template>
  <div id='home'>
    <!-- 顶部导航 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播 -->
    <home-swiper :banners='banners'></home-swiper>
    <!-- 推荐信息 -->
    <home-recommend-view :recommends='recommends'></home-recommend-view>

  </div>
</template>

<script>
  //导入顶部导航
  import NavBar from 'components/common/navbar/NavBar';
  //导入轮播
  import HomeSwiper from './homechildern/HomeSwiper';
  //导入推荐信息
  import HomeRecommendView from './homechildern/HomeRecommendView'

  import {getHomeMultidata} from 'network/home';
  
  export default {
    name: "Home",
    data() {
      return {
        banners:[],
        recommends:[]
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView
    },
    created(){
      //1.请求多个数据
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
