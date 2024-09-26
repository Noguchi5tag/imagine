<script setup>
import Header from './Header.vue'
import { ref, onMounted } from 'vue';

// Swiperの初期化
onMounted(() => {
    if (window.innerWidth >= 1024) {
        new Swiper('.swiper1', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4.5,
            spaceBetween: 0,
            speed: 6000,
            allowTouchMove: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
        });
        new Swiper('.swiper2', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4.5,
            spaceBetween: 0,
            speed: 6000,
            allowTouchMove: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
            },
        });
    }

    if (window.innerWidth <= 1023) {
    new Swiper('.swiper1', {
        direction: 'vertical',
        loop: true,
        breakpoints: {
            1024: {
            slidesPerView: 6.5,
            },
            0: {
            slidesPerView: 3,
            },
        },
        allowTouchMove: true,
        speed: 6000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
    
    new Swiper('.swiper2', {
        direction: 'vertical',
        loop: true,
        breakpoints: {
            1024: {
            slidesPerView: 6.5,
            },
            0: {
            slidesPerView: 3,
            },
        },
        speed: 6000,
        allowTouchMove: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
    });
    }
});
</script>

<template>
    <div>
        <Header />

        <div class="w-full">
            <div class="hidden lg:block header-content">
                <div class="swiper swiper1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (2).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (3).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (4).jpg" alt="" />
                        </div>
                            <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (5).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (6).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (7).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (8).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (9).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (10).jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="swiper swiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (11).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (12).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (13).jpg" alt="" />
                        </div>
                            <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (14).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (15).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (16).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (17).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (18).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (19).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (20).jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block header-content_sp">
                <div class="swiper swiper1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (2).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (3).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (4).jpg" alt="" />
                        </div>
                            <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (5).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (6).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (7).jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="swiper swiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (8).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (9).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (10).jpg" alt="" />
                        </div>
                            <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (11).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (12).jpg" alt="" />
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/images/carousel/carousel (13).jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.header-content .swiper {
    height: 100%;
    width: 100%;
}

.header-content .swiper-wrapper {
    transition-timing-function: linear;
}

.header-content .swiper-slide img {
    width: 400px;
    height: auto;
    object-fit: cover;
}

/* 1024px以下 */
.header-content_sp{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
}
@media (min-width: 1024px) {
    .header-content_sp {
        display: none;
    }
}
.header-content_sp .swiper{
    height: 100%;
    height: 100%;
}
.header-content_sp .swiper.swiper1{
    width: 50%;
    left: 0;
    top: 0;
}
.header-content_sp .swiper.swiper2{
    width: 50%;
    right: 0;
    top: 0;
}
.header-content_sp .swiper-wrapper {
    transition-timing-function: linear;
}
.header-content_sp .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
