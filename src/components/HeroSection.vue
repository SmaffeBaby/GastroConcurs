<script setup lang="ts">
import HeroContestInfo from '@/components/hero/HeroContestInfo.vue'
import HeroNominationBars from '@/components/hero/HeroNominationBars.vue'
import HeroVisual from '@/components/hero/HeroVisual.vue'
</script>

<template>
  <section id="hero" class="relative isolate overflow-hidden bg-[#17003f] px-4 pb-16 pt-4 sm:px-6 sm:pt-6 lg:px-10 lg:pb-20 lg:pt-8">
    <HeroVisual />

    <div class="relative z-10 mx-auto max-w-[1680px]">
      <h1
        class="max-w-[1180px] text-[34px] font-black uppercase leading-[1.12] text-white sm:text-[50px] lg:text-[56px] xl:text-[60px]"
      >
        Конкурс ЛУЧШИХ брендов ГАСТРОИНДУСТРИИ Санкт-Петербурга
      </h1>

      <p class="mt-7 text-[78px] font-black leading-none text-white sm:text-[104px] lg:text-[116px]">
        2026
      </p>

      <HeroContestInfo />
      <HeroNominationBars />
    </div>
  </section>
</template>
