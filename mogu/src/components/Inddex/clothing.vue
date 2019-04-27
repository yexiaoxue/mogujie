<template>
    <div   class="colthing-warp">
     <div  class="colthing-warp-double" 
     v-for="(value,index) in list"
     :key="index"
      >
<!-- 头部 -->
            <div  class="colthing-warp-top">
            
                <div    class="colthing-warp-top-left">    
                <img  :src="value.touxiang" alt="">
                </div>

                <div    class="colthing-warp-top-right">    
                 <li class="colthing-warp-top-right-li">{{value.meiyouyi}}</li>
                 <li> {{value.zhiyeone}}  </li>
                </div>
            </div>
              <div class="wy-text">
                <div class="wy-text1">
                    {{ value.titleBanner }}
                </div>
            </div>



 <!-- 中间 -->
            <div  class="colthing-warp-header">
                <div   class="colthing-warp-header-img" >
                 <img         :src="value.touxiangone" alt="">
                  <img    class="colthing-warp-header-img-one"   :src="value.touxiangone1" alt="">
                   <img    class="colthing-warp-header-img-one"  :src="value.touxiangone2" alt="">
                </div>

                <div class="colthing-warp-header-bofang" >
                 <img         :src="value.touxiangs" alt="">
                  <img         :src="value.touxiangs" alt="">
                  <img         :src="value.touxiangs" alt="">
                </div>
     

                <div  class="colthing-warp-header-youlan" >

                    <div  class="colthing-warp-header-youlan-one"  >
                    <img         :src="value.tu1" alt="">
                    <span> {{value.number}}    </span>
                    </div>

                    <div   class="colthing-warp-header-youlan-two" >
                    <img         :src="value.tu1" alt="">
                    <span> {{value.number}}    </span>
                    </div>

                      <div    class="colthing-warp-header-youlan-three" >
                    <img         :src="value.tu1" alt="">
                    <span> {{value.number}}    </span>
                    </div>
                </div>
                 <div   class="colthing-warp-header-youlan-shopping" >
                     <img         :src="value.tu2" alt="">
                      <img         :src="value.tu2" alt="">
                       <img         :src="value.tu2" alt="">
                 </div>

            </div>

 <!-- 底部 -->
            <div  class="colthing-warp-bottom">
            <div   class="colthing-warp-bottom-one" >
            <img :src="value.tu" alt="">
             <span>{{value.ur}}</span>
            </div>


            <div  class="colthing-warp-bottom-ones">
            <img :src="value.tu" alt="">
             <span>{{value.ur}}</span>
            


            </div>



            </div>








    </div>


</div>

</template>
<script>
export default {
       data(){
          return {

       }
       }
,
props:{

list:{
    type:Array,
    defalut:[
      
    ]

}

}

    
}
</script>
<style lang="less" scoped>
.colthing-warp{
//height: 8.7rem;
background-color:#ffff;
border-bottom: 0.05rem solid gainsboro
}

.colthing-warp-top{
    height: 2.0rem;
    //background-color:rgb(126, 75, 75);
    display: flex;
    

}
.colthing-warp-double{
   border-bottom: 0.01rem solid gray;
}
.colthing-warp-top img{
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 0.9rem;
    
}
.colthing-warp-top-left{
     height: 2.0rem;
     line-height: 2.0rem;
     margin-left: 0.3rem;
}
.colthing-warp-top-right{
    font-size: 0.32rem;
   margin-top: 0.4rem;
   line-height: 0.7rem;
}
.colthing-warp-top-right-li{
    font-size: 0.34rem;
    font-weight: 900;  
    margin-left: -3rem; 
}
.colthing-warp-header{
 //height: 5.0rem;


}
.colthing-warp-header-img{
    display: flex;
     z-index: 0;
}
.colthing-warp-header-img img{
    width: 2.428rem;
   height: 5.3rem;
    padding-left: 0rem;
    
}
.colthing-warp-header-img-one{
 margin-left: 0.1rem;
}
.colthing-warp-header-bofang{
    z-index: 1;
    margin-top: -3.5rem;
    display: flex;
    
    margin-left: -0.8rem;
}
.colthing-warp-header-bofang img{
    width: 1.1rem;
    height: 1.1rem;
   padding-left: 1.4rem;
}
.colthing-warp-bottom{
    margin: 0 auto;
    width: 92.95%;
    height: 1rem;
    display: flex;
    align-items: center;
}
.colthing-warp-bottom-one{
    width: 20%;
    height: 60%;
    margin-top: 0.1rem;
    background-color: gainsboro;
    display: flex;
    align-items: center;
    margin-left: -0.1rem;
}
.colthing-warp-bottom-ones{
    width: 20%;
    height: 60%;
    margin-top: 0.1rem;
    background-color: gainsboro;
    display: flex;
    align-items: center;
    margin-left: 0.1rem;
}
.colthing-warp-bottom img{
    width: 0.4rem;
    height: 0.4rem;
    margin-left: 0.1rem;
}
.colthing-warp-bottom span{
     font-size: 0.25rem;
    color: #555555;
    margin-left: 0.1rem;
    display: flex;
    align-items: center;
}
.colthing-warp-header-youlan{
    //width: 36%;
       z-index: 1;  
       display: flex;
     margin-top:1.5rem;
    //margin-left: -0.7rem;
 
}
.colthing-warp-header-youlan img{
    width: 0.4rem;
    height: 0.4rem;
   margin-left: 0.7rem;
    margin-top: 0rem;
 
}

.colthing-warp-header-youlan span{
     font-size: 0.22rem;
     color: aliceblue;
     position: absolute;
   margin-top: 0.55rem;
     display: inline-block;
   
}
.colthing-warp-header-youlan-one{
    position: absolute;
    margin-left: -0.6rem;

}
.colthing-warp-header-youlan-two{

position: absolute;
    margin-left: 1.99rem;

}
.colthing-warp-header-youlan-three{

position: absolute;
    margin-left: 4.5rem;

}
.colthing-warp-header-youlan-shopping{

    display: flex;
    justify-content: space-around;
}
.colthing-warp-header-youlan-shopping img{

margin-top: 0.5rem;
margin-left: 1.89rem;

}
.wy-text{
    width: 92.95%;
    height: 0.45rem;
    margin: 0 auto;
    margin-top: -0.2rem;
    // border: 1px solid red;
}
.wy-text1{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.28rem;
    color: #000000;
    // border: 1px solid red;
    text-align: left;
}
</style>
