<script setup lang="ts">
import LogoImage from '~/assets/images/logo.svg'
</script>

<template>
  <div class="head">
    <div class="header">
      <nav>
        <div class="menu">
          <ul>
            <li>Как добраться</li>
            <li>Чем заняться</li>
            <li>Забронировать номер</li>
          </ul>
        </div>
      </nav>
      <div class="logo">
        <span>
          <img class="logo" :src="LogoImage" alt="" />
        </span>
      </div>
      <div class="contact_info">
        <span>8 800 770 30 30</span>
        <a class="feedback_link" href="#">Заказать обратный звонок</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.head {
  top: 0;
  margin: 0 auto;
  width: 100%;
  position: sticky;
  z-index: 100;
  background: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  text-transform: uppercase;
}
.header {
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 15px;
}
.contact_info {
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
}
.feedback_link {
  background-color: #00360d;
  padding: 1rem;
  border-radius: 1.5rem;

  text-transform: uppercase;
  text-decoration: none;
  color: white;
  &:hover {
    color: darkgreen;
  }
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
ul {
  padding: 0px;
  list-style: none;
  display: flex;
  gap: 20px;
}
.logo {
  width: 200px;
}
</style>
