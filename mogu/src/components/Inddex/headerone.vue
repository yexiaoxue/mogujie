<template>
    <div  class="headerone-div">

      <div class="shousuo">
<div class="shousuo-one">
<img class="shousuo-img"  src="@/assets/img/m3.png" >
</div>
<div  class="shousuo-two" >
 <img src="@/assets/img/m4.png" alt="">
<input type="text" class="shousuo-input" >
<a  class="shousuo-two-a">凉鞋</a>
</div>
<div  class="shousuo-three">
<img src="@/assets/img/m5.png" alt="">
</div>



</div>


    </div>

</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
  .shousuo{
  text-align:center;
  height: 0.8rem;
  display: flex;
  background: #fff;
  justify-content: space-around; 
 }

 .shousuo-one{
    width: 2.1rem;
    height: 0.55rem; 
 }
 .shousuo-one img{
     margin-top:-0.5rem;
     margin-left: -0.6rem;
 }
 .shousuo-three img{
      margin-top:-0.5rem;
     margin-right: -0.6rem;
 }
 .shousuo-two{
    width:5.2rem;
    height: 0.55rem; 
 }
 .shousuo-two-a{
     position: absolute;
     margin-top: 0.25rem;
    margin-left: -2.1rem;
    font-size: 0.24rem;
    z-index: 1;
    color: grey
 }
 .shousuo-two input{
    width:5.2rem;
    background-color: #ebe8e8;
    height: 0.55rem; 
    position: absolute;
   margin-top: 0.15rem;
    margin-left: -2.6rem;
    z-index: 0;
    border: 0;
    
 }
.shousuo-two img{
    position: absolute;
     margin-top: 0.28rem;
    margin-left: -2.5rem;
    z-index: 1;
}
 .shousuo-three{
    width: 2.1rem;
    height: 0.55rem; 
 }
 



</style>
