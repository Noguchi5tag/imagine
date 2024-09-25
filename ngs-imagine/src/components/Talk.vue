<script setup>
import Inner from '../Layouts/Inner.vue'
import BgBrown from '../Layouts/BgBrown.vue'
import SectionTitle from './SectionTitle.vue'

import { ref } from 'vue'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

// Swiperのモジュールを指定
const modules = [Navigation,Pagination, A11y];

const swiperNavigation = {
    prevEl: '.story-navi--prev',
    nextEl: '.story-navi--next',
};

const swiperPagination = {
    el: '.swiper-pagination',
    type: 'progressbar',
};

</script>

<template>
    <BgBrown id="talk">
        <div class="overflow-x-hidden">
            <Inner>
                <div class="py-28 lg:py-8">
                    <div class="lg:flex justify-around items-center">
                        <SectionTitle :title=" 'イマジントーーク！' " :title_sub=" 'IMAGINE TALK!' "/>
                        <div class="hidden lg:block">
                            <span class="story-navi story-navi--prev bg-customBlue text-white px-6 py-4 rounded-full relative"></span>
                            <span class="story-navi story-navi--next bg-customBlue text-white px-6 py-4 rounded-full ml-2 relative"></span>
                        </div>
                    </div>
        
                    <div class="">
                        <p class="font-Maru text-sm lg:text-base font-bold leading-loose">
                            イマジンさんいつやっとっすか？今やろ！イマジントーークでは、長崎市の企業に勤務する新人社員から、仕事内容はもちろん、長崎での休日の過ごし方や趣味など、深掘りエピソードもご紹介します。
                        </p>
    
                        <div class="talk-contents mt-24 w-full">
                            <swiper
                                :modules="modules"
                                :slides-per-view="1"
                                :space-between="10"
                                :breakpoints="{
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 50
                                    },
                                }"
                                :navigation="swiperNavigation"
                                :pagination="swiperPagination"
                            >
                                <swiper-slide>
                                    <div class="rounded-lg bg-customBeige px-4 ">
                                        <div class="flex flex-col justify-center items-center border-b-4 border-b-customBrown relative">
                                            <div class="mb-4 rounded-full overflow-hidden w-32 h-32 lg:w-40 lg:h-40 border-4 border-customBeige bg-customBeige absolute -top-1/3">
                                                <img class="w-full h-full object-cover" src="../assets/images/talk/ana.jpg" alt="ANAの人">
                                            </div>
                                            <div class="mb-4 pt-20 lg:pt-28">
                                                <!-- <img src="" alt="会社のロゴ"> -->
                                                <p class="text-sm lg:text-base">（ここにロゴ）ANAテレマート株式会社</p>
                                            </div>
                                            <h3 class="mb-4 text-base lg:text-lg text-customBlue font-Maru font-bold">「美声」と「よりそい」の先に、<br>たくさんの感謝に出会える。</h3>
                                        </div>
                                        <div class="py-4">
                                            <p class="mb-4 text-xs">私は国内線と国際線の２つのご案内スキルを習得しているので、その予約案内や派遣などの業務に携わっています。....</p>
                                            <p class="text-sm lg:text-base text-customBlue font-bold">T・K（入社00年目）</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="rounded-lg bg-customBeige px-4 ">
                                        <div class="flex flex-col justify-center items-center border-b-4 border-b-customBrown relative">
                                            <div class="mb-4 rounded-full overflow-hidden w-32 h-32 lg:w-40 lg:h-40 border-4 border-customBeige bg-customBeige absolute -top-1/3">
                                                <img class="w-full h-full object-cover" src="../assets/images/talk/ana.jpg" alt="ANAの人">
                                            </div>
                                            <div class="mb-4 pt-20 lg:pt-28">
                                                <!-- <img src="" alt="会社のロゴ"> -->
                                                <p class="text-sm lg:text-base">（ここにロゴ）ANAテレマート株式会社</p>
                                            </div>
                                            <h3 class="mb-4 text-base lg:text-lg text-customBlue font-Maru font-bold">「美声」と「よりそい」の先に、<br>たくさんの感謝に出会える。</h3>
                                        </div>
                                        <div class="py-4">
                                            <p class="mb-4 text-xs">私は国内線と国際線の２つのご案内スキルを習得しているので、その予約案内や派遣などの業務に携わっています。....</p>
                                            <p class="text-sm lg:text-base text-customBlue font-bold">T・K（入社00年目）</p>
                                        </div>
                                    </div>
                                </swiper-slide><swiper-slide>
                                    <div class="rounded-lg bg-customBeige px-4 ">
                                        <div class="flex flex-col justify-center items-center border-b-4 border-b-customBrown relative">
                                            <div class="mb-4 rounded-full overflow-hidden w-32 h-32 lg:w-40 lg:h-40 border-4 border-customBeige bg-customBeige absolute -top-1/3">
                                                <img class="w-full h-full object-cover" src="../assets/images/talk/ana.jpg" alt="ANAの人">
                                            </div>
                                            <div class="mb-4 pt-20 lg:pt-28">
                                                <!-- <img src="" alt="会社のロゴ"> -->
                                                <p class="text-sm lg:text-base">（ここにロゴ）ANAテレマート株式会社</p>
                                            </div>
                                            <h3 class="mb-4 text-base lg:text-lg text-customBlue font-Maru font-bold">「美声」と「よりそい」の先に、<br>たくさんの感謝に出会える。</h3>
                                        </div>
                                        <div class="py-4">
                                            <p class="mb-4 text-xs">私は国内線と国際線の２つのご案内スキルを習得しているので、その予約案内や派遣などの業務に携わっています。....</p>
                                            <p class="text-sm lg:text-base text-customBlue font-bold">T・K（入社00年目）</p>
                                        </div>
                                    </div>
                                </swiper-slide><swiper-slide>
                                    <div class="rounded-lg bg-customBeige px-4 ">
                                        <div class="flex flex-col justify-center items-center border-b-4 border-b-customBrown relative">
                                            <div class="mb-4 rounded-full overflow-hidden w-32 h-32 lg:w-40 lg:h-40 border-4 border-customBeige bg-customBeige absolute -top-1/3">
                                                <img class="w-full h-full object-cover" src="../assets/images/talk/ana.jpg" alt="ANAの人">
                                            </div>
                                            <div class="mb-4 pt-20 lg:pt-28">
                                                <!-- <img src="" alt="会社のロゴ"> -->
                                                <p class="text-sm lg:text-base">（ここにロゴ）ANAテレマート株式会社</p>
                                            </div>
                                            <h3 class="mb-4 text-base lg:text-lg text-customBlue font-Maru font-bold">「美声」と「よりそい」の先に、<br>たくさんの感謝に出会える。</h3>
                                        </div>
                                        <div class="py-4">
                                            <p class="mb-4 text-xs">私は国内線と国際線の２つのご案内スキルを習得しているので、その予約案内や派遣などの業務に携わっています。....</p>
                                            <p class="text-sm lg:text-base text-customBlue font-bold">T・K（入社00年目）</p>
                                        </div>
                                    </div>
                                </swiper-slide><swiper-slide>
                                    <div class="rounded-lg bg-customBeige px-4 ">
                                        <div class="flex flex-col justify-center items-center border-b-4 border-b-customBrown relative">
                                            <div class="mb-4 rounded-full overflow-hidden w-32 h-32 lg:w-40 lg:h-40 border-4 border-customBeige bg-customBeige absolute -top-1/3">
                                                <img class="w-full h-full object-cover" src="../assets/images/talk/ana.jpg" alt="ANAの人">
                                            </div>
                                            <div class="mb-4 pt-20 lg:pt-28">
                                                <!-- <img src="" alt="会社のロゴ"> -->
                                                <p class="text-sm lg:text-base">（ここにロゴ）ANAテレマート株式会社</p>
                                            </div>
                                            <h3 class="mb-4 text-base lg:text-lg text-customBlue font-Maru font-bold">「美声」と「よりそい」の先に、<br>たくさんの感謝に出会える。</h3>
                                        </div>
                                        <div class="py-4">
                                            <p class="mb-4 text-xs">私は国内線と国際線の２つのご案内スキルを習得しているので、その予約案内や派遣などの業務に携わっています。....</p>
                                            <p class="text-sm lg:text-base text-customBlue font-bold">T・K（入社00年目）</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                        <div class="lg:hidden mt-10 flex items-center relative">
                            <div class="">
                                <span class="story-navi story-navi--prev bg-customBlue text-white px-4 py-2 rounded-full relative before:content-['prev']"></span>
                                <span class="story-navi story-navi--next bg-customBlue text-white px-4 py-2 rounded-full ml-2 relative before:content-['next']"></span>
                            </div>
                            <div class="swiper-pagination swiper-my-pagination-main swiper-pagination-progressbar swiper-pagination-horizontal">
                                <span 
                                    class="swiper-pagination-progressbar-fill" 
                                    style="transform: translate3d(0px, 0px, 0px) scaleX(0.25) scaleY(1); 
                                    transition-duration: 300ms;"
                                ></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-center items-center mt-5 lg:mt-10 ">
                        <div class="rounded-full border-4 border-customBeige inline-block">
                            <div class=" border-4 rounded-full border-customBrown">
                                <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">一覧はこちら</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Inner>
        </div>
    </BgBrown>
</template>

<style>
.story-navi--next::before,
.story-navi--prev::before {
    content: '';
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    width: 30%;
    height: 30%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.story-navi--next::before {
    background-image: url('../assets/images/button/next-button.png');
}
.story-navi--prev::before {
    background-image: url('../assets/images/button/prev-button.png');
}

.talk-contents .swiper {
    overflow: visible;
}

.swiper-pagination-progressbar.swiper-pagination-horizontal {
    right: 0 !important;
    left: auto;
    top: 50%;
    transform: translateY(-50%);
    width: 70%;
    height: var(--swiper-pagination-progressbar-size, 6px);
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: #354896;
}
</style>
