<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="bg-customBrown wave-beige lg:pb-20">
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
    top: -22rem;
    left: 0;
    width: 100%;
    height: 22rem;
    background-image: url('../assets/images/background/wave_darkbeige.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
