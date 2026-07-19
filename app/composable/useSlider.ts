import { computed, ref } from 'vue'

export interface sliderItem {
  id: number
  img: string
  title: string
}

export function useSlider(items: sliderItem[]) {
  const currentSlider = ref(0)
  const allSlider = computed(() => items.length)
  const nextSlider = () => {
    currentSlider.value = (currentSlider.value + 1) % allSlider.value
  }
  const previousSlider = () => {
    currentSlider.value = (currentSlider.value - 1 + allSlider.value) % allSlider.value
  }
  return {
    currentSlider,
    allSlider,
    nextSlider,
    previousSlider,
  }
}
