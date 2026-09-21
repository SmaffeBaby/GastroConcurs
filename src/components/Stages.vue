<script setup lang="ts">
interface StageItem {
  format: string
  date: string
  title: string
}

const stages: StageItem[] = [
  {
    format: 'онлайн',
    date: '14 сентября 2025 – 21 октября 2025',
    title: 'Сбор заявок',
  },
  {
    format: 'онлайн',
    date: '26 октября 2025 – 3 ноября 2025',
    title: 'Открытое голосование на официальном сайте конкурса',
  },
  {
    format: 'онлайн',
    date: '26 октября 2025 – 3 ноября 2025',
    title: 'Голосование конкурсной комиссии',
  },
  {
    format: 'очно',
    date: '11 ноября 2025',
    title: 'Объявление победителей',
  },
]
</script>

<template>
  <section id="stages" class="bg-[#17003f] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
    <div class="mx-auto grid max-w-[1510px] gap-12 lg:grid-cols-[minmax(320px,420px)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
      <h2 class="text-[38px] font-black uppercase leading-none text-white sm:text-[48px] lg:text-[50px] xl:text-[54px]">
        Этапы
      </h2>

      <div class="grid min-w-0">
        <article
          v-for="stage in stages"
          :key="`${stage.date}-${stage.title}`"
          class="grid gap-5 border-b border-[#7cff00]/35 py-6 first:pt-0 sm:grid-cols-[150px_1fr] lg:grid-cols-[150px_280px_minmax(240px,1fr)] lg:items-start lg:gap-7"
        >
          <span
            class="inline-flex h-10 w-[118px] items-center justify-center rounded-full border-[3px] border-[#7cff00] text-[13px] font-extrabold uppercase leading-none text-white"
            :class="{ 'text-[#7cff00]': stage.format === 'очно' }"
          >
            {{ stage.format }}
          </span>

          <time class="text-[13px] font-medium leading-[1.4] text-white/55 sm:text-[14px]">
            {{ stage.date }}
          </time>

          <h3 class="max-w-[350px] text-[22px] font-black uppercase leading-[0.98] text-white sm:col-span-2 sm:text-[26px] lg:col-span-1 lg:text-[25px] xl:text-[28px]">
            {{ stage.title }}
          </h3>
        </article>
      </div>
    </div>
  </section>
</template>
