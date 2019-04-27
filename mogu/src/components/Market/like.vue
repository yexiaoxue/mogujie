<template>
    <div  class="like-div">

       <div  class="top">

      <img class="top-img"   src="../../assets/img/猜你喜欢.webp" alt="">
       </div>

       <div class="tu">
        <div   class="tuone"
         v-for="(value,index) in like"
      :key="index" 
        
        >
           <div class="tutwo"  >
             <img  class="imgs" :src="value.xinkuanimg" alt="">
              <li> {{value.xinkuan}} </li>
              <div  class="sss">
                 <img :src="value.imgs" alt="">
                 <span   class="sss-text"> {{value.shu}} </span>
              </div>
             
           <div  class="tu-price">
             <span  class="s"  >   {{value.prices}}     </span>
             <div  class="ss">
              <span> {{value.pricess}}     </span>
             <img class="wujiao"    :src="value.pricessimg" alt="">
          </div>
          
          
           </div>
             <div  class="likes">
              <span>{{value.liji}}</span>

             </div>

           </div>

        </div>



       </div>



    </div>



</template>
<script>
export default {
    data(){
      return{
        
       like:[
                {  
                    
                    shu:"已售123件",
                    imgs:require("../../assets/img/42.png"),
                    xinkuanimg:require("../../assets/img/39.webp"),
                    xinkuan:"2019新款仙女裙吊带多...",
                    prices:"￥59",
                    pricess:"556",
                    pricessimg:require("../../assets/img/41.png"),
                    liji:"立即购买",
                },
                {    

                     shu:"已售1293件",
                    imgs:require("../../assets/img/42.png"),
                    xinkuanimg:require("../../assets/img/43.webp"),
                    xinkuan:"2019新款仙女裙吊带多...",
                    prices:"￥159",
                    pricess:"556",
                    pricessimg:require("../../assets/img/41.png"),
                    liji:"立即购买",
                },
                 {
                      shu:"已售1923件",
                    imgs:require("../../assets/img/42.png"),
                    xinkuanimg:require("../../assets/img/44.webp"),
                    xinkuan:"2019新款仙女裙吊带多...",
                    prices:"￥89",
                    pricess:"556",
                    pricessimg:require("../../assets/img/41.png"),
                    liji:"立即购买",
                },
                 {
                      shu:"已售1923件",
                    imgs:require("../../assets/img/42.png"),
                    xinkuanimg:require("../../assets/img/45.webp"),
                    xinkuan:"2019新款仙女裙吊带多...",
                    prices:"￥99",
                    pricess:"556",
                    pricessimg:require("../../assets/img/41.png"),
                    liji:"立即购买",
                },
                {
                      shu:"已售193件",
                    imgs:require("../../assets/img/42.png"),
                    xinkuanimg:require("../../assets/img/46.webp"),
                    xinkuan:"2019新款仙女裙吊带多...",
                    prices:"￥259",
                    pricess:"556",
                    pricessimg:require("../../assets/img/41.png"),
                    liji:"立即购买",
                },
                {
                      shu:"已售183件",
                    imgs:require("../../assets/img/42.png"),
                    xinkuanimg:require("../../assets/img/47.webp"),
                    xinkuan:"2019新款仙女裙吊带多...",
                    prices:"￥59",
                    pricess:"556",
                    pricessimg:require("../../assets/img/41.png"),
                    liji:"立即购买",
                },
                {
                      shu:"已售1233件",
                    imgs:require("../../assets/img/42.png"),
                    xinkuanimg:require("../../assets/img/48.webp"),
                    xinkuan:"2019新款仙女裙吊带多...",
                    prices:"￥59",
                    pricess:"556",
                    pricessimg:require("../../assets/img/41.png"),
                    liji:"立即购买",
                },
                 {
                      shu:"已售123件",
                    imgs:require("../../assets/img/42.png"),
                    xinkuanimg:require("../../assets/img/49.webp"),
                    xinkuan:"2019新款仙女裙吊带多...",
                    prices:"￥59",
                    pricess:"556",
                    pricessimg:require("../../assets/img/41.png"),
                    liji:"立即购买",
                },
                






       ]
      }


    }
}
</script>
<style lang="less" scoped>

.top{
    height: 1rem;
background-color:#fff;
}
.top-img{

    width: 100%;
}

.tu{
width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
margin-left: -0rem;
 background-color: #fff;

}
.tuone{
 margin: 0 auto;
margin-top: 0.2rem;
    width: 45%;
    height: 52.33%;
    //margin-left: 0.5rem;
    flex-direction:column;
    justify-content: center;
    //font-size: 0.32rem;
     background-color:  #fff;



}

.tutwo{
 background-color: #fff;
 height: 6.2rem;
 }
.tutwo li{
    font-size: 0.26rem;
    margin-top: 0.1rem;
}
.imgs{
  width: 3.4rem;
  height: 4.4rem;

}
.tu-price{
   font-size: 0.26rem;
}
.likes{
    font-size: 0.28rem;
    color:#fff;
    width: 3.4rem;
    height: 0.6rem;
   margin: 0 auto;
    line-height: 0.6rem;
    background-color: #ff5777;
    border-radius: 0.1rem;

}
.wujiao{
width: 0.3rem;
    height: 0.3rem;

}
.s{
    position: relative;
   margin-left: -1.99rem;
   top: 0.1rem;
}
.ss{
position: relative;
   //marign-left: -0.4rem;
   left: 1.3rem;
 top: -0.2rem;

}

.sss{
    z-index: 0;
    position: absolute;
    margin-top: -1.4rem;
    margin-left: -0.05rem;
}
.sss-text{

 font-size: 0.26rem;
color: #fff;
z-index: 1;
position: relative;
margin-left: -1.4rem;
top: -0.2rem;
}
</style>
