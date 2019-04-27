<template>
    <div class="tubiao-div">

     <div class="tu">
    <div class="tu-one">
        <div class="tu-one-div" 
        v-for="(value,index) in lists"
        :key="index">
        <img :src="value.url" alt="" class="tu-img">
        <a >{{value.text}}</a>
        </div>
    </div>
</div>

    </div>
</template>
<script>
import lists from "../../../public/img.js"
export default {
    data(){
        return{
            lists :lists.lists,
            
        }
    }
}
</script>
<style lang="less" scoped>
.tu{
    height: 5.9rem;
    background-color: #ffffff;
    border-bottom: 0.15rem solid gainsboro;

}
.tu-one{
    
    width: 92.95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
}
.tu-one-div{
    margin-top: 0.1rem;
    width: 20%;
    height: 32.33%;
    flex-direction: column;
    justify-content: center;
    font-size: 0.32rem
}
.tu-one-div a{
    font-size: 0.26rem;
    color: gray;
    font-weight: 900;
   // border: 0.1rem solid black;
}
.tu-img{
    width:1.15rem;
    height: 1.1rem; 
}

</style>