<script setup lang="ts">
import foodMain from '@/img/hero/food_main.png'
</script>

<template>
  <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <img
      class="absolute right-[-80px] top-[110px] h-auto w-[76vw] max-w-[1020px] select-none object-contain lg:right-[-36px] lg:top-[88px] xl:right-[20px] xl:w-[66vw]"
      :src="foodMain"
      alt=""
    />
  </div>
</template>
