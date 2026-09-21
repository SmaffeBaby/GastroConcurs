<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import ApplyButton from '@/components/ApplyButton.vue'

const startDate = new Date('2026-10-22T00:00:00+03:00')
const endDateLabel = '22 октября 2026 - 3 ноября 2026'
const totalCountdownMs = 1000 * 60 * 60 * 24 * 45

const remainingMs = ref(Math.max(startDate.getTime() - Date.now(), 0))
let timerId: number | undefined

const countdown = computed(() => {
  const secondsTotal = Math.floor(remainingMs.value / 1000)
  const days = Math.floor(secondsTotal / 86400)
  const hours = Math.floor((secondsTotal % 86400) / 3600)
  const minutes = Math.floor((secondsTotal % 3600) / 60)
  const seconds = secondsTotal % 60

  return {
    days,
    hours,
    minutes,
    seconds,
  }
})

const progressPercent = computed(() => {
  const passed = totalCountdownMs - remainingMs.value
  return Math.min(Math.max((passed / totalCountdownMs) * 100, 0), 100)
})

function updateRemainingTime() {
  remainingMs.value = Math.max(startDate.getTime() - Date.now(), 0)
}

onMounted(() => {
  updateRemainingTime()
  timerId = window.setInterval(updateRemainingTime, 1000)
})

onBeforeUnmount(() => {
  if (timerId) {
    window.clearInterval(timerId)
  }
})
</script>

<template>
  <div class="relative z-10 mt-12 max-w-[520px] lg:mt-20">
    <article
      class="relative overflow-hidden rounded-[24px] border-[3px] border-[#7cff00] bg-[#2d175c]/72 px-7 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-sm sm:px-8 lg:min-h-[290px]"
    >
      <div
        class="pointer-events-none absolute -left-[220px] top-[82px] hidden h-[3px] w-[230px] -rotate-[156deg] bg-[#7cff00] lg:block"
        aria-hidden="true"
      />

      <h2 class="max-w-[260px] text-[23px] font-extrabold leading-[1.05] text-white sm:text-[28px]">
        Сроки проведения конкурса
      </h2>

      <p class="mt-16 max-w-[360px] text-[25px] font-extrabold leading-[1.05] text-white sm:text-[30px]">
        {{ endDateLabel }}
      </p>

      <p class="mt-5 text-[10px] font-medium text-white/55 sm:text-[11px]">
        До начала {{ countdown.days }} дней {{ countdown.hours }} часа {{ countdown.minutes }} минут
        {{ countdown.seconds }} секунды
      </p>

      <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
        <div
          class="h-full rounded-full bg-[#baff66] transition-[width] duration-500"
          :style="{ width: `${progressPercent}%` }"
        />
      </div>
    </article>

    <ApplyButton id="apply" class="mt-9 h-[62px] w-full rounded-[22px] text-[18px] sm:h-[68px] sm:text-[20px]" />
  </div>
</template>
