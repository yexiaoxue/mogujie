<template>
    <div class="centre">

      <div class="centre-top" >
       <img class="top-img"   src="../../assets/img/z6.jpg" alt="">

       <span class="top-text"  > {{remen}}    </span>
      </div>


<div    class="slunbo">
      <div class="swiper-container-two">
    <div class="swiper-wrapper">
      <div class="swiper-slide red-slide">
          <img src="../../assets/img/24.jpg" alt="">
        <div class="title">
          <span>{{nuan}}</span><br>
           <span  class="title-span">{{nuans}}</span>

        </div>
      </div>
      <div class="swiper-slide blue-slide">
          <img src="../../assets/img/25.jpg" alt="">
        <div class="title">
            <span>{{mianfu}}</span><br>
           <span  class="title-span">{{mianfus}}</span>
        </div>
      </div>
      <div class="swiper-slide orange-slide">
          <img src="../../assets/img/26.jpg" alt="">
        <div class="title">
             <span>{{maoyi}}</span><br>
           <span  class="title-span">{{maoyis}}</span>
        </div>
      </div>
      <div class="swiper-slide green-slide">
          <img src="../../assets/img/27.jpg" alt="">
        <div class="title">
             <span>{{nei}}</span><br>
           <span  class="title-span">{{neis}}</span>
        </div>
      </div>
      <div class="swiper-slide pink-slide">
          <img src="../../assets/img/22.png" alt="">
        <div class="title">
             <span>{{pinzhi}}</span> <br>
           <span  class="title-span">{{pinzhis}}</span>
        </div>

      </div>
      <div class="swiper-slide red-slide">
          <img src="../../assets/img/28.png" alt="">
       
      </div>
      
    </div>
    <div class="pagination"></div>
  </div>

</div>




    </div>







</template>
<script>
export default {
    data(){
     return{
      remen:"热门精选   |     解锁时髦精冬日穿搭LOOK→",
      nuan:"又暖又软@羊羔毛",
      nuans:"冬日杠把子时髦UP",
      mianfu:"棉服&保暖计",
       mianfus:"冬日衣橱“狠角色”",
       maoyi:"chic毛衣首选",
       maoyis:"外穿内搭人手一件",
      nei:"超火内搭来袭",
       neis:"万能搭配",
         pinzhi:"品质好货甄选",
       pinzhis:"好看好用又不贵",

     }


    },
    created(){
     

    }
}
</script>

<style lang="less" scoped>
.center{

background-color: #fff;

}
.centre-top{
background-color: #fff;
 height: 2.2rem;
}

.top-text{
  position: relative;
  font-size: 0.30rem;
  color: #fff;
  z-index: 1;
  top: -1.7rem;


}
.slunbo{
    width: 100%;
    height: 4.5rem;
    background-color: #fff; 

}
.swiper-wrapper{
     width: 32.5%;
}
.swiper-container-two {
  width: 100%;
  height: 4.5rem; 
  margin-left: 0.1rem;
  color:#333;
  text-align: center;
}

.swiper-slide .title {
  font-style: italic;
  font-size: 0.28rem;
  margin-top: rem;
  margin-bottom: 0;
  line-height: 45px;
}
.pagination {
  position: absolute;
  z-index: 20;
  left: 10px;
  bottom: 10px;
}
.swiper-pagination-switch {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #222;
  margin-right: 5px;
  opacity: 0.8;
  border: 1px solid #fff;
  cursor: pointer;
}
.swiper-visible-switch {
  background: #aaa;
}
.swiper-active-switch {
  background: #fff;
}
.title-span{
    font-size: 0.2rem;
    color: #999;
}

</style>
