<script setup>
import Inner from '../Layouts/Inner.vue'
import BgWhite from '../Layouts/BgWhite.vue'
import SectionTitle from './SectionTitle.vue'

import { ref } from 'vue'


</script>

<template>
    <BgWhite>
        <Inner>
            <div class="mb-10">
                <div class="flex justify-between items-center">
                    <SectionTitle :title=" '最新情報' " :title_sub=" 'INFORMATION' "/>
                    <div class="flex justify-center items-center lg:block">
                        <div class="hidden lg:inline-block rounded-full border-4 border-customBeige">
                            <div class=" border-4 rounded-full border-white">
                                <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">一覧はこちら</a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="my-10">
                    <div class="info-content">
                        <div class="flex items-center justify-between gap-6">
                            <div class="w-2/5 lg:w-1/5 bg-customBeige rounded-lg p-4">
                                <img class="w-full" src="../assets/images/logo/logo.svg" alt="長崎イマジンのロゴ">
                            </div>
                            <div class="w-3/5 lg:w-4/5 flex flex-col justify-between items-start space-y-4">
                                <p class="text-base font-Maru font-bold">2024.0.0</p>
                                <h3 class="font-Maru text-xl lg:text-2xl text-customBlue font-bold leading-normal"><a href="#">イマジントーークにインタビューを追加しました。</a></h3>
        
                                <p class="hidden lg:block text-sm lg:text-base font-Maru font-bold lg:leading-loose">この記事はサンプルです。この記事はサンプルです。イマジントーークにインタビューしました。今回は株式会社〇〇に勤務する〇〇酸の記事をご紹介します。</p>
                            </div>
                        </div>
                        <p class="lg:hidden text-sm lg:text-base font-Maru font-bold mt-4 leading-normal">この記事はサンプルです。この記事はサンプルです。イマジントーークにインタビューしました。今回は株式会社〇〇に勤務する〇〇酸の記事をご紹介します。</p>
                    </div>
    
                    <div class="info-content">
                        <div class="flex items-center justify-between gap-6 mt-5 lg:mt-10 pt-5 lg:pt-10 border-t-2 lg:border-t-4 border-t-customBeige">
                            <div class="w-2/5 lg:w-1/5 bg-customBeige rounded-lg p-4">
                                <img class="w-full" src="../assets/images/logo/logo.svg" alt="長崎イマジンのロゴ">
                            </div>
                            <div class="w-3/5 lg:w-4/5 flex flex-col justify-between items-start space-y-4">
                                <p class="text-base font-Maru font-bold">2024.0.0</p>
                                <h3 class="font-Maru text-xl lg:text-2xl text-customBlue font-bold leading-normal"><a href="#">イマジントーークにインタビューを追加しました。</a></h3>
        
                                <p class="hidden lg:block text-sm lg:text-base font-Maru font-bold lg:leading-loose">この記事はサンプルです。この記事はサンプルです。イマジントーークにインタビューしました。今回は株式会社〇〇に勤務する〇〇酸の記事をご紹介します。</p>
                            </div>
                        </div>
                        <p class="lg:hidden text-sm lg:text-base font-Maru font-bold mt-4 leading-normal">この記事はサンプルです。この記事はサンプルです。イマジントーークにインタビューしました。今回は株式会社〇〇に勤務する〇〇酸の記事をご紹介します。</p>
                    </div>
    
                    <div class="info-content">
                        <div class="flex items-center justify-between gap-6 mt-5 lg:mt-10 pt-5 lg:pt-10 border-t-2 lg:border-t-4 border-t-customBeige">
                            <div class="w-2/5 lg:w-1/5 bg-customBeige rounded-lg p-4">
                                <img class="w-full" src="../assets/images/logo/logo.svg" alt="長崎イマジンのロゴ">
                            </div>
                            <div class="w-3/5 lg:w-4/5 flex flex-col justify-between items-start space-y-4">
                                <p class="text-base font-Maru font-bold">2024.0.0</p>
                                <h3 class="font-Maru text-xl lg:text-2xl text-customBlue font-bold leading-normal"><a href="#">イマジントーークにインタビューを追加しました。</a></h3>
        
                                <p class="hidden lg:block text-sm lg:text-base font-Maru font-bold lg:leading-loose">この記事はサンプルです。この記事はサンプルです。イマジントーークにインタビューしました。今回は株式会社〇〇に勤務する〇〇酸の記事をご紹介します。</p>
                            </div>
                        </div>
                        <p class="lg:hidden text-sm lg:text-base font-Maru font-bold mt-4 leading-normal">この記事はサンプルです。この記事はサンプルです。イマジントーークにインタビューしました。今回は株式会社〇〇に勤務する〇〇酸の記事をご紹介します。</p>
                    </div>
                </div>
    
                <div class="mt-5 lg:mt-10 flex justify-center items-center lg:block">
                    <div class="rounded-full border-4 border-customBeige inline-block">
                        <div class=" border-4 rounded-full border-white">
                            <a class="bg-customBeige px-10 lg:px-20 py-2 lg:py-4 rounded-full inline-block text-sm lg:text-base text-customBlue font-Maru font-bold" href="#">詳しくはこちら</a>
                        </div>
                    </div>
                </div>
            </div>
        </Inner>
    </BgWhite>
</template>

<style scoped>

</style>
