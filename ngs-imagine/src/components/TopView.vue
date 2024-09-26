<script setup>
import Header from './Header.vue'
import { ref, onMounted } from 'vue';
// カルーセル
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

// Swiper
import 'swiper/css';

const images_top = [
    '/src/assets/images/carousel/carousel (2).jpg',
    '/src/assets/images/carousel/carousel (3).jpg',
    '/src/assets/images/carousel/carousel (4).jpg',
    '/src/assets/images/carousel/carousel (5).jpg',
    '/src/assets/images/carousel/carousel (6).jpg',
    '/src/assets/images/carousel/carousel (7).jpg',
    '/src/assets/images/carousel/carousel (8).jpg',
    '/src/assets/images/carousel/carousel (9).jpg',
    '/src/assets/images/carousel/carousel (10).jpg',
    '/src/assets/images/carousel/carousel (11).jpg',
];
const images_bottom = [
    '/src/assets/images/carousel/carousel (12).jpg',
    '/src/assets/images/carousel/carousel (13).jpg',
    '/src/assets/images/carousel/carousel (14).jpg',
    '/src/assets/images/carousel/carousel (15).jpg',
    '/src/assets/images/carousel/carousel (16).jpg',
    '/src/assets/images/carousel/carousel (17).jpg',
    '/src/assets/images/carousel/carousel (18).jpg',
    '/src/assets/images/carousel/carousel (19).jpg',
    '/src/assets/images/carousel/carousel (20).jpg',
    '/src/assets/images/carousel/carousel (21).jpg',
];

// Swiperの初期化
onMounted(() => {
    new Swiper('.swiper1', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 6.5,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
    
    new Swiper('.swiper2', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 6.5,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
    });
});
</script>

<template>
    <div>
        <Header />

        <div class="w-full">
            <!-- <img class="hidden lg:block lg:w-full" src="../assets/images/slide/slidepc.jpg" alt="トップビュー"> -->
            <!-- <img class="lg:hidden w-full" src="../assets/images/slide/slidesp.jpg" alt="トップビュー"> -->

            <div class="hidden lg:block">
                <carousel 
                    :itemsToShow="4.5"
                    :itemsToScroll="2"
                    :loop="true"
                    :autoplay="{
                        delay: 0,
                        disableOnInteraction: false,
                    }"
                    :transition="12000"
                    :wrapAround="true"
                >
                    <slide v-for="(image, index) in images_top" :key="index" class="w-1/4 h-auto">
                        <img :src="image" alt="スライドイメージ" class="hidden lg:block lg:w-full lg:h-full object-cover" />
                    </slide>
                </carousel>
                
                <carousel 
                    :itemsToShow="4.5"
                    :itemsToScroll="1.5"
                    :loop="true"
                    :autoplay="{
                        delay: 0,
                    }"
                    :transition="12000"
                    :wrapAround="true"
                >
                    <slide v-for="(image, index) in images_bottom" :key="index" class="w-1/4 h-auto">
                        <img :src="image" alt="スライドイメージ" class="hidden lg:block lg:w-full lg:h-full object-cover" />
                    </slide>
                </carousel>
            </div>

            <div class="hidden lg:block header-content">
                <div class="swiper swiper1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (2).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (3).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (4).jpg" alt="" />
                        </div>
                            <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (5).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (6).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (7).jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="swiper swiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (8).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (9).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (10).jpg" alt="" />
                        </div>
                            <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (11).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (12).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (13).jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.header-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
}
@media (min-width: 1024px) {
    .header-content {
        display: none;
    }
}
.header-content .swiper{
    height: 100%;
    width: calc(50% - 10px);
    position: absolute!important;
}
.header-content .swiper.swiper1{
    width: 50%;
    left: 0;
    top: 0;
}
.header-content .swiper.swiper2{
    width: 50%;
    right: 0;
    top: 0;
}
.header-content .swiper-wrapper {
    transition-timing-function: linear;
}

</style>
