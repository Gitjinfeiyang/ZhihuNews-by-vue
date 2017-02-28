<template>
  <div class="news-detail">
    <div class="back-button iconfont" @click="back">&#xe65b;</div>
    <div class="img-header">
      <img :src="this.news.image" v-if="selectNews.images"/>
    </div>
    <div class="news-content">
      <h3>{{selectNews.title}}</h3>
      <div class="news-text" v-html="news.body"></div>
    </div>
  </div>

</template>

<script>
  export default{
    props:{
        selectNews:{
            type:Object
        }
    },
    data(){
      return({
          news:{
              type:Object
          }
      });
    },
    methods:{
      back(){
          this.$emit('backToHome');
      },
      addSelectedNews(story){
        this.$emit('addSelectedNews',story);
      }
    },
    created(){
        //console.log(this.selectNews.id);
      this.$http.get('api/4/news/'+this.selectNews.id).then(response=>{
          this.news=response.body;
          //console.log(this.news);
      });
    }
  }
</script>

<style>
  ::-webkit-scrollbar{width:0;height:0}
  .news-detail{width:100%; height: 100%; overflow: scroll; position: relative;}
  .img-header{width:100%; height: 300px; overflow: hidden;}
  .img-header img{width:100%;}
  .back-button{position:fixed; top:10px; left: 10px; width:30px; height: 30px; line-height: 30px; text-align: center;
    font-size: 34px; font-weight: 700; color:rgba(0,0,0,0.2); text-shadow: 0 0 1px #fff;}
  .news-content{padding:20px 10px; font-size: 14px; line-height: 25px;}
  .news-content p{padding:10px 0;}
  .news-content p img{width:100%;}
  .news-content ul{background: rgb(244,255,249); list-style: none;}
  .news-content .meta{height:50px; padding:10px 0; margin-bottom: 20px;}
  .meta .avatar{height: 30px; width:30px; border-radius: 15px;}

</style>
