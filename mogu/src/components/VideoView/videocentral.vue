<template>

<div  class="centrals">
  <div  class="central">

   <div class="central-top" 
     v-for="(value,index) in central"
      :key="index" 
   
   
   
     >

     <div class="top-one">
        <img  class="sa"    :src="value.img1" alt="">
          <div class="tuxiang">
             <img :src="value.img2" alt="">
             <span> {{value.text}} </span>
          </div>

         <div  class="zhibo">
           <div   class="zhibos"   >
           <div class="zhibo-text">
               <span>
                   {{value.zhibo}}
               </span>
           </div>
            <div class="zhibo-text-one">

                <img :src="value.img3" alt="">
               <span>
                   {{value.shuzi}}
               </span>
           </div>
           </div>
    </div>

<li  class="li-text">{{value.wo}} </li>

    <div class="text-img">
     <div  class="text-img-one">
         <img :src="value.img4" alt="">
         <span   class="img-price">{{value.jiage}}</span>

    </div>
    
    <div  class="text-img-one">
          <img :src="value.img5" alt="">
           <span  class="img-price">{{value.jiages}}</span>
    </div>

    <div  class="text-img-one">
          <img :src="value.img6" alt="">
            <span  class="img-price">{{value.jiagess}}</span>
    </div>


    </div>

<div class="text-imgs">
  <div  class="one"> 
   <img :src="value.img6" alt="">
    <span>{{value.aaa}}</span>
  </div>
<div  class="one"> 
   <img :src="value.img6" alt="">
    <span>{{value.aaa}}</span>
  </div>
<div  class="one"> 
   <img :src="value.img6" alt="">
    <span>{{value.aaa}}</span>
  </div>

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


central:[
    {
text:"Zing蜜大大",
zhibo:"直播中   |",
aaa:"您你你你你 ",
shuzi:"36W",
wo:"我来啦我来啦",
jiage:"￥19.9",
jiages:"￥19.9",
jiagess:"￥19.9",
img1:require("../../assets/img/50.jpg"),
img2:require("../../assets/img/51.jpg"),
img3:require("../../assets/img/55.png"),
img4:require("../../assets/img/52.jpg"),
img5:require("../../assets/img/53.jpg"),
img6:require("../../assets/img/54.jpg"),
},
   {
text:"叶子yzzz",
aaa:"您你你你你 ",
zhibo:"直播中   |",
shuzi:"36W",
wo:"美到爆炸新款+福利",
jiage:"￥19.9",
jiages:"￥19.9",
jiagess:"￥19.9",
img1:require("../../assets/img/60.jpg"),
img2:require("../../assets/img/61.jpg"),
img3:require("../../assets/img/55.png"),
img4:require("../../assets/img/62.jpg"),
img5:require("../../assets/img/63.jpg"),
img6:require("../../assets/img/64.jpg"),
},
   {
text:"美少女的店s",
aaa:"您你你你你 ",
zhibo:"直播中   |",
shuzi:"36W",
wo:"我来啦我来啦",
jiage:"￥19.9",
jiages:"￥19.9",
jiagess:"￥19.9",
img1:require("../../assets/img/65.jpg"),
img2:require("../../assets/img/69.jpg"),
img3:require("../../assets/img/55.png"),
img4:require("../../assets/img/66.jpg"),
img5:require("../../assets/img/67.jpg"),
img6:require("../../assets/img/68.jpg"),
},
   {
text:"Zing蜜大大",
zhibo:"直播中   |",
aaa:"您你你你你 ",
shuzi:"36W",
wo:"我来啦我来啦",
jiage:"￥19.9",
jiages:"￥19.9",
jiagess:"￥19.9",
img1:require("../../assets/img/50.jpg"),
img2:require("../../assets/img/51.jpg"),
img3:require("../../assets/img/55.png"),
img4:require("../../assets/img/52.jpg"),
img5:require("../../assets/img/53.jpg"),
img6:require("../../assets/img/54.jpg"),
},






]

       }





    }
}
</script>
<style lang="less" scoped>
.centrals{
 background-color: #fff;
 width: 100%;

    
}
.central{
    width: 93.95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
}
.central-top{
 width: 100%;
    height: 42.33%;
  // margin-left: -0.2rem;
    flex-direction:column;
    justify-content: center;
    font-size: 0.32rem;
     background-color: #fff;




}
.sa{
width: 99%;


}
.top-one{

margin-top: 1rem;
z-index: 0;

}
.tuxiang{
position: absolute;
font-size: 0.32rem;
z-index: 1;
margin-top:-5.4rem; 
margin-left: 0.4rem;
}
.tuxiang img{
   border:0.04rem solid white;
    border-radius: 0.6rem;
}
.zhibo{
position: absolute;
font-size: 0.28rem;
z-index: 1;
margin-top:-3.1rem; 

width: 2.6rem;
height: 0.5rem;
}
.zhibos{
background-color: rgba(0,0,0,.26);
width: 2.6rem;
height: 0.5rem;
line-height: 0.5rem;
margin-top:0.4rem; 
color: #fff;
margin-left: 0.2rem;
display: flex;
justify-content: space-around;
//padding-top: 0.4rem;
}

.li-text{
font-size: 0.36rem;
color: #fff;
position: absolute;
margin-left: 0.2rem;
margin-top:-2.1rem;
height: 0.2rem;
}
.text-img{
display: flex;
justify-content: space-around;
width: 50%;
margin-top:-1.4rem;
margin-left: 0.2rem;
}
.text-img-one span{
position: relative;
top: -0.3rem;

}
.zhibo-text{
margin-left: -1.4rem;



}

.zhibo-text-one{
position: absolute;
margin-left: 0.4rem;
margin-top: 0rem;



}

.text-img-one img{

width: 1.2rem;
height: 1.2rem;


}
.img-price{
font-size: 0.26rem;
color: #fff;
position: relative;
top: -1rem;
left: -0.2rem;
}
.text-imgs{
    position: absolute;
margin-top: -1.6rem;
margin-left: 4.8rem;
font-size: 0.22rem;
color: #fff;
}
.one img{

width: 0.3rem;
height: 0.3rem;
border-radius: 0.5rem;
margin-top: 0.12rem;
}
</style>
