<template>
  <div class="main-page">
    <div class="topnews-wrapper" ref="topNews">
      <TopNews :topStories="latest.top_stories" @addSelectedNews="newsSelected"></TopNews>
    </div>
    <div class="dailynews-wrapper" ref="dailyNews">
      <DailyNews :stories="latest.stories" @addSelectedNews="newsSelected"></DailyNews>
    </div>
    <transition name="slide-left">
      <div class="newsdetail-wrapper" v-if="newsDetailShow" >
        <NewsDetail :selectNews="selectNews" @backToHome="backToHome"></NewsDetail>
      </div>
    </transition>
  </div>

</template>

<script>
  import TopNews from '../TopNews/TopNews.vue';
  import DailyNews from '../DailyNews/DailyNews.vue';
  import NewsDetail from '../NewsDetail/NewsDetail.vue';

  export default{
      props:{
          latest:{
              type:Object
          }
      },
      data(){
        return({
            selectNews:{
                type:Object
            },
            newsDetailShow:false
        });
      },
      computed:{

      },
      methods:{
        newsSelected(story){
            //console.log('newsSelected');
            this.selectNews=story;
            this.newsDetailShow=true;
        },
        backToHome(){
          this.selectNews={};
          this.newsDetailShow=false;
        }
      },
      components:{
          TopNews,
          DailyNews,
          NewsDetail
      }
  }

</script>

<style>
  .main-page{width:100%; height: 100%; overflow: auto; padding-bottom: 50px;}
  .topnews-wrapper{width:100%; height: 250px;}
  .dailynews-wrapper{width:100%;}
  .newsdetail-wrapper{width:100vw; height: 100vh; overflow: hidden; position: fixed; top:0; left: 0; background:#fff; z-index: 100; transition:all 0.5s;}

  .slide-left-transition{ opacity:1; transform: translate3d(0,0,0);}
  .slide-left-enter,.slide-left-leave-active{opacity:0; transform:translate3d(100vw,0,0);}

</style>
