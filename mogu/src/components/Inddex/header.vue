<template>
    <div class="my-div">

    <div  class="header">
    <img   src="@/assets/img/m1.png"/>

   <div class="header-text">
    <span>{{ daren}}</span>
    <div class="wujiao">
    <img src="@/assets/img/m2.png" >
    <img src="@/assets/img/m2.png" >
    <img src="@/assets/img/m2.png" >
    <img src="@/assets/img/m2.png" >
    <img src="@/assets/img/m2.png" >
    
    <li class="li-text">超过2亿用户已下载  </li>
    </div>

   </div>
    <div  class="open">
  <span class="open-span">打开APP</span>
   </div>

    </div>




 </div>




</template>
<script>
 
export default {
    data(){
        return{
       daren:"上万达人为你试穿全网品牌",
     
        }
    }

    
}

 </script>
 <style lang="less" scoped>
 .header{
    z-index: 999;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.1rem;
    display: flex;
    overflow: hidden;
    background: #fff;
    border-bottom: 2px solid #c5c5c5;
 }
 .header img{
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.15rem;
    margin-left: 0.2rem;
    
 }
 .header-text{
    text-overflow: ellipsis;
    font-size: 0.26em;
    line-height: 0.5rem;
  
 }
 .header-text span{
    top: 0.1rem;
    position: relative;
  margin-left: -0.19rem;
 }
 .wujiao{
    margin-left:0rem;
    top: -0.1rem;
    position: relative;
    left: 0rem; 
 }
 .wujiao img{
   width: 0.2rem;
   height: 0.2rem; 
   margin-left: 0.1rem; 
   display:inline-block;

 }
 .li-text{
  display: inline-block;
  font-size: 0.22rem;
   left: 0.25rem;
  color: gray;
  position: relative;
   top: 0.12rem;
 }
 .open{
    width: 1.9rem;
    height: 0.7rem; 
    background-color:#f46; 
    position: relative;
    margin-left: 1rem;
    margin-top: 0.17rem;
    border-radius: 0.15rem;
 }
 .open-span{
    width: 1.5rem;
    font-size:0.26rem;
    color:#fff;
    line-height: 0.75rem;
    margin-left: -0.7rem;
    //text-align: center;
    position: absolute; 
 }
 
 </style>
 