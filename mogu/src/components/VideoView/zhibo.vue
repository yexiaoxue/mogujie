<template>
    <div class="shangcheng-div">
<Header></Header>
<Videotop></Videotop>
<Videocentral></Videocentral>
    <Shouye></Shouye>
    </div>
</template>
<script>
import Shouye from "../Inddex/shouye.vue"
import Header from "../Inddex/header.vue"
import Videotop from "../VideoView/videotop"
import Videocentral from "../VideoView/videocentral"

export default {
     components:{
        Shouye,
         Header,
         Videotop,
         Videocentral
     }
}
</script>
<style lang="less" scoped>

</style>