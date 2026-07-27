<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="main">
      <MainHeader />
      <!-- <div class="container"> -->
      <div>
        <slot />
      </div>

      <MainFooter />
    </div>
  </div>
</template>

<style scoped>
.main {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  /* padding: 20px; */
}
.container {
  flex: 1;
  /* max-width: 1900px; */
  margin: 0 auto;
  /* padding: 0 10px; */
}
</style>
