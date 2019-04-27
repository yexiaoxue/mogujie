<template>
    <div class="guanzhu">
    <div class="guanzhu-text">
        <span>{{faxian}}</span>
        <font></font>
        <span>{{guanzhus}}</span>
        <font></font>
        <span>{{liuxing}}</span>
        <font></font>
    </div>
    
</div>
</template>
<script>
export default {
    data (){
        return{
             guanzhus:"关注",
            liuxing:"流行",
            faxian:"发现",
           
        }
    }
    
}
</script>
<style  lang="less" scoped>
.guanzhu{
    height: 100%;
    background-color: #ffffff;

}
.guanzhu-text{
   // width: 80%;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0 auto;
    font-size: 0.36rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 0.02rem solid gainsboro;     
}
.guanzhu-text font{
    width: 0.6rem;
    border-bottom: 0.05rem solid salmon;
    margin-left: -2.6rem;
    position: relative;
    top: -0.1rem;
}


</style>
