<template>
  <div>
    <div class="room-header">
      <h2>Номера</h2>
      <button>Все</button>
      <button>Корпус 1</button>
      <button>Корпус 2</button>
      <button>Деревянные домики</button>
      <button>Место для кемпинга</button>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Room {
  id: number
  name: string
  description: string
  price: number
  image: string
  features: string[]
  maxGuests: number
}
defineProps<{
  room: Room
}>()

defineEmits<{
  book: [room: Room]
}>()
</script>

<style scoped></style>
