<script setup lang="ts">

</script>

<template>
  <div>
    <div class="banner">
      <div class="banner__header">
        Санаторий
        <span>Синий луг</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  background-image: url('~/assets/images/banner_background.jpeg');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__header {
    display: flex;
    flex-direction: column;
    font-size: 70px;
    color: #a4c4ff;
    text-align: center;
    gap: 50px;

    & span {
      color: white;
      font-size: 100px;
    }
  }
}
</style>
