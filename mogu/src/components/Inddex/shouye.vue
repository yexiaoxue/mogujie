<template>
    <div class="div-shouye">


         <div 
         class="shouye"
         v-for="(value,index) in lists"
         :key="index"
         >
           
        <router-link class="router-text"
        :to="value.routerMap"
        
        >
        {{value.text}}
        
        </router-link>
            
         </div>


    </div>

</template>
<script>
export default {
   data(){
      return {
        lists:[
            {
            text:"首页",
            routerMap:"/index"

            },
            {
                text:"商城",
            routerMap:"./shangcheng"
      
            },
            {
            text:"直播",
            routerMap:"./zhibo"

            },
            {
            text:"我",
            routerMap:"./wo"
            }
        ]




      }

   }

    
}
</script>
<style lang="less" scoped>
.div-shouye{
 width:100%;
height: 1rem;
position: fixed;
z-index: 999;
   top: 12.4rem;
   display: flex;
    background-color: #fff;
justify-content: space-around;
text-align: center;
}
.shouye{
   //width:27%;
   height: 1rem;
   
   line-height: 1rem;
   
   
    font-size: 0.36rem;
 }

.router-text{
color: black;

}
.router-link-exact-active{
    color: rgb(255, 87, 119);
}

</style>
