<script setup>
import { scrollToSection, scrollToSectionSP  } from '../assets/js/ScrollLink.js';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuOpen = ref(false);
const closeMenu = () => {
    isMenuOpen.value = false;
}

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const showTopButton = ref(false);
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
const handleScroll = () => {
    if (window.scrollY > 3000) {
        showTopButton.value = true;
    } else {
        showTopButton.value = false;
    }
};
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>

<div class="fixed top-0 left-0 w-full flex justify-between items-center px-4 lg:px-12 py-2 lg:py-4 z-50">
    <nav class="bg-customBeige flex justify-center items-center pl-2 pr-6 py-2 rounded-full shadow-lg">
        <div class="w-auto h-auto">
            <a href="#"><img class="w-40 lg:w-80 h-auto" src="../assets/images/logo/logo_yoko.svg" alt="長崎IMAGINE"></a>
        </div>
        <ul class="hidden lg:flex text-base font-bold text-customBlue font-Maru ml-6">
            <li class="ml-6"><a href="#about" @click.prevent="scrollToSection('about')">長崎イマジンについて</a></li>
            <li class="ml-6"><a href="#talk" @click.prevent="scrollToSection('talk')">イマジントーーク！</a></li>
            <li class="ml-6"><a href="#special" @click.prevent="scrollToSection('special')">特集</a></li>
            <li class="ml-6"><a href="#info" @click.prevent="scrollToSection('info')">最新情報</a></li>
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

    <div class="lg:hidden w-12 h-12 bg-customBeige py-3 px-2 rounded-full shadow-lg relative" @click="isMenuOpen = !isMenuOpen">
        <div class="w-full h-full flex flex-col justify-between items-center">
            <span class="block w-full h-[3px] bg-customBlue"></span>
            <span class="block w-full h-[3px] bg-customBlue"></span>
            <span class="block w-full h-[3px] bg-customBlue"></span>
        </div>
    </div>
</div>
<div v-if="isMenuOpen" class="fixed top-0 right-0 w-2/3 h-full bg-customBrown z-50 shadow-lg flex flex-col p-6 transition-all duration-200">
    <div class="flex justify-end">
        <button @click="closeMenu" class="text-customBlue text-3xl font-bold">&times;</button>
    </div>
    <ul class="text-base text-customBlue font-Maru space-y-2 mt-6">
        <li class="pt-2 border-dotted border-t-2 border-customBlue" ><a href="#about" @click="closeMenu" @click.prevent="scrollToSectionSP('about')">長崎イマジンについて</a></li>
        <li class="pt-2 border-dotted border-t-2 border-customBlue" ><a href="#talk" @click="closeMenu" @click.prevent="scrollToSectionSP('talk')">イマジントーーク！</a></li>
        <li class="pt-2 border-dotted border-t-2 border-customBlue">
            <a href="#special" @click.prevent="toggleDropdown">特集</a>
            <transition 
                enter-active-class="transition-opacity duration-500 ease"
                leave-active-class="transition-opacity duration-500 ease"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ul v-if="isDropdownOpen" class="ml-4 mt-2 space-y-2">
                    <li><a href="#imazine" @click="closeMenu" @click.prevent="scrollToSectionSP('imazine')">長崎今人 ながさき昭和100年史</a></li>
                    <li><a href="#amafe" @click="closeMenu" @click.prevent="scrollToSectionSP('amafe')">アマフェッショナル散策の流儀</a></li>
                    <li><a href="#himajin" @click="closeMenu" @click.prevent="scrollToSectionSP('himajin')">長崎ひまじん</a></li>
                    <li><a href="#runjin" @click="closeMenu" @click.prevent="scrollToSectionSP('runjin')">長崎今走る人イマRUNジン</a></li>
                </ul>
            </transition>
        </li>
        <li class="py-2 border-dotted border-t-2 border-b-2 border-customBlue" ><a href="#info" @click="closeMenu" @click.prevent="scrollToSectionSP('info')">最新情報</a></li>
    </ul>
</div>

<div v-if="showTopButton" class="pageTop fixed bottom-4 right-4 z-50 cursor-pointer" @click="scrollToTop">
    <div class="bg-customBeige rounded-full lg:p-4 p-3">
        <img class="w-8 h-8 lg:w-10 lg:h-10" src="../assets/images/button/page-top.png" alt="ページトップ" />
    </div>
</div>
</template>

<style>
</style>
