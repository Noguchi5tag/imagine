<script setup>
import Inner from '../Layouts/Inner.vue'
import BgBrown from '../Layouts/BgBrown.vue'
import SectionTitle from './SectionTitle.vue'

import { ref } from 'vue'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';

// Swiperのモジュールを指定
const modules = [Navigation, A11y];
</script>

<template>
    <BgBrown>
        <Inner>
            <div class="pt-16 lg:pt-0">
                <div class="flex justify-between items-center">
                    <SectionTitle :title=" 'イマジントーーク！' " :title_sub=" 'IMAGINE TALK!' "/>
                    <div class="swiper-navigation"></div>
                </div>
    
                <div class="">
                    <p class="font-Maru text-sm lg:text-base font-bold leading-loose">
                        イマジンさんいつやっとっすか？今やろ！イマジントーークでは、長崎市の企業に勤務する新人社員から、仕事内容はもちろん、長崎での休日の過ごし方や趣味など、深掘りエピソードもご紹介します。
                    </p>

                    <div class="talk-contents">
                        <swiper
                            :modules="modules"
                            :slides-per-view="2.5"
                            :space-between="50"
                            navigation
                        >
                            <swiper-slide>Slide 1</swiper-slide>
                            <swiper-slide>Slide 2</swiper-slide>
                            <swiper-slide>Slide 3</swiper-slide>
                            <swiper-slide>Slide 4</swiper-slide>
                            <swiper-slide>Slide 5</swiper-slide>
                            <swiper-slide>Slide 6</swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </Inner>
    </BgBrown>
</template>

<style scoped>

</style>
