<template>

<div   class="video-top">

  <div   class="video-text">
     <div  class="video-one"  >
       <span> {{remen}}  </span>
       <font></font>
      </div>
     <div  class="video-one"  >
       <span> {{guanzhu}}  </span>
       <font></font>
      </div>
      <div  class="video-one"  >
       <span> {{chuanda}}  </span>
       <font></font>
      </div>
      <div  class="video-one"  >
       <span> {{meizhuang}}  </span>
       <font></font>
      </div>


  </div>








</div>









</template>
<script>
export default {
    data(){
      return{
         remen:"热门",
         guanzhu:"关注",
         chuanda:"穿搭",
         meizhuang:"美妆",



      }


    }
}
</script>
<style lang="less" scoped>
.video-text{
 height: 0.8rem;
background-color:#fff;
font-size: 0.36rem;
line-height: 0.8rem;
display: flex;
justify-content: space-around;
}
.video-one{
border-bottom: 0.05rem solid  #ff5777;
position: relative;
width: 1rem;


}
</style>
