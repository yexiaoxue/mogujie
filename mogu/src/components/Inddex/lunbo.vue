<template>
    
<div class="swper">
<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">  <img src="@/assets/img/m6.webp"   style="height: 3.7rem;"/>   </div>
            <div class="swiper-slide"> <img  src="@/assets/img/m8.webp"   style="height: 3.7rem;" />    </div>
            <div class="swiper-slide">  <img src="@/assets/img/m7.webp"   style="height: 3.7rem;" />   </div>
          
           
        </div>
        <div class="swiper-pagination"></div>
    </div>













</div>


</template>
<script>
import list from "../../../public/img.js"
export default {
    data(){
        return{
            list :list.list,
            
        }
    },
    created (){
   
    }
}
</script>

<style lang="less" scoped>

</style>
