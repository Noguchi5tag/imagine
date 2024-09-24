<script setup>
import { ref } from 'vue'

import Header from './Header.vue'


</script>

<template>
    <div>
        <Header />
        <div class="w-full">
            <img class="hidden lg:block lg:w-full" src="../assets/images/slide/slidepc.jpg" alt="トップビュー">
            <img class="lg:hidden w-full" src="../assets/images/slide/slidesp.jpg" alt="トップビュー">
        </div>
    </div>
</template>

<style scoped>

</style>
