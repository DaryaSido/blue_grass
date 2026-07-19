<script setup lang="ts">
import entertainmentImg from '~/assets/images/entertainment.png'
import hikingImg from '~/assets/images/hiking.png'
import spaImg from '~/assets/images/spa.png'
import sportImg from '~/assets/images/sport.png'

const entertainmentItem = [
  {
    id: 1,
    title: 'Спортивные развлечения',
    link: '/sport',
    image: sportImg,
  },
  { id: 2, title: 'Развлекательные мероприятия', link: '/entertainment', image: entertainmentImg,
  },
  { id: 3, title: 'Пешие туры', link: '/hiking', image: hikingImg,
  },
  { id: 4, title: 'Спа', link: '/spa', image: spaImg,
  },
]
</script>

<template>
  <div class="enter_page">
    <CommonReservationForm />
    <div class="fun">
      <h1>Отдыхайте на курорте Синий луг</h1>
      <h2>Развлечения</h2>
      <div class="fun__description">
        <div>
          <span>Санаторий «Синий луг»</span> — это место, где отдых перестает быть скучным.
          Мы создали идеальную среду для тех, кто ищет баланс между активным движением, культурным досугом
          и полной релаксацией.
          Здесь каждый найдет занятие по душе:
          от захватывающих спортивных игр до умиротворяющих спа-процедур.
        </div>
      </div>
    </div>
    <div class="cards">
      <NuxtLink
        v-for="item in entertainmentItem"
        :key="item.id"
        :to="item.link"
        class="card"
      >
        <img
          :src="item.image"
          :alt="item.title"
        >
        <div class="card__overlay" />
        <div class="card__content">
          <span class="card__title">{{ item.title }}</span>
          <span class="card__link">Подробнее</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.enter_page {
  padding-top: 20px;
  padding-bottom: 50px;
  align-items: center;
  background-color: #d6d1ca;
}
.fun {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-bottom: 50px;

  &__description {
    width: 1140px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & span {
      font-weight: 700;
    }
  }
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #eaedf2;
  padding: 30px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  width: 300px;
  aspect-ratio: 1 / 1;
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: 2;
    transition: background 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 2px;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  &:hover &__overlay {
    background: rgba(0, 0, 0, 0.35);
  }

  &__content {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
  }

  &__title {
    color: white;
    font-size: 32px;
    font-weight: 400;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 24px;
    color: white;
    font-size: 14px;
    font-weight: 400;
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
a {
  text-decoration: none;
}
</style>
