<template>
  <div class="top-news">
    <swiper :options="swiperOption" ref="mySwiperA" :style="slideStyle">
      <swiper-slide :key="index" v-for="(story,index) in topStories" >
        <a href="#">
          <img class="top-pic" :src="story.image" @click="addSelectedNews(story)"/>
          <h1 class="top-title">{{story.title}}</h1>
        </a>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'


  export default{
    data(){
      return({
        swiperOption:{
          autoplay: 3000
        },
        slideStyle:{
            height:'250px',
            width:'100%',
            position:'relative'
        }
      });
    },
    props:{
      topStories:{
          type:Array
      }
    },
    components:{
          swiper,
          swiperSlide
    },
    created(){
        this.$nextTick(
          function(){
//            console.log(this.$refs.mySwiperA.$el.offsetHeight);//初次打印为零 因为ajax异步请求数据，图片未加载

            //this.$refs.mySwiperA.$el.style.height=250+"px";
            this.$refs.mySwiperA.$el.style.width='100%';
          }
        );
    },
    methods:{
      addSelectedNews(story){
        this.$emit('addSelectedNews',story);
      }
    }
  }

</script>

<style>
  .top-news{width: 100%; height: 200px;}
  .top-pic{width:100%;}
  .top-title{width:100%; position:absolute; bottom:0; left: 0;color:#fff; text-shadow: 0 0 1px #000;
    font-size: 20px; padding-left: 10px;}
</style>
