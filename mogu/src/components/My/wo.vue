<template>
    <div class="shangcheng-div">
    <Header></Header>
    <Shouye></Shouye>

  <div  class="div-top">
      <img     class="topimg"  src="../../assets/img/1.1.png" alt="">
    <div  class="top-img">
      
      <img   class="topimg-one"   src="../../assets/img/1.3.jpg" alt="">
      <img    class="topimg-ones"    src="../../assets/img/1.4.png" alt="">

       <div class="top-img-text" >
        <li>{{yexue}}</li>


        <div  class="top-img-texts" >
         <img src="../../assets/img/1.2.png" alt="">
          <span>{{gerenzhuye}}    </span>
        </div>

       </div>


    </div>

     
    <div    class="xinxi">
       <img    class="xinxi-img"   src="../../assets/img/1.5.png" alt="">
       <div  class="xinxi-text">
       <div>
           <span>消息</span>
       </div>
        <div>
           
       </div>
    
      <div>
           <img src="../../assets/img/2.03.png" class="jianytou" alt="">
       </div>
     </div>
</div>

    <div    class="xinxis">
       <img    class="xinxi-img"   src="../../assets/img/1.6.png" alt="">
       <div  class="xinxi-text">
       <div>
           <span>收藏</span>
       </div>
        <div>
           
       </div>
    
      <div>
           <img src="../../assets/img/2.03.png" class="jianytou" alt="">
       </div>
     </div>
</div>


<div     class="xinxione"
 >
 <div    class="xinxiones" 
  v-for="(value,index) in liist"
 :key="index" >
       <img    class="xinxi-img"   :src="value.gouwuimg" alt="">
       <div  class="xinxi-text">
       <div>
           <span>{{value.gouwu}}</span>
       </div>
        <div>
           
       </div>
    
      <div>
           <img :src="value.gouwuimgs" class="jianytou" alt="">
       </div>
     </div>
</div>




</div>


<div   class="xinxitwo">

<div    class="xinxiones" 
  v-for="(value,index) in liiist"
 :key="index" >
       <img    class="xinxi-img"   :src="value.gouimg" alt="">
       <div  class="xinxi-text">
       <div>
           <span>{{value.gou}}</span>
       </div>
        <div>
           
       </div>
    
      <div>
           <img :src="value.gouimgs" class="jianytou" alt="">
       </div>
     </div>
</div>
</div>
 <div  class="tuichu">
   <div  class="tuichu-text" >
           <span>退出登录</span>
       </div>
     </div>



  </div>

</div>
</template>
<script>
import Header from "../Inddex/header.vue"
import Shouye from "../Inddex/shouye.vue"

export default {
     components:{
        Header,
        Shouye, 
     },
data(){
    return{
    yexue:"夜雪s",
    gerenzhuye:"个人注册",

    liist:[
        {
        gouwu:"购物车",
        gouwuimg:require("../../assets/img/1.7.png"),
        gouwuimgs:require("../../assets/img/2.03.png"),
        },
        {
        gouwu:"我的订单",
        gouwuimg:require("../../assets/img/1.8.png"),
        gouwuimgs:require("../../assets/img/2.03.png"),
        },
        {
        gouwu:"卡券红包",
        gouwuimg:require("../../assets/img/1.9.png"),
        gouwuimgs:require("../../assets/img/2.03.png"),
        },
        ],


    liiist:[
        {
        gou:"我的钱包",
        gouimg:require("../../assets/img/2.0.png"),
        gouimgs:require("../../assets/img/2.03.png"),
        },
        {
        gou:"收货地址",
        gouimg:require("../../assets/img/2.01.png"),
        gouimgs:require("../../assets/img/2.03.png"),
        },
        {
        gou:"客服",
        gouimg:require("../../assets/img/2.02.png"),
        gouimgs:require("../../assets/img/2.03.png"),
        },
        ],
        }
  }
}
</script>
<style lang="less" scoped>
.shangcheng-div{
    background-color: #fff;
     height:6rem;
}
.topimg{
   z-index: 0; 
}
.top-img{
    //margin: 0 auto;
    width: 89%;
    height: 2.4rem;
    background-color: #fff;
    position: absolute;
    left: 6%;
    top: 20%;
    z-index: 1;
    border-radius: 0.19rem;
    box-shadow: 0 0.02rem 0.32rem rgba(0,0,0,.12);
    
}
.topimg-one{
  border-radius: 0.9rem;
 // position: absolute;
  margin-top: -1.3rem;

}
.topimg-ones{
   width: 0.5rem;
   height: 0.5rem;
   margin-left: -0.6rem;
}
.top-img-text{
    width: 41%;
    height: 1.5rem;
    //background-color: gold;
    margin: 0 auto;
    margin-top: -0.2rem;
   // text-align: center;
}
.top-img-text li{
    font-size: 0.40rem;
    color: gray;


}
.top-img-texts{
    top: 0.2rem;
    font-size: 0.28rem;
    color: gray;
    height: 0.5rem;
    position: relative;
    width: 1.8rem;
    border: 0.02rem solid gray;
    margin: 0 auto;
    border-radius: 0.3rem;
}
.top-img-texts span{
    margin-left: 0.1rem;
    margin-top:  0.19rem;
   line-height: 0.5rem;
}
.xinxi{
     background-color: #fff;
    margin-top: 1.45rem; 
    height: 1.2rem;
   // background-color: palevioletred;
   border-bottom: 0.017rem solid gainsboro;
    font-size: 0.32rem;
}
.xinxi-text{
     display: flex;
      top: 0.5rem;
      margin-left:0.6rem;
        position: relative;
     justify-content: space-around;
}
.xinxi-text div{
  
}
.xinxi-img{
    margin-top: 0.4rem;
    left: 0.1rem;
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
}

.jianytou{
    margin-left: 3.9rem;
}
.xinxis{
 height: 1.2rem;
 font-size: 0.28rem;
  background-color: #fff;
 // background-color: palevioletred;
}
.xinxione{

margin-top: 0.4rem;
height: 1.2rem;
 font-size: 0.28rem;
 background-color: #fff;
}
.xinxiones{
height: 1.2rem;
 font-size: 0.28rem;
 background-color: #fff;
border-bottom: 0.017rem solid gainsboro;

}
.xinxitwo{

margin-top: 2.8rem;
height: 3.2rem;
 font-size: 0.28rem;
 background-color: #fff;

}
.tuichu{

margin-top: 0.8rem;
height: 2.2rem;
//background-color: #fff;

}
.tuichu-text{
    width: 70%;
    margin: 0 auto;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    font-size: 0.38rem;
    background-color: #ff5777;
    border-radius: 0.1rem;
}
</style>