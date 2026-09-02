<template>
  <div class="slider-wrapper">
    <div class="slider-viewport">
      <div class="slider-track" :style="{ transform: `translateX(-${currentSlider * 100}%)` }">
        <div v-for="room in rooms" :key="room.id" class="room-descr">
          <div class="room-card">
            <div class="room-img">
              <img :src="room.img" :alt="room.title" />
            </div>

            <div
              class="description"
              :class="{ 'is-expanded': isExpanded(room.id) }"
              :style="{
                width: isExpanded(room.id) ? '55%' : '30%',
              }"
            >
              <div class="room-descr_title">
                {{ room.title }}
              </div>
              <div class="room-descr_info">
                {{ room.info }}
              </div>
              <template v-if="isExpanded(room.id)">
                <div class="room-descr_menu">
                  {{ room.description }}
                </div>
              </template>
              <div class="room-buttons">
                <div class="button" @click="toggleExpand(room.id)">Подробнее</div>
                <template v-if="isExpanded(room.id)">
                  <a class="button" href="#">{{ room.price }}</a>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-nav">
        <button class="nav-btn nav-btn--prev" @click="previousSlider">‹</button>
        <button class="nav-btn nav-btn--next" @click="nextSlider">›</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import standartImg from '~/assets/images/room_starndart.jpeg'
import comfortImg from '~/assets/images/room_comfort.jpeg'
import luxImg from '~/assets/images/room_lux.jpeg'
import glempImg from '~/assets/images/room_glemp.jpeg'
import { useSlider } from '~/composable/useSlider'

const rooms = [
  {
    id: 1,
    title: 'Стандартный номер',
    info: 'Лаконичный номер для комфортного размещения и спокойного сна.',
    description:
      'Оснащение: кровать, шкаф, ТВ, Wi-Fi, кондиционер, душевая кабина, туалет. Без балкона.',
    img: standartImg,
    price: 'от 3000 р',
  },
  {
    id: 2,
    title: 'Комфорт',
    info: 'Уютный номер с зоной отдыха и панорамными окнами, идеальный для семейного размещения.',
    description: 'Оснащение: кровать, шкаф, ТВ, Wi-Fi, диван. Без балкона.',
    img: comfortImg,
    price: 'от 5000 р',
  },
  {
    id: 3,
    title: 'Люкс',
    info: 'Эксклюзивный номер с выходом на балкон, где каждая деталь продумана для вашего превосходства.',
    description:
      'Оснащение: кровать, шкаф, ТВ, Wi-Fi, кондиционер, балкон, душевая кабина, ванная, туалет. ',
    img: luxImg,
    price: 'от 10000 р',
  },
  {
    id: 4,
    title: 'Глэмпинг',
    info: 'Атмосферный отдых на природе с базовым комфортом.',
    description:
      'Оснащение: кровать, кондиционер. Удобства (душ, туалет) — вне домика, на общей зоне. ',
    img: glempImg,
    price: 'от 2000 р',
  },
]

const { currentSlider, nextSlider, previousSlider } = useSlider(rooms)

const expandedMap = ref<Record<number, boolean>>({})

const isExpanded = (id: number) => {
  return !!expandedMap.value[id]
}

const toggleExpand = (id: number) => {
  expandedMap.value[id] = !expandedMap.value[id]
}

watch(currentSlider, () => {
  expandedMap.value = {}
})
</script>

<style lang="scss" scoped>
.slider-wrapper {
  position: relative;
  width: 100%;
}

.slider-viewport {
  overflow: hidden;
  width: 100%;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.room-descr {
  flex: 0 0 100%;
  min-width: 0;
}

.room-card {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.room-img {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.description {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30%;
  background-color: rgba(0, 54, 13, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  transition: width 0.4s ease;
  overflow: hidden;
  z-index: 2;
  color: white;
  mask-image: linear-gradient(to right, black 70%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, black 70%, transparent 100%);
}

.room-descr_title {
  font-size: 1.5rem;
  color: white;
}

.room-descr_info {
  font-size: 1rem;
  color: white;
}

.room-descr_menu {
  color: white;
  animation: fadeIn 0.3s ease;
}

.room-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.button {
  display: flex;
  border-radius: 4px;
  border: none;
  padding: 6px 12px;
  font-size: 16px;
  background: #4a3f35;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
  white-space: nowrap;

  &:hover {
    background: #5f5246;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slider-nav {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 12px;
  border-radius: 30px;
  backdrop-filter: blur(4px);
  z-index: 10;
}

.nav-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    transform: scale(1.05);
  }
}
</style>
