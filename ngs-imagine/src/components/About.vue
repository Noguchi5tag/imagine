<script setup>
import Inner from '../Layouts/Inner.vue'
import BgBeige from '../Layouts/BgBeige.vue'
import SectionTitle from './SectionTitle.vue'

import { ref } from 'vue'


</script>

<template>
    <BgBeige>
        <Inner>
            <SectionTitle :title=" '長崎イマジンについて' " :title_sub=" 'CONCEPT' " class="hidden lg:block" />

            <div class="lg:grid lg:grid-cols-3 gap-16 block pb-10 lg:pb-40 ">
                <div class="col-span-1 flex justify-center lg:justify-start pb-4 lg:pb-0">
                    <img class="w-1/2 lg:w-full h-full object-contain" src="../assets/images/logo/logo.svg" alt="長崎イマジンのロゴ">
                </div>
                <div class="col-span-2 flex flex-col justify-center text-center lg:text-left">
                    <h3 class="font-Maru text-xl lg:text-3xl font-bold leading-relaxed lg:leading-relaxed mb-4">いまをかたちにすることが、<br>
                    未来につながる新しい一歩。</h3>
                    <p class="font-Maru text-sm lg:text-base font-bold leading-loose lg:leading-loose">
                        今のあなたは、これまでのたくさんの経験が積み重なってできているもの。
                        そして、あなたが今どんな行動をするかで未来は変わっていくんです。
                        長崎市も新しい時代を迎えたように、あなたも新しい一歩を踏み出してみませんか？
                    </p>
                </div>
            </div>

            <div class="about-video w-auto h-[300px] lg:h-[500px] sm:h-[400px] lg:aspect-w-16 lg:aspect-h-9 aspect-w-4 aspect-h-3 -mx-6 z-40">
                <!-- <video src=""></video> -->
                <img class="rounded-none lg:rounded-xl w-full h-full object-cover" src="../assets/images/video/video-image.jpg">
            </div>
        </Inner>
    </BgBeige>
</template>

<style scoped>
.about-video {
    position: relative;
}
.about-video::before {
    border-radius: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0; 
}
@media (min-width: 1024px) {
    .about-video::before {
        border-radius: 0.75rem;
    }
}
.about-video::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background-image: url('../assets/images/logo/play.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
}
</style>
