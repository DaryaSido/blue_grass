<template>
  <Teleport to="body">
    <div v-if="modelValue" class="overlay" @click.self="close">
      <div class="modal">
        <h3>Количество гостей</h3>

        <div class="room" v-for="(room, roomIndex) in localRooms" :key="roomIndex">
          <div class="room__header">
            <div class="room__title">НОМЕР {{ roomIndex + 1 }}</div>
            <button
              v-if="roomIndex > 0"
              class="room__delete"
              @click.prevent="removeRoom(roomIndex)"
            >
              Удалить
            </button>
          </div>

          <div class="guests">
            <div class="guests__group">
              <div class="guests__label">Взрослые</div>
              <div class="counter">
                <button class="counter-btn" @click.prevent="decrement(roomIndex, 'adults')">
                  −
                </button>
                <span class="counter-value">{{ room.adults }}</span>
                <button class="counter-btn" @click.prevent="increment(roomIndex, 'adults')">
                  +
                </button>
              </div>
            </div>
            <div class="guests__group">
              <div class="guests__label">Дети младше 18 лет</div>
              <div class="counter">
                <button class="counter-btn" @click.prevent="decrement(roomIndex, 'children')">
                  −
                </button>
                <span class="counter-value">{{ room.children }}</span>
                <button class="counter-btn" @click.prevent="increment(roomIndex, 'children')">
                  +
                </button>
              </div>
            </div>
          </div>

          <div v-for="(_, childIndex) in room.children" :key="childIndex" class="age-row">
            <div class="age-label">Возраст {{ childIndex + 1 }} ребёнка</div>
            <select v-model="room.childAges[childIndex]" class="age-select">
              <option v-for="age in ageOptions" :key="age.value" :value="age.value">
                {{ age.label }}
              </option>
            </select>
          </div>
        </div>

        <div class="actions">
          <button class="btn-add" @click.prevent="addRoom">+ Добавить ещё номер</button>
          <button class="btn-go" @click.prevent="onDone">Готово</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useGuestsStore, type Room } from '~/stores/guests'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const store = useGuestsStore()

// Локальная копия для редактирования в модалке
const localRooms = ref<Room[]>(JSON.parse(JSON.stringify(store.rooms)))

// При открытии — копируем из стора
watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      localRooms.value = JSON.parse(JSON.stringify(store.rooms))
    }
  }
)

const increment = (roomIndex: number, type: 'adults' | 'children') => {
  const room = localRooms.value[roomIndex]
  if (!room) return
  if (type === 'adults') {
    room.adults++
  } else {
    room.children++
    room.childAges.push(0)
  }
}

const decrement = (roomIndex: number, type: 'adults' | 'children') => {
  const room = localRooms.value[roomIndex]
  if (!room) return
  if (type === 'adults') {
    if (room.adults > 1) room.adults--
  } else {
    if (room.children > 0) {
      room.children--
      room.childAges.pop()
    }
  }
}

const addRoom = () => {
  localRooms.value.push({ adults: 2, children: 0, childAges: [] })
}

const removeRoom = (index: number) => {
  localRooms.value.splice(index, 1)
}

const onDone = () => {
  store.setRooms(localRooms.value)
  close()
}

const close = () => {
  emit('update:modelValue', false)
}

const ageOptions = [
  { value: 0, label: 'до 1 года' },
  { value: 1, label: '1 год' },
  { value: 2, label: '2 года' },
  { value: 3, label: '3 года' },
  { value: 4, label: '4 года' },
  { value: 5, label: '5 лет' },
  { value: 6, label: '6 лет' },
  { value: 7, label: '7 лет' },
  { value: 8, label: '8 лет' },
  { value: 9, label: '9 лет' },
  { value: 10, label: '10 лет' },
  { value: 11, label: '11 лет' },
  { value: 12, label: '12 лет' },
  { value: 13, label: '13 лет' },
  { value: 14, label: '14 лет' },
  { value: 15, label: '15 лет' },
  { value: 16, label: '16 лет' },
  { value: 17, label: '17 лет' },
]
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
  z-index: 1000;
}

.modal {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 440px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

h3 {
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
}

.room {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;

  &:last-of-type {
    border-bottom: none;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  &__title {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &__delete {
    background: none;
    border: none;
    cursor: pointer;
    color: #999;
    font-size: 13px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;

    &:hover {
      color: #e53935;
      background: #ffebee;
    }
  }
}

.guests {
  display: flex;
  gap: 16px;

  &__group {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__label {
    font-size: 14px;
    color: #666;
  }
}

.counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px;

  &-btn {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 6px;
    background: #f0f0f0;
    color: #333;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    user-select: none;

    &:hover {
      background: #e0e0e0;
    }
  }

  &-value {
    font-size: 20px;
    font-weight: 500;
    color: #333;
    min-width: 36px;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }
}

.age-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.age-label {
  font-size: 14px;
  color: #666;
}

.age-select {
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  color: #333;
  font-size: 15px;
  min-width: 160px;
  cursor: pointer;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
}

.btn-add {
  flex: 1;
  padding: 14px 16px;
  border: none;
  border-radius: 8px;
  background: #f0f0f0;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #e0e0e0;
  }
}

.btn-go {
  flex: 1;
  padding: 14px 16px;
  border: none;
  border-radius: 8px;
  background: #4a3f35;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.85;
  }
}
</style>
