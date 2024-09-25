<script setup>
import { ref } from 'vue'
import { Slide } from 'vue3-burger-menu'

const isMenuOpen = ref(false);

const closeMenu = () => {
    isMenuOpen.value = false;
}
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
            <li class="ml-6"><a href="#">特集</a></li>
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

    <div class="lg:hidden w-10 h-10 bg-customBeige py-3 px-2 rounded-full shadow-lg relative" @click="isMenuOpen = !isMenuOpen">
        <div class="w-full h-full flex flex-col justify-between items-center">
            <span class="block w-full h-[2px] bg-customBlue"></span>
            <span class="block w-full h-[2px] bg-customBlue"></span>
            <span class="block w-full h-[2px] bg-customBlue"></span>
        </div>
    </div>
</div>
<div v-if="isMenuOpen" class="fixed top-0 right-0 w-2/3 h-full bg-customBeige z-50 shadow-lg flex flex-col p-6 transition-all duration-200">
    <div class="flex justify-end">
        <button @click="closeMenu" class="text-customBlue text-3xl font-bold">&times;</button>
    </div>
    <ul class="text-base text-customBlue font-Maru space-y-2 mt-6">
        <li><a href="#" @click="closeMenu">長崎イマジンについて</a></li>
        <li><a href="#" @click="closeMenu">イマジントーーク！</a></li>
        <li><a href="#" @click="closeMenu">最新情報</a></li>
        <li><a href="#" @click="closeMenu">特集</a></li>
    </ul>
</div>
</template>

<style>

</style>
