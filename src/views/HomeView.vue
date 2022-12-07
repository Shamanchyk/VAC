<template>
  <div class="home">
    <div class="container">
      <div class="home-wrapper">
        <div class="home-wrapper_left">
          <h2>The easiest way to buy a car in Canada</h2>
          <router-link to="/Request" class="home-request">Request a suv</router-link>
        </div>
        <div class="home-wrapper_right">
          <swiper
            :options="swiperOptions"
            :navigation = "true"
            class="mySwiper"
          >
            <swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
            ><swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-6.jpg"
            /></swiper-slide>
            <div class="swiper-next ssssss">asdas</div>
            <div class="swiper-prev ssssss">asdsa</div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/navigation";

//import "./style.css";

import { Navigation } from "swiper";




export default {

  data(){
    return{
      swiperOptions:{
        grabCursor: "true",
        /* navigation:{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }, */
        modules: "modules"
      }
    }
  },
  
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
    return {
      modules: [Navigation],
    };
  },
};

</script>
