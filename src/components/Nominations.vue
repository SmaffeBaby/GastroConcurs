<script setup lang="ts">
import ApplyButton from '@/components/ApplyButton.vue'

const nominations = [
  {
    title: 'Лучший кондитерский бренд',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Лучшая кофейня',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Лучший стрит-фуд',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Открытие года',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
  },
  {
    title: 'Молодой ресторатор',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
]
</script>

<template>
  <section id="nominations" class="bg-[#17003f] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
    <div class="mx-auto grid max-w-[1510px] gap-12 lg:grid-cols-[minmax(320px,420px)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
      <h2 class="text-[38px] font-black uppercase leading-none text-white sm:text-[48px] lg:text-[50px] xl:text-[54px]">
        Номинации
      </h2>

      <div class="grid min-w-0 lg:pt-8 xl:pt-10">
        <article
          v-for="nomination in nominations"
          :key="nomination.title"
          class="grid min-w-0 gap-5 border-b border-[#7cff00]/35 py-7 last:border-b-0 sm:grid-cols-[minmax(240px,320px)_1fr] lg:grid-cols-[minmax(280px,340px)_minmax(0,1fr)_230px] lg:items-center lg:gap-6 xl:grid-cols-[340px_minmax(230px,1fr)_270px] xl:gap-8"
        >
          <h3 class="max-w-[340px] text-[22px] font-black uppercase leading-[0.98] text-white sm:text-[26px] lg:text-[26px] xl:text-[28px]">
            {{ nomination.title }}
          </h3>

          <p class="min-w-0 max-w-[390px] text-[13px] font-medium leading-[1.55] text-white/55 sm:text-[15px] xl:text-[16px]">
            {{ nomination.description }}
          </p>

          <ApplyButton class="h-[64px] w-full text-[17px] sm:col-span-2 lg:col-span-1 lg:h-[66px] lg:text-[18px] xl:h-[70px] xl:text-[20px]" />
        </article>
      </div>
    </div>
  </section>
</template>
