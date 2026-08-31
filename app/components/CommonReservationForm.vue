<script setup lang="ts">
import { ref, computed } from 'vue'
import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker'
import { useGuestsStore } from '~/stores/guests'
import CommonGuestCounter from '~/components/CommonGuestCounter.vue'

const today = computed(() => new Date())
const checkIn = ref(null)
const checkOut = ref(null)
const hotels = [
  { value: 0, label: '1 корпус' },
  { value: 2, label: '2 корпус' },
  { value: 3, label: 'деревянные домики' },
  { value: 4, label: 'место для кемпинга' },
]
const store = useGuestsStore()
const showGuestCounter = ref(false)
</script>

<template>
  <div>
    <form>
      <h2>Бронирование путевок</h2>
      <div class="reservation">
        <fieldset>
          <label>Гостиница</label>
          <div class="field-wrapper">
            <select class="field-input">
              <option value="" disabled selected>Выберите корпус</option>
              <option v-for="hotel in hotels" :key="hotel.value" :value="hotel.value">
                {{ hotel.label }}
              </option>
            </select>
            <svg
              class="field-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </fieldset>
        <fieldset>
          <label>Дата заезда</label>
          <VueDatePicker
            v-model="checkIn"
            placeholder="ДД.ММ.ГГГГ"
            :enable-time-picker="false"
            :format="'dd.MM.yyyy'"
            :min-date="today"
          />
        </fieldset>
        <fieldset>
          <label>Дата выезда</label>
          <VueDatePicker
            v-model="checkOut"
            placeholder="ДД.ММ.ГГГГ"
            :enable-time-picker="false"
            :format="'dd.MM.yyyy'"
            :min-date="checkIn || today"
          />
        </fieldset>
        <fieldset>
          <label>Гости</label>
          <div class="field-card" @click="showGuestCounter = true">
            <div class="field-value">{{ store.summary }}</div>
            <svg class="field-icon person" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </div>
          <CommonGuestCounter v-model="showGuestCounter" />
        </fieldset>
        <button class="btn-submit" @click.prevent="">Забронировать</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
form {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 30px;
}

h2 {
  margin-bottom: 20px;
}

.reservation {
  display: flex;
  gap: 16px;
  align-items: flex-end;
}

fieldset {
  flex: 1;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-size: 13px;
  color: #666;
}

// Общие стили для всех полей
.field-input,
.field-card,
:deep(.dp__input) {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 6px 30px 6px 12px;
  line-height: calc(var(--dp-font-size) * 1.5);
  font-size: 16px;
  color: #333;
  background: #fff;
  box-sizing: border-box;
}

// Селект гостиницы
.field-wrapper {
  position: relative;
}

select.field-input {
  appearance: none;
  cursor: pointer;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: #888;
  }
}

.field-arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #888;
  pointer-events: none;
}

// Карточка гостей
.field-card {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

.field-value {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding-right: 32px;
}

.field-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #888;
}
.btn-submit {
  display: flex;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 6px 12px 6px 12px;
  line-height: calc(var(--dp-font-size) * 1.5);
  font-size: 16px;
  background: #4a3f35;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
}
</style>
