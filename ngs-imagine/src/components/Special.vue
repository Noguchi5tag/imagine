<script setup>
import Inner from '../Layouts/Inner.vue'
import BgBeige from '../Layouts/BgBeige.vue'
import SectionTitle from './SectionTitle.vue'

import { ref } from 'vue'


</script>

<template>
    <BgBeige>
        <Inner>
            <SectionTitle :title=" '特集' " :title_sub=" 'SPECIAL CONTENTS' "/>

            <div class="py-5 lg:py-10">

                <div class="lg:flex justify-between items-center mb-4 lg:mb-8 relative">
                    <div class="aspect-w-4 aspect-h-3 lg:aspect-w-3 lg:aspect-h-5 lg:w-1/2 w-auto h-[300px] lg:h-auto sm:h-[300px] z-10">
                        <img class="w-full h-full rounded-lg object-cover" src="../assets/images/special/nagasaki_100year.jpg" alt="">
                    </div>
                    <div class="content-logo lg:w-1/2 bg-white flex flex-col justify-center p-6 relative">
                        <div class="-mt-4 lg:-mt-14 z-10">
                            <div class="lg:block flex justify-between items-center">
                                <h2 class="font-Maru text-2xl lg:text-4xl text-customBlue lg:leading-normal leading-normal font-bold mb-4">長崎今人<br>ながさき昭和100年史</h2>
                                <img class="lg:hidden w-16 h-16 lg:w-20 lg:h-20 z-10" src="../assets/images/logo/compass.svg" alt="ロゴ">
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
                        <img class="hidden lg:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 z-10" src="../assets/images/logo/compass.svg" alt="ロゴ">
                        <p class="hidden lg:absolute top-0 -right-4 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 font-Maru text-xl lg:text-3xl text-customBlue font-bold jp-vertical z-10">CONTENTS:01</p>
                    </div>
                    <div class="hidden lg:absolute bg-white top-1/2 right-0 -translate-y-1/2 w-full h-20 lg:w-full lg:h-80 z-0"></div>
                </div>

                <!-- <div class="flex justify-between items-center mb-8 relative">
                    <div class="content-logo w-1/2  flex flex-col justify-center p-6 relative">
                        <div class="-mt-4 lg:-mt-14 z-10">
                            <h2 class="font-Maru text-3xl lg:text-4xl text-customBlue lg:leading-normal leading-normal font-bold mb-4">長崎今人<br>ながさき昭和100年史</h2>
                            <p class="font-Maru font-bold text-sm lg:leading-loose leading-loose">令和7年は昭和100年、100年に1度の長崎は昭和～平成～令和と続く100年史でもある。長崎市の100年の歴史を長崎にゆかりのある人物にスポットを当てて紹介します。</p>
    
                            <div class="mt-5 lg:mt-10 ">
                                <div class="rounded-full border-4 border-customBeige inline-block">
                                    <div class=" border-4 rounded-full border-white">
                                        <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">詳しくはこちら</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 z-10" src="../assets/images/logo/compass.svg" alt="ロゴ">
                        <p class="absolute top-0 -left-1/3 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 font-Maru text-xl lg:text-3xl text-customBlue font-bold jp-vertical z-10">CONTENTS:01</p>
                        
                    </div>
                    <div class="w-1/3 z-10">
                        <img class="w-full rounded-lg object-cover" src="../assets/images/special/nagasaki_100year.jpg" alt="">
                    </div>
                    <div class="absolute bg-white top-1/2 left-0 -translate-y-1/2 w-full h-20 lg:w-full lg:h-80 z-0"></div>
                </div>

                <div class="flex justify-between items-center mb-8 relative">
                    <div class="w-1/3 z-10">
                        <img class="w-full rounded-lg object-cover" src="../assets/images/special/nagasaki_100year.jpg" alt="">
                    </div>
                    <div class="content-logo w-1/2 bg-white flex flex-col justify-center p-6 relative">
                        <div class="-mt-4 lg:-mt-14 z-10">
                            <h2 class="font-Maru text-3xl lg:text-4xl text-customBlue lg:leading-normal leading-normal font-bold mb-4">長崎今人<br>ながさき昭和100年史</h2>
                            <p class="font-Maru font-bold text-sm lg:leading-loose leading-loose">令和7年は昭和100年、100年に1度の長崎は昭和～平成～令和と続く100年史でもある。長崎市の100年の歴史を長崎にゆかりのある人物にスポットを当てて紹介します。</p>
    
                            <div class="mt-5 lg:mt-10">
                                <div class="rounded-full border-4 border-customBeige inline-block">
                                    <div class=" border-4 rounded-full border-white">
                                        <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">詳しくはこちら</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 z-10" src="../assets/images/logo/compass.svg" alt="ロゴ">
                        <p class="absolute top-0 -right-4 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 font-Maru text-xl lg:text-3xl text-customBlue font-bold jp-vertical z-10">CONTENTS:01</p>
                    </div>
                    <div class="absolute bg-white top-1/2 right-0 -translate-y-1/2 w-full h-20 lg:w-full lg:h-80 z-0"></div>
                </div>

                <div class="flex justify-between items-center relative">
                    <div class="content-logo w-1/2  flex flex-col justify-center p-6 relative">
                        <div class="-mt-4 lg:-mt-14 z-10">
                            <h2 class="font-Maru text-3xl lg:text-4xl text-customBlue lg:leading-normal leading-normal font-bold mb-4">長崎今人<br>ながさき昭和100年史</h2>
                            <p class="font-Maru font-bold text-sm lg:leading-loose leading-loose">令和7年は昭和100年、100年に1度の長崎は昭和～平成～令和と続く100年史でもある。長崎市の100年の歴史を長崎にゆかりのある人物にスポットを当てて紹介します。</p>
    
                            <div class="mt-5 lg:mt-10 ">
                                <div class="rounded-full border-4 border-customBeige inline-block">
                                    <div class=" border-4 rounded-full border-white">
                                        <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">詳しくはこちら</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 z-10" src="../assets/images/logo/compass.svg" alt="ロゴ">
                        <p class="absolute top-0 -left-1/3 translate-x-1/2 translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 font-Maru text-xl lg:text-3xl text-customBlue font-bold jp-vertical z-10">CONTENTS:01</p>
                        
                    </div>
                    <div class="w-1/3 z-10">
                        <img class="w-full rounded-lg object-cover" src="../assets/images/special/nagasaki_100year.jpg" alt="">
                    </div>
                    <div class="absolute bg-white top-1/2 left-0 -translate-y-1/2 w-full h-20 lg:w-full lg:h-80 z-0"></div>
                </div> -->
            </div>
        </Inner>
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
