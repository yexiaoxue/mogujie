<template>
    <div class="shangcheng-div">
     <Header></Header>
    <Headerone></Headerone>
    <Shouye></Shouye>

  <div   class="shangcheng-top">
      <div   class="shangcheng-top-img">
     
        <div class="shangcheng-top-img-one"  >
          <img src="../../assets/img/z1.jpg" alt="">
          <img class="kouhong"     src="../../assets/img/z5.png" alt="">
          <span   class="top-text" >{{fengshang}}   </span>
        </div>

        <div   class="shangcheng-top-img-two" >
         <img src="../../assets/img/z2.jpg" alt="">
          <span   class="top-text" >{{rexiao}}   </span>
        </div >

        <div     class="shangcheng-top-img-three" >
         <img src="../../assets/img/z3.jpg" alt="">
          <span   class="top-text" >{{haohuo}}   </span>
        </div>
         
         <div     class="shangcheng-top-img-four" >
          <img src="../../assets/img/z4.jpg" alt="">
          <span   class="top-text" >{{xinpin}}   </span>
        </div>

  </div>

 </div>

<Shangchengtubiao></Shangchengtubiao>
<Shangchengcentre></Shangchengcentre>
<Liuxingyuansu></Liuxingyuansu>
<Like></Like>












    </div>
    </template>
<script>
import Shouye from "../Inddex/shouye.vue"
import Header from "../Inddex/header.vue"
import Headerone from "../Inddex/headerone.vue"
import Shangchengtubiao from "../Market/shangchengtubiao.vue"
import Shangchengcentre from "../Market/shangchengcentre.vue"
import Liuxingyuansu from "../Market/liuxingyuansu"
import Like from "../Market/like"
export default {
     components:{
        Shouye,
        Header,
        Headerone, 
         Shangchengtubiao, 
         Shangchengcentre,
         Liuxingyuansu,
         Like
     },
     data (){
       return{
        fengshang:"风尚快抢",
        rexiao:"热销榜单",
        haohuo:"好货精选",
        xinpin:"新品快抢",
       }





     }
}
</script>
<style lang="less" scoped>
.shangcheng-div{
  height: 100%;
// background-color: #fff;

}


.shangcheng-top{
   height: 2.1rem;
  background-color:  #fff;
}
.shangcheng-top-img{
  width: 98%;
  margin: 0 auto;
  height: 2rem;
  //background-color: pink;
  display: flex;
  justify-content: space-around;
}
.shangcheng-top-img-one,.shangcheng-top-img-two,.shangcheng-top-img-three,.shangcheng-top-img-four{
  margin-top: 3%;
}
.kouhong{
   width: 1.9rem;
   height: 1.9rem;
   position: absolute;
   margin-left: -1.7rem;
   margin-top: -0.1rem;
   z-index: 1;
 // border-radius: 0.5rem;
}
.top-text{
    position: absolute;
    z-index: 2;
    font-size: 0.28rem;
    color: #fff;
    font-weight: 900;
    margin-left: -1.4rem;
    margin-top: 1.2rem;
}
</style>