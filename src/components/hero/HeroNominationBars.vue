<script setup lang="ts">
interface HeroNomination {
  title: string
  className: string
}

const heroNominations: HeroNomination[] = [
  {
    title: 'Лучший кондитерский бренд',
    className: 'bg-gradient-to-r from-[#b16ad9] via-[#f7c6ff]/80 to-[#6f7770]/80 text-black',
  },
  {
    title: 'Лучшая кофейня',
    className: 'bg-[#7cff00] text-black justify-end',
  },
  {
    title: 'Лучший стрит-фуд',
    className: 'bg-[#2bddea] text-black',
  },
  {
    title: 'Открытие года',
    className: 'bg-[#d58a54] text-black justify-end',
  },
  {
    title: 'Молодой ресторатор',
    className: 'bg-gradient-to-r from-[#fff537] via-[#eaf351] to-[#151126]/95 text-black',
  },
]
</script>

<template>
  <div class="relative z-10 mt-16 grid gap-2.5 lg:mt-20">
    <div
      v-for="nomination in heroNominations"
      :key="nomination.title"
      class="flex min-h-[56px] w-full items-center rounded-[18px] px-8 text-[25px] font-black uppercase leading-none shadow-[0_18px_42px_rgba(0,0,0,0.18)] sm:text-[34px] lg:min-h-[66px] lg:text-[39px]"
      :class="nomination.className"
    >
      {{ nomination.title }}
    </div>
  </div>
</template>
