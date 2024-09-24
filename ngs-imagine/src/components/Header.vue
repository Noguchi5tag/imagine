<script setup>
import { ref } from 'vue'
import  {  Slide  }  from  'vue3-burger-menu'   // 使用したい CSS トランジションをインポートします。この場合は `Slide` を使用します。

const isOpen = ref(false)
</script>

<template>

<div class="fixed top-0 left-0 w-full flex justify-between items-center px-4 lg:px-12 py-2 lg:py-4 z-50">
    <nav class="bg-customBeige flex justify-center items-center pl-2 pr-6 py-2 rounded-full shadow-lg">
        <div class="w-auto h-auto">
            <img class="w-40 lg:w-80 h-auto" src="../assets/images/logo/logo_yoko.svg" alt="長崎IMAGINE">
        </div>
        <ul class="hidden lg:flex text-base text-customBlue font-Maru ml-6">
            <li class="ml-6"><a href="#">長崎イマジンについて</a></li>
            <li class="ml-6"><a href="#">イマジントーーク！</a></li>
            <li class="ml-6"><a href="#">最新情報</a></li>
            <li class="ml-6"><a href="#">特集</a></li> <!-- ドロワーメニュー -->
        </ul>
    </nav>
    <div class="hidden lg:flex">
        <div class="w-12 h-12 ml-2 bg-customBeige p-2 rounded-full shadow-lg">
            <a href="#"><img class="w-full" src="../assets/images/sns/facebook.png" alt="Facebookアイコン"></a>
        </div>
        <div class="w-12 h-12 ml-2 bg-customBeige p-2 rounded-full shadow-lg">
            <a href="#"><img src="../assets/images/sns/instagram.png" alt="Instagramアイコン"></a>
        </div>
        <div class="w-12 h-12 ml-2 bg-customBeige p-3 rounded-full shadow-lg">
            <a href="#"><img src="../assets/images/sns/x.svg" alt="Xアイコン"></a>
        </div>
    </div>
    <div class="lg:hidden w-12 h-12 ml-2 bg-customBeige p-2 rounded-full relative">
        <!-- ここにハンバーガーメニュー -->
        <div class="absolute top-10 left-0">
            <Slide right>
                <a id="home" href="#talk">
                    <span>Home</span>
                </a>
            </Slide>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>
