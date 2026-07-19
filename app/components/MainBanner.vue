<template>
    <div class="banner-slider">
        <div class="slider">
            <div class="slides">
                <div class="slides" :style="{transform: `translateX(-${currentSlide * 100}%)` }"  >

    <div class="slide"
    v-for="item in sliderItem"
    :key="item.id"
    >
<img :src="item.img" alt="item.title">
        </div>
        </div>
         <div class="nav-btn">
    <button class="prev-btn" @click="previousSlide">‹</button>
    <button class="next-btn" @click="nextSlide">›</button>
    </div>
        </div>
    </div>
    
    </div>
</template>

<script setup lang="ts">
import bannerSlide1 from '~/assets/images/banner.jpg';
import bannerSlide2 from '~/assets/images/banner_2.jpg';
import bannerSlide3 from '~/assets/images/banner_3.jpg';
const sliderItem = [
    { id: 1,
        img: bannerSlide1,
        title: 'Первый слайд'
    },
      { id: 2,
        img: bannerSlide2,
        title: 'Второй слайд'
    },
       { id: 3,
        img: bannerSlide3,
        title: 'Третий слайд'
    }
]
const currentSlide = ref(0);
const allSlider = sliderItem.length;
const nextSlide =()=> {
     currentSlide.value = (currentSlide.value +1) % allSlider
}
const previousSlide =() => {
    currentSlide.value = (currentSlide.value - 1 + allSlider) % allSlider
}

</script>

<style scoped>
.banner-slider {
    width: 100%;
    position: relative;
}
.banner {
    display: flex;
    margin: 0 auto;
    box-sizing: border-box;
    align-items: center;
    align-content: center;
     border-radius: 20px;
}
.slider {
   
     position: relative;
     overflow: hidden;
     border-radius: 20px;

}
.slides {
      display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}
.slide {
 
    flex: 0 0 100%;
    img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 20px;
        }
}
.nav-btn {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
}
.prev-btn, .next-btn {
    /* height: 40px; */
    width: 60px;
    pointer-events: auto;
    background: rgb(255, 255, 255, 0.5);
    border: none;
    border-radius: 40px;
    padding: 15px 20px;
    font-size: 20px;
    color: rgb(69, 83, 109);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)
}


</style>