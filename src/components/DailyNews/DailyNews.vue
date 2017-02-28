<template>
  <div class="daily-news">
    <h3 class="head-title">今日热闻</h3>
    <ul>
      <li class="news-item" v-for="story in stories" @click="addSelectedNews(story)">
        <div class="text-wrapper">
            <h2 class="news-title">{{story.title}}</h2>
        </div>
        <div class="img-wrapper">
          <img :src="story.images[0]" alt="图片无法显示" />
        </div>
      </li>
    </ul>
  </div>

</template>

<script>

  export default{
      props:{
          stories:{
              type:Array
          },
          selectNews:{
              type:Object
          }
      },
      methods:{
          addSelectedNews(story){
              this.$emit('addSelectedNews',story);
          }
      }
  }

</script>

<style>
  .daily-news{width:100%; height: 100%; overflow: auto; padding:10px 0;}
  .head-title{width:100%; height: 30px;line-height: 30px; padding-left: 20px;}
  .news-item{display: flex; width: 100%; height: 100px; background:rgba(255,255,255,0.5); position: relative;}
  .news-item:before{display: block; content:""; width: 100%; border-top:1px solid rgba(214,214,214,0.5); transform: scaleY(0.5); position:absolute;
    top:0; left: 0;}
  .text-wrapper{flex: 2; padding:30px 20px;}
  .news-title{font-size: 14px;}
  .img-wrapper{flex: 0 0 100px; height: 100px; overflow: hidden; box-shadow: 0 0 2px 2px #ccc inset;}
  .img-wrapper img{height: 100%;}


</style>
