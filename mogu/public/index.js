
      


          var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
              el: '  .swiper-pagination',
            },
           
            
          speed:2000,
          autoplay :{
              delay:2000,
              disableOnInteraction:false
              
          }
           
          }) ;





          var mySwipers = new Swiper('.swiper-container-two',{
            pagination: '.pagination',
          paginationClickable: true,
          slidesPerView: 3
        })
      
      
         
     