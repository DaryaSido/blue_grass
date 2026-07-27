import { defineStore } from 'pinia'

export interface Room {
  adults: number
  children: number
  childAges: number[]
}

export const useGuestsStore = defineStore('guests', () => {
  const rooms = ref<Room[]>([{ adults: 1, children: 0, childAges: [] }])

  const totalAdults = computed(() => rooms.value.reduce((s, r) => s + r.adults, 0))
  const totalChildren = computed(() => rooms.value.reduce((s, r) => s + r.children, 0))

  const summary = computed(() => {
    let text = `${totalAdults.value} ${decline(totalAdults.value, 'взрослый', 'взрослых', 'взрослых')}`
    if (totalChildren.value > 0) {
      text += `, ${totalChildren.value} ${decline(totalChildren.value, 'ребёнок', 'ребёнка', 'детей')}`
    }
    return text
  })

  function setRooms(newRooms: Room[]) {
    rooms.value = JSON.parse(JSON.stringify(newRooms))
  }

  function decline(n: number, one: string, two: string, five: string): string {
    n = Math.abs(n) % 100
    const n1 = n % 10
    if (n > 10 && n < 20) return five
    if (n1 > 1 && n1 < 5) return two
    if (n1 === 1) return one
    return five
  }

  return {
    rooms,
    totalAdults,
    totalChildren,
    summary,
    setRooms,
  }
})
