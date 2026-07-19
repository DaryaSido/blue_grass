<template>
    <div class="main">
<MainHeader/>
<div class="container"><slot/></div>

<MainFooter/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
      min-height: 100vh;
      height:100%;
  padding: 20px;
}
.container {
    flex: 1;
     width: 100%;
}


</style>