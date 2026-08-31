<script setup lang="ts">
import { ref } from 'vue'
import entertainmentImg from '~/assets/images/entertainment.png'
import hikingImg from '~/assets/images/hiking.png'
import spaImg from '~/assets/images/spa.png'
import sportImg from '~/assets/images/sport.png'

const activeCard = ref<number | null>(null)
const trackRef = ref<HTMLElement | null>(null)

const VISIBLE_CARDS = 3

const entertainmentItem = [
  {
    id: 1,
    title: 'Спортивные развлечения',
    link: '/sport',
    img: sportImg,
    description:
      'Драйв и адреналин на любой сезон! Зимой — покоряйте склоны на лыжах или сноуборде с инструктором. Летом — сплавляйтесь на байдарках по горным рекам.',
  },
  {
    id: 2,
    title: 'Развлекательные мероприятия',
    link: '/entertainment',
    img: entertainmentImg,
    description:
      'Вечерами — живая музыка в ресторане. Днём — киносеансы в лобби с пледом и попкорном. Для детей — мастер-классы по лепке и рисованию.',
  },
  {
    id: 3,
    title: 'Пешие туры',
    link: '/hiking',
    img: hikingImg,
    description:
      'Исследуйте Приэльбрусье: от альпийских лугов до ледников. Для опытных — техническое восхождение на Эльбрус с акклиматизацией.',
  },
  {
    id: 4,
    title: 'Спа',
    link: '/spa',
    img: spaImg,
    description:
      'Бассейн с панорамным видом, жаркий хамам и русская баня с вениками. Массаж снимет напряжение, а обёртывания на основе горных трав подарят коже упругость.',
  },
]

function scrollByCards(direction: number) {
  if (!trackRef.value) return

  const viewportWidth = trackRef.value.clientWidth
  const scrollAmount = viewportWidth * direction

  trackRef.value.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="enter_page">
    <div class="fun">
      <h1>Отдыхайте на курорте Альпийские луга</h1>
      <h2>Развлечения</h2>
    </div>

    <div class="slider">
      <button class="slider__arrow slider__arrow--prev" @click="scrollByCards(-1)">‹</button>

      <div class="slider__viewport">
        <div ref="trackRef" class="slider__track">
          <div
            v-for="item in entertainmentItem"
            :key="item.id"
            class="slider__slide"
            @mouseenter="activeCard = item.id"
            @mouseleave="activeCard = null"
            @click="activeCard = activeCard === item.id ? null : item.id"
          >
            <div class="card">
              <img :src="item.img" :alt="item.title" />
              <div class="card__overlay" />
              <div class="card__content" :class="{ 'is-hidden': activeCard === item.id }">
                <span class="card__title">{{ item.title }}</span>
                <span class="card__link">Подробнее</span>
              </div>
              <div class="card__extra" :class="{ 'is-visible': activeCard === item.id }">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="slider__arrow slider__arrow--next" @click="scrollByCards(1)">›</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.enter_page {
  padding: 20px 0 50px;
}

.fun {
  text-align: center;
  margin-bottom: 30px;
}

.slider {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 1200px; // ← увеличили для 3 карточек
  margin: 0 auto;
  padding: 0 60px;

  &__viewport {
    overflow: hidden;
    border-radius: 20px;
    width: 100%;
  }

  &__track {
    display: flex;
    gap: 20px;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  &__slide {
    flex: 0 0 calc((100% - 40px) / 3); // ← 3 карточки, 2 gap по 20px = 40px
  }

  &__arrow {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 54, 13, 0.9);
    color: #ffffff;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(14, 116, 37, 0.9);
      transform: scale(1.1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  }
}

// ===== КАРТОЧКА =====
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  cursor: pointer;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 2;
    transition: background 0.3s ease;
  }

  &:hover &__overlay,
  &:has(.card__extra.is-visible) &__overlay {
    background: rgba(0, 0, 0, 0.7);
  }

  &__content {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    &.is-hidden {
      opacity: 0;
      transform: translateY(-20px);
      pointer-events: none;
    }
  }

  &__title {
    color: white;
    font-size: 24px; // ← чуть меньше для 3 карточек
    font-weight: 400;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &__extra {
    position: absolute;
    inset: 0;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;

    &.is-visible {
      opacity: 1;
      pointer-events: auto;
    }

    p {
      color: white;
      font-size: 13px; // ← чуть меньше
      line-height: 1.5;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px; // ← чуть меньше
    color: white;
    font-size: 13px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    background: transparent;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: white;
    }
  }
}
</style>
