<template>
  <div id="app">
    <router-view :latest="latest"></router-view>
    <div class="nav-wrapper" ref="nav">
      <div class="main"><router-link to="/main"><i class="iconfont">&#xe642;</i></router-link></div>
      <div class="later"><router-link to="/later"><i class="iconfont">&#xe66d;</i></router-link></div>
      <div class="user"><router-link to="/user"><i class="iconfont">&#xe64e;</i></router-link></div>
    </div>
  </div>
</template>

<script>
  import TopNews from './components/TopNews/TopNews.vue';
  import DailyNews from './components/DailyNews/DailyNews.vue';

export default {
  name: 'app',
  data(){
    return({
        latest:{}
    });
  },
  created(){
    this.$http.get('/api/4/news/latest').then(response=>{
        this.latest=response.body;
        //console.log(response.body);
    },response=>{});

    this.$nextTick(function(){
       console.log();
    });
  },
  components:{
    TopNews,
    DailyNews
  }
}
</script>

<style>
  ::-webkit-scrollbar{width:0;height:0}
#app{width:100vw; height: 100vh; background: #f7fbff;}

  .nav-wrapper{display:flex; width:100%; height:50px; background:#fff; position: fixed; bottom:0; left: 0; line-height: 50px;}
  .main, .later, .user{flex:1; text-align: center; }
  .nav-wrapper .iconfont{font-size: 26px;}
  .nav-wrapper:after{display:block; content:''; width:100%; height:1px;  position:absolute; top:0; left: 0; background:#ccc; transform: scaleY(0.5);}

  .router-link-active{color: #005fff;}
</style>
