<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="bg-customBeige wave-beige lg:py-20">
        <slot />
    </div>
</template>

<style scoped>
.wave-beige {
    position: relative;
}
.wave-beige::before {
    content: "";
    position: absolute;
    top: -10rem;
    left: 0;
    width: 100%;
    height: 10rem;
    background-image: url('../assets/images/background/wave_lightbeige.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
}
</style>
