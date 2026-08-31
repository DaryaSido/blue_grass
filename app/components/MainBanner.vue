<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="main-banner">
      <CommonReservationForm class="main-banner__form" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  position: relative;
}
.main-banner {
  background-image: url('~/assets/images/banner_background.jpeg');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>
