<template>
  <div class="user">
    <div class="user-wrapper">
      <ul>
        <li class="theme-item" v-for="theme in themes.others">
          <div class="theme-text">
            <div class="theme-source">来自：{{theme.name}}</div>
            <div class="theme-desc">{{theme.description}}</div>
          </div>
          <div class="theme-img">
            <img :src="theme.thumbnail" />
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import DailyNews from '../DailyNews/DailyNews.vue';

  export default{
      props:{

      },
      data(){
        return({
            themes:{
                type:Object
            }
        });
      },
      created(){
        this.$http.get('api/4/themes').then(response=>{
            this.themes=response.body;
            //console.log(this.themes);
        });
      },
      components:{
          DailyNews
      }
  }

</script>

<style>
  .user{width:100%;}
  .user-wrapper{width:100%;}
  .theme-item{display: flex; width:100%; height:100px; background:rgba(255,255,255,0.5); margin-bottom: 20px;
    box-shadow: 0 0 2px 2px rgba(100,100,100,0.1);}
  .theme-text{flex:2;}
  .theme-img{flex:0 0 100px; overflow: hidden;}
  .theme-img img{height: 100px;}
  .theme-text{text-align: left; padding:10px 20px; color: #737373;}
  .theme-desc{ padding:10px 20px; font-size: 14px; font-weight: 600; color:rgba(0,0,0,0.8);}

</style>
