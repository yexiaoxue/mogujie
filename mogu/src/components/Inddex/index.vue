<template>
    <div class="warp">

<Header></Header>
<Headerone></Headerone>
<Lunbo></Lunbo>
<Tubiao></Tubiao>
<Collocation></Collocation>
<Clothing
:list="clothingOne"
>

</Clothing>
<Clothing
:list="clothingTwo">
</Clothing>


<Shouye></Shouye>

    </div>
</template>
<script>
import Header from '../Inddex/header'
import Headerone from '../Inddex/headerone.vue'
import Lunbo from '../Inddex/lunbo.vue'
import Tubiao from '../Inddex/tubiao.vue'
import Collocation from '../Inddex/collocation.vue'
import Clothing from '../Inddex/clothing.vue'
import Shouye from '../Inddex/shouye.vue'

export default {
   
    components:{
Header,
Headerone,
Lunbo,
Tubiao,
Collocation,
Clothing,
Shouye
    },

 data (){
        return{
         clothingOne:[
             {
                touxiang:require("../../assets/img/w1.webp"),
                meiyouyi:"没有以",
                zhiye:"159cm 41kg | 杭州 | 自由职业",
                mangrenzhudi:" mangrenzhudi",
                zhiyeone:"166cm 46kg | 杭州 | 自由职业",
                shuzi:"2345",
                touxiangone:require("../../assets/img/w2.webp"),
                 touxiangone1:require("../../assets/img/w3.webp"),
                touxiangone2:require("../../assets/img/w4.webp"),
                touxiangs:require("../../assets/img/x2.png"),
                tu:require("../../assets/img/w7.jpg"),
                tu1:require("../../assets/img/x3.png"),
                ur:"U&R",
                number:"2345",

                tu2:require("../../assets/img/x1.png"),

             },
             {
                touxiang:require("../../assets/img/r1.webp"),
                meiyouyi:"奶琴呀",
               // zhiye:"172cm 41kg | 杭州 | 自由职业",
                mangrenzhudi:" mangrenzhudi",
                zhiyeone:"172cm 41kg | 杭州 | 自由职业",
                shuzi:"2345",
                touxiangone:require("../../assets/img/r2.webp"),
                touxiangone1:require("../../assets/img/r3.webp"),
                touxiangone2:require("../../assets/img/r4.webp"),
                ur:"U&R",
                number:"2345",
                 tu1:require("../../assets/img/x3.png"),
                 touxiangs:require("../../assets/img/x2.png"),
                tu2:require("../../assets/img/x1.png"),
                 tu:require("../../assets/img/w7.jpg"),

             },
              


         ],
         clothingTwo:[
            {
               touxiang:require("../../assets/img/r1.webp"),
                meiyouyi:"奶琴呀",
               // zhiye:"172cm 41kg | 杭州 | 自由职业",
                mangrenzhudi:" mangrenzhudi",
                zhiyeone:"172cm 41kg | 杭州 | 自由职业",
                shuzi:"2345",
                touxiangone:require("../../assets/img/r2.webp"),
                touxiangone1:require("../../assets/img/r3.webp"),
                touxiangone2:require("../../assets/img/r4.webp"),
                ur:"U&R",
                number:"2345",
                titleBanner:"越罗衫抉迎春风❀",
                 tu1:require("../../assets/img/x3.png"),
                touxiangs:require("../../assets/img/x2.png"),
                tu2:require("../../assets/img/x1.png"),
                 tu:require("../../assets/img/w7.jpg"),





            },
             {
               touxiang:require("../../assets/img/r1.webp"),
                meiyouyi:"奶琴呀",
               // zhiye:"172cm 41kg | 杭州 | 自由职业",
                mangrenzhudi:" mangrenzhudi",
                zhiyeone:"172cm 41kg | 杭州 | 自由职业",
                shuzi:"2345",
                touxiangone:require("../../assets/img/r2.webp"),
                touxiangone1:require("../../assets/img/r3.webp"),
                touxiangone2:require("../../assets/img/r4.webp"),
                ur:"U&R",
                number:"2345",
                titleBanner:"越罗衫抉迎春风❀",
                 tu1:require("../../assets/img/x3.png"),
                touxiangs:require("../../assets/img/x2.png"),
                tu2:require("../../assets/img/x1.png"),
                 tu:require("../../assets/img/w7.jpg"),





            }



         ]
        }
    }

}
</script>
