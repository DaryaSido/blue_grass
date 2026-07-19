<script setup lang="ts">
const hotels = [
  '1 корпус',
  '2 корпус',
  'деревянные домики',
]
</script>

<template>
  <div>
    <form action="">
      <h2>Бронирование путевок</h2>
      <fieldset>
        <label>Гостиница</label>
        <input
          id="hotel"
          type="text"
          placeholder="Выберите корпус"
          list="hotels"
        >
        <datalist id="hotels">
          <option
            v-for="hotel in hotels"
            :key="hotel"
            :value="hotel"
          />
        </datalist>
      </fieldset>
      <fieldset>
        <label>Дата заезда</label>
        <input type="text">
      </fieldset>
    </form>
  </div>
</template>

<style scoped lang="scss">
fieldset {
  display: flex;
  flex-direction: column;
}
</style>
