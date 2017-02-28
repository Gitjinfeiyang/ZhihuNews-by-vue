<template>
  <div class="later-news">
    <div class="date-wrapper">
      <div class="day">{{date.year}}年{{date.mouth}}月{{date.day}}日至今的热闻</div>
      <div class="datecontrol-wrapper" v-if="selecterShow">
        <DateControl ></DateControl>
      </div>
    </div>
    <div class="later-wrapper" ref="page">
      <DailyNews :key="index" :stories="later.stories" @addSelectedNews="newsSelected" v-for="(later,index) in laters"></DailyNews>
    </div>
    <transition name="slide-left">
      <div class="newsdetail-wrapper" v-if="newsDetailShow" >
        <NewsDetail :selectNews="selectNews" @backToHome="backToHome"></NewsDetail>
      </div>
    </transition>
  </div>
</template>

<script>
  import DateControl from '../DateControl/DateControl.vue';
  import DailyNews from '../DailyNews/DailyNews.vue';
  import NewsDetail from '../NewsDetail/NewsDetail.vue';

  export default{
      data(){
          return({
              laters:[],
            selectNews:{
              type:Object
            },
            newsDetailShow:false,
            date:{

            },
            selecterShow:false,
            screenH:window.innerHeight,
            contentH:0
          });
      },
      computed:{

      },
      created(){
          var date=new Date();
          this.date={
            year:date.getFullYear(),
            mouth:date.getMonth()+1,
            day:date.getDate()
          };
          var count=this.date.day;
          this.$http.get('api/4/news/before/'+date.getFullYear()+'0'+(date.getMonth()+1)+date.getDate()).then(function (response) {
              this.$set(this.laters,0,response.body);
              //console.log(this.laters);
          });

          //滑动到底部加载更多
            window.onscroll=(function(){
                 //console.log(this);
                 var scrollT=Math.max(document.body.scrollTop,document.documentElement.scrollTop);
              // console.log(scrollT+" "+this.screenH+" "+this.contentH);//此时this不再指向vm，指向window
              //console.log((scrollT+this.screenH)+" "+(this.contentH-100));//滑动太快会捕捉不到,可以考虑模糊判断
                 if((this.contentH-10)<(scrollT+this.screenH)&&this.contentH>=(scrollT+this.screenH)){
                     //console.log("enter");
                     count-=1;
                   this.$http.get('api/4/news/before/'+'201702'+count).then(response=>{
                     this.laters.push(response.body);
                     this.date.day=count;
                   });
                 }
            }).bind(this);//保存this对象，可用bind函数或箭头函数


      },
      mounted(){
//          var pageH=0;
//            console.log(this.$refs.page.offsetHeight);  //nextTick 后当前组件加载完毕，子组件没有加载完毕，因为ajax异步
//            pageH=this.$refs.page.scrollHeight;
      },
      updated(){
            //console.log(this.$refs.page.offsetHeight);//created时，子组件还没有拿到数据更新，子组件得到数据更新视图触发updated
            this.contentH=this.$refs.page.scrollHeight;
      },
      components:{
          DateControl,
          DailyNews,
          NewsDetail
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
      }

  }

</script>

<style>

  .date-wrapper{width:100%; height: 50px; position:fixed; top:0; left: 0; z-index: 10;background:#fff; box-shadow: 0 0 2px 2px #ccc;
    padding:0 10px;}
  .date-wrapper .day{ line-height: 50px; }
  .datecontrol-wrapper{width:100%; position:absolute; top:50px; left: 0;}

</style>
