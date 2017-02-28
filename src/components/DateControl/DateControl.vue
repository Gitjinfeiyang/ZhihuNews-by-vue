<template>
  <div class="date-control">
    <div class="date-selecter" ref="selecterWrapper">
      <div class="year-selecter">
        <ul @touchstart.stop.prevent="handleTouchStart" @touchmove.stop.prevent="handleTouchMove" @touchend.stop.prevent="handleTouchEnd" ref="yearSelecter">
          <li v-for="year in (yearEnd-yearStart)">{{year+yearStart-1}}</li>
        </ul>
      </div>
      <div class="month-selecter">
        <ul>
          <li v-for="month in 12">{{month}}</li>
        </ul>
      </div>
      <div class="day-selecter">
        <ul>
          <li v-for="day in getDay">{{day}}</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>

  export default{
    props: {
      yearStart: {
        Type: Number,
        default(){
          return 2007;
        }
      },
      yearEnd: {
        Type: Number,
        default(){
          return new Date().getFullYear();
        }
      }
    },

    data(){
      return ({
        selectedYear: this.yearEnd,//被选择到的年份
        selectedMonth: (new Date().getMonth() + 1),//被选择到的月份
        touchEndTime:0,
        startY:0,
        endY:0,
        transformY:0,
        transformLimit:[]
      });
    },

    computed: {
      //获得当前月份的天数
      getDay(){
        return new Date(this.selectedYear, this.selectedMonth, 0).getDate();
      },
      getSelecterHeight(){
          return this.$refs.selecterWrapper.offsetHeight;
      }
    },

    methods: {
      //日历滚动极限
      getTransformLimit(el){
        var elHeight=el.offsetHeight;
      },
      handleTouchStart(e){
        this.startY=e.changedTouches[0].clientY;
      },
      handleTouchMove(e){
        let transformY=e.target.parentNode.style.transform.match(/translate3d\(\d+px,\s*(\d+)px,\s*(\d+)px\)/i)[1];
        let distance=e.changedTouches[0].clientY-this.startY;
        e.target.parentNode.style.transform="translate3d(0,"+distance+"px,0)";
        console.log(transformY);
      },
      handleTouchEnd(e){
        this.endY=e.changedTouches[0].clientY;
      }
    },

    created(){
        this.$nextTick(function(){

        });
    }

  }

</script>

<style>
  .date-control {
    width: 100%;
    height: 150px;
    overflow: hidden;
    background: #fff;
  }

  .date-selecter {
    display: flex;
    width:100%;
    height:150px;
    font-size: 16px;
  }

  .year-selecter, .month-selecter, .day-selecter {
    flex: 1;
    text-align: center;
  }

  .date-selecter li {
    height: 30px;
    line-height: 30px;
  }


</style>
