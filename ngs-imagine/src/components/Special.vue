<script setup>
import Inner from '../Layouts/Inner.vue'
import BgBeige from '../Layouts/BgBeige.vue'
import SectionTitle from './SectionTitle.vue'

import { ref } from 'vue'


</script>

<template>
    <BgBeige>
        <div class="overflow-x-hidden">
            <Inner>
                <SectionTitle :title=" '特集' " :title_sub=" 'SPECIAL CONTENTS' "/>
    
                <div class="pb-32 pt-5 lg:pt-10">
    
                    <div class="special-content">
                        <p class="lg:hidden font-Maru text-xl lg:text-3xl text-customBlue font-bold mb-4 z-10">CONTENTS:01</p>
                        <div class="lg:flex justify-between items-center mb-16 relative">
                            <div class="h-auto w-full lg:w-2/5 relative z-10">
                                <img class="w-full h-full rounded-lg object-cover" src="../assets/images/special/nagasaki_100year.jpg" alt="">
                            </div>
                            <div class="content-logo lg:w-3/5 flex flex-col justify-center lg:p-6 pb-6 lg:mt-0 mt-4 relative">
                                <div class="-mt-0 lg:-mt-14 z-10">
                                    <div class="lg:block flex justify-between items-center">
                                        <h2 class="font-Maru text-2xl lg:text-4xl text-customBlue lg:leading-normal leading-normal font-bold mb-4 tracking-wide lg:tracking-widest">長崎今人<br>ながさき昭和100年史</h2>
                                        <img class="lg:hidden w-16 h-16 lg:w-20 lg:h-20 z-10 rotate-45" src="../assets/images/logo/compass.svg" alt="ロゴ">
                                    </div>
                                    <p class="font-Maru font-bold text-sm lg:leading-loose leading-loose">令和7年は昭和100年、100年に1度の長崎は昭和～平成～令和と続く100年史でもある。長崎市の100年の歴史を長崎にゆかりのある人物にスポットを当てて紹介します。</p>
            
                                    <div class="mt-5 lg:mt-10 flex justify-center items-center lg:block">
                                        <div class="rounded-full border-4 border-customBeige inline-block">
                                            <div class=" border-4 rounded-full border-white">
                                                <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">詳しくはこちら</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img class="hidden lg:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 z-10 rotate-45" src="../assets/images/logo/compass.svg" alt="ロゴ">
                                <p class="hidden lg:block absolute top-0 -right-8 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 font-Maru text-xl lg:text-3xl text-customBlue font-bold jp-vertical z-10">CONTENTS:01</p>
                            </div>
                            <div class="absolute bg-white lg:top-1/2 bottom-0 -left-6 lg:left-0 lg:-translate-y-1/2 w-screen h-[500px] lg:h-72 z-0"></div>
                        </div>
                    </div>
    
                    <div class="special-content">
                        <p class="lg:hidden font-Maru text-xl lg:text-3xl text-customBlue font-bold mb-4 z-10">CONTENTS:02</p>
                        <div class="flex lg:gap-16 flex-col-reverse lg:flex-row justify-between items-center mb-16 relative">
                            <div class="content-logo lg:w-3/5 flex flex-col justify-center lg:p-6 pb-6 lg:mt-0 mt-4 relative">
                                <div class="-mt-0 lg:-mt-14 z-10">
                                    <div class="lg:block flex justify-between items-center">
                                        <h2 class="font-Maru text-2xl lg:text-4xl text-customBlue lg:leading-normal leading-normal font-bold mb-4 tracking-wide lg:tracking-widest">アマフェッショナル<br>散策の流儀</h2>
                                        <img class="lg:hidden w-16 h-16 lg:w-20 lg:h-20 z-10 rotate-45" src="../assets/images/logo/compass.svg" alt="ロゴ">
                                    </div>
                                    <p class="font-Maru font-bold text-sm lg:leading-loose leading-loose">1人または2人の登場人物がスタジアムシティや市役所新庁舎などを散策するショートドキュメンタリー風動画のご紹介です。</p>
                                    <div class="mt-5 lg:mt-10 flex justify-center items-center lg:block">
                                        <div class="rounded-full border-4 border-customBeige inline-block">
                                            <div class=" border-4 rounded-full border-white">
                                                <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">詳しくはこちら</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img class="hidden lg:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 z-10 rotate-45" src="../assets/images/logo/compass.svg" alt="ロゴ">
                                <p class="hidden lg:block absolute top-0 -left-1/3 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 font-Maru text-xl lg:text-3xl text-customBlue font-bold jp-vertical z-10">CONTENTS:02</p>
                            </div>
                            <div class="h-auto w-full lg:w-2/5 z-10">
                                <img class="w-full rounded-lg object-cover" src="../assets/images/special/amafessional.jpg" alt="">
                            </div>
                            <div class="absolute bg-white lg:top-1/2 bottom-0 right-0 -left-6 lg:left-auto lg:-translate-y-1/2 w-screen h-[500px] lg:h-72 z-0"></div>
                        </div>
                    </div>
    
                    <div class="special-content">
                        <p class="lg:hidden font-Maru text-xl lg:text-3xl text-customBlue font-bold mb-4 z-10">CONTENTS:03</p>
                        <div class="lg:flex justify-between items-center mb-16 relative">
                            <div class="h-auto w-full lg:w-2/5 relative z-10">
                                <img class="w-full h-full rounded-lg object-cover" src="../assets/images/special/himajin.jpg" alt="">
                            </div>
                            <div class="content-logo lg:w-3/5 flex flex-col justify-center lg:p-6 pb-6 lg:mt-0 mt-4 relative">
                                <div class="-mt-0 lg:-mt-14 z-10">
                                    <div class="lg:block flex justify-between items-center">
                                        <h2 class="font-Maru text-2xl lg:text-4xl text-customBlue lg:leading-normal leading-normal font-bold mb-4 tracking-wide lg:tracking-widest">長崎ひまじん</h2>
                                        <img class="lg:hidden w-16 h-16 lg:w-20 lg:h-20 z-10 rotate-45" src="../assets/images/logo/compass.svg" alt="ロゴ">
                                    </div>
                                    <p class="font-Maru font-bold text-sm lg:leading-loose leading-loose">長崎の遊び場・公園・散策場所・イベント・コンサート情報などを詳しくご紹介します。</p>
            
                                    <div class="mt-5 lg:mt-10 flex justify-center items-center lg:block">
                                        <div class="rounded-full border-4 border-customBeige inline-block">
                                            <div class=" border-4 rounded-full border-white">
                                                <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">詳しくはこちら</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img class="hidden lg:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 z-10 rotate-45" src="../assets/images/logo/compass.svg" alt="ロゴ">
                                <p class="hidden lg:block absolute top-0 -right-8 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 font-Maru text-xl lg:text-3xl text-customBlue font-bold jp-vertical z-10">CONTENTS:03</p>
                            </div>
                            <div class="absolute bg-white lg:top-1/2 bottom-0 -left-6 lg:left-0 lg:-translate-y-1/2 w-screen h-[500px] lg:h-60 z-0"></div>
                        </div>
                    </div>
    
                    <div class="special-content">
                        <p class="lg:hidden font-Maru text-xl lg:text-3xl text-customBlue font-bold mb-4 z-10">CONTENTS:04</p>
                        <div class="flex lg:gap-20 flex-col-reverse lg:flex-row justify-between items-center mb-16 relative">
                            <div class="content-logo lg:w-3/5 flex flex-col justify-center lg:p-6 pb-6 lg:mt-0 mt-4 relative">
                                <div class="-mt-0 lg:-mt-14 z-10">
                                    <div class="lg:block flex justify-between items-center">
                                        <h2 class="font-Maru text-2xl lg:text-4xl text-customBlue lg:leading-normal leading-normal font-bold mb-4 tracking-wide lg:tracking-widest">長崎今走る人<br>イマRUNジン</h2>
                                        <img class="lg:hidden w-16 h-16 lg:w-20 lg:h-20 z-10 rotate-45" src="../assets/images/logo/compass.svg" alt="ロゴ">
                                    </div>
                                    <p class="font-Maru font-bold text-sm lg:leading-loose leading-loose">バトン動画 バトンはサッカーボール？バスケットボール？いろんな人がいろんな場所を走る！ひたすら走る！ただ走る！坂も走る！案内も走る！<br>廊下も走る！全力で走る！無駄に走る！みんなで走る！</p>
                                    <div class="mt-5 lg:mt-10 flex justify-center items-center lg:block">
                                        <div class="rounded-full border-4 border-customBeige inline-block">
                                            <div class=" border-4 rounded-full border-white">
                                                <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">詳しくはこちら</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img class="hidden lg:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 z-10 rotate-45" src="../assets/images/logo/compass.svg" alt="ロゴ">
                                <p class="hidden lg:block absolute top-0 -left-1/3 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 font-Maru text-xl lg:text-3xl text-customBlue font-bold jp-vertical z-10">CONTENTS:04</p>
                            </div>
                            <div class="h-auto w-full lg:w-2/5 z-10">
                                <img class="w-full rounded-lg object-cover" src="../assets/images/special/imarunjin.jpg" alt="">
                            </div>
                            <div class="absolute bg-white lg:top-1/2 bottom-0 right-0 -left-6 lg:left-auto lg:-translate-y-1/2 w-screen h-[500px] lg:h-80 z-0"></div>
                        </div>
                    </div>
                </div>
            </Inner>
        </div>
    </BgBeige>
</template>

<style scoped>
.content-logo {
    position: relative;
}
.content-logo::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    background-image: url(../assets/images/logo/compass.svg);
}

.jp-vertical {
    writing-mode: vertical-rl;
}
</style>
