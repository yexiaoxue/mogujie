<template>
<div  class="liuxing-div">

   <div class="liuxing-top">
     <li    class="liuxing-top-li" > {{liuxing}} </li>




     <div    class="liuxing-one" 
     >
      <div class="liuxing-img" 
       v-for="(value,index) in liu"
      :key="index" 
     >
        
        <div   class="liuxing-img-frist" >
          <span   class="spans"> {{value.shengxin}} </span>
        <img   class="imgs" :src="value.shengxinimg" alt="">



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
          liuxing:"流行元素",
         
       liu:[

           {
             shengxin:"省心两件套",
             shengxinimg:require("../../assets/img/30.png"),

           },
           {
             shengxin:"个性水杯",
             shengxinimg:require("../../assets/img/31.png"),

           },

 {
             shengxin:"塑身美衣",
             shengxinimg:require("../../assets/img/32.png"),

           },
            {
             shengxin:"贴心四件套",
             shengxinimg:require("../../assets/img/33.png"),

           },
{
             shengxin:"外套搭配",
             shengxinimg:require("../../assets/img/34.png"),

           },
           {
             shengxin:"睡衣套装",
             shengxinimg:require("../../assets/img/35.png"),

           },
           {
             shengxin:"斜跨链条包",
             shengxinimg:require("../../assets/img/36.png"),

           },
            {
             shengxin:"情侣手机壳",
             shengxinimg:require("../../assets/img/37.png"),

           },
            {
             shengxin:"舒适休闲裤",
             shengxinimg:require("../../assets/img/38.png"),

           },
            

       ]


       }






    }
}
</script>
<style lang="less" scoped>
.liuxing-div{

 background-color:#fff;
    height: 9.5rem;
}
.liuxing-top{
    margin-top: 0.2rem;
 //background-color: palegreen;
 height: 5.5rem;



}
.liuxing-top-li{
top: 0.2rem;
font-size: 0.37rem;
color: #666666;
position: relative;
left:-2.9rem;
}


.liuxing-one{
width: 98.95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
   // background-color: palegreen;

}
.liuxing-img{
  margin-top: 0.4rem;
    width: 30%;
    height: 42.33%;
    margin-left: 0.2rem;
    flex-direction:column;
    justify-content: center;
    font-size: 0.32rem;
     background-color: #F3F3F3;
}
.spans{
 top: 0.2rem; 
  position: relative;


}
.imgs{
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0.4rem;
}

</style>
