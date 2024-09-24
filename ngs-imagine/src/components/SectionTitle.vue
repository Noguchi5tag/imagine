<script setup>
import { ref } from 'vue'

defineProps({
    title: String,
    title_sub: String,
})
</script>

<template>
    <div class="pb-5 lg:pb-10">
        <div class="compass-image ml-8 lg:ml-0">
            <p class="font-Maru text-base lg:text-3xl text-customBlue font-bold">{{ title_sub }}</p>
            <h1 class="font-Maru text-2xl lg:text-6xl text-customBlue font-bold pt-2 tracking-widest">{{ title }}</h1>
        </div>
    </div>
</template>

<style>
.compass-image {
    position: relative;
    z-index: 1;
}

.compass-image::before {
    content: '';
    position: absolute;
    left: -3rem;
    top: 50%;
    transform: translateY(-50%);
    width: 5rem;
    height: 5rem;
    background-image: url('../assets/images/logo/compass.svg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
}
@media (min-width: 1024px) {
    .compass-image::before {
        left: -6rem;
        top: 50%;
        width: 10rem;
        height: 10rem;
    }
}
</style>
