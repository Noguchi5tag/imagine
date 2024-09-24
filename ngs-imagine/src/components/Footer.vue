<script setup>
import Inner from '../Layouts/Inner.vue'
import { ref } from 'vue'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';
// Swiperのモジュールを指定
const modules = [Navigation, A11y];
</script>

<template>
    <div class="border-t-8 border-t-customBeige"></div>
    <Inner>
        <div class="my-10 lg:my-20">
            <div class="pb-10 lg:pb-20 border-b-gray-300 border-b-4">
                <div class="footer-contents">
                    <swiper
                        :modules="modules"
                        :slides-per-view="2"
                        :space-between="10"
                        :breakpoints="{
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                        }"
                        navigation
                    >
                    <swiper-slide>
                        <a href="#">
                            <img class="border-4 border-gray-300" src="../assets/images/link/nagasaki_city.jpg" alt="長崎市のリンク">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#">
                            <img class="border-4 border-gray-300" src="../assets/images/link/nagasaki_lovers.jpg" alt="長崎LOVERSのリンク">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#">
                            <img class="border-4 border-gray-300" src="../assets/images/link/nagasakijin.jpg" alt="長崎人のリンク">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#">
                            <img class="border-4 border-gray-300" src="../assets/images/link/travel_nagasaki.jpg" alt="travel nagasakiのリンク">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#">
                            <img class="border-4 border-gray-300" src="../assets/images/link/nagasaki_city.jpg" alt="長崎市のリンク">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#">
                            <img class="border-4 border-gray-300" src="../assets/images/link/nagasaki_lovers.jpg" alt="長崎LOVERSのリンク">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#">
                            <img class="border-4 border-gray-300" src="../assets/images/link/nagasakijin.jpg" alt="長崎人のリンク">
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="#">
                            <img class="border-4 border-gray-300" src="../assets/images/link/travel_nagasaki.jpg" alt="travel nagasakiのリンク">
                        </a>
                    </swiper-slide>
                    </swiper>
                </div>
            </div>

            <div class="mt-10 lg:mt-20">
                <div class="lg:flex items-start justify-around">
                    <div class="flex flex-col justify-center">
                        <div class="w-1/3 lg:w-1/2 mx-auto">
                            <img class="w-full" src="../assets/images/logo/logo.svg" alt="長崎イマジンロゴ">
                        </div>
                        <div class="flex items-center justify-center gap-8 mt-6">
                            <img class="w-6" src="../assets/images/sns/facebook.png" alt="facebook">
                            <img class="w-6" src="../assets/images/sns/x.svg" alt="x">
                            <img class="w-6" src="../assets/images/sns/instagram.png" alt="instagram">
                        </div>
                    </div>
                    <div class="flex justify-around gap-8 mt-4 lg:mt-0">
                        <ul class="h-full flex flex-col justify-between lg:space-y-6">
                            <li class="font-Maru font-bold text-base lg:text-lg lg:leading-loose leading-loose"><a href="#">長崎イマジンについて</a></li>
                            <li class="font-Maru font-bold text-base lg:text-lg lg:leading-loose leading-loose"><a href="#">最新情報</a></li>
                            <li class="font-Maru font-bold text-base lg:text-lg lg:leading-loose leading-loose"><a href="#">イマジントーーク！</a></li>
                        </ul>
                        <ul class="lg:flex items-end justify-between gap-8">
                            <div class="lg:space-y-6">
                                <li class="font-Maru font-bold text-base lg:text-lg lg:leading-loose leading-loose"><a href="#">特集</a></li>
                                <li class="list-disc font-Maru text-base lg:leading-loose leading-loose"><a href="#">長崎今人 ながさき昭和100年史</a></li>
                                <li class="list-disc font-Maru text-base lg:leading-loose leading-loose"><a href="#">アマフェッショナル散策の流儀</a></li>
                            </div>
                            <div class="lg:space-y-6">
                                <li class="list-disc font-Maru text-base lg:leading-loose leading-loose"><a href="#">長崎ひまじん</a></li>
                                <li class="list-disc font-Maru text-base lg:leading-loose leading-loose"><a href="#">長崎今走る人イマRUNジン </a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="text-center mt-4">&copy;長崎イマジン</p>
        </div>
    </Inner>
</template>

<style>
.footer-contents .swiper-button-prev,
.footer-contents .swiper-button-next {
    background-color: #354896;
    padding: 4px;
    border-radius: 50%;
    color: white;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(0%);
    z-index: 10;
}
@media (min-width: 1024px) {
    .footer-contents .swiper-button-prev,
    .footer-contents .swiper-button-next {
        padding: 10px;
        width: 40px;
        height: 40px;
        top: 50%;
    }
}

.footer-contents .swiper-button-prev:after,
.footer-contents .swiper-button-next:after {
    font-size:medium;
}

.footer-contents .swiper-button-prev {
    left: 0px;
}

.footer-contents .swiper-button-next {
    right: 0px;
}

li::marker {
    color: #d1d5db;
}
</style>
