<script setup lang="ts">
const prizeItems = [
  'Сюжет о бренде на одном из ведущих телеканалов Санкт-Петербурга',
  'Упоминание бренда в социальных сетях профильного блогера и/или крупном тематическом паблике',
  'Настройка и ведение рекламной кампании в сети Интернет',
  'Подготовка и размещение рекламного ролика на российском онлайн-сервисе для хостинга и просмотра видео',
]
</script>

<template>
  <section id="prizes" class="bg-[#17003f] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
    <div class="mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[460px_1fr] lg:gap-20">
      <h2 class="text-[42px] font-black uppercase leading-none text-white sm:text-6xl lg:text-[58px]">
        Призы
      </h2>

      <article
        class="rounded-[30px] border-[3px] border-[#7cff00] bg-[#2d175c]/90 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:px-8 lg:min-h-[430px] lg:px-10 lg:py-10"
      >
        <h3 class="mb-7 text-[30px] font-black uppercase leading-none text-white sm:text-[38px] lg:text-[40px]">
          1 место
        </h3>

        <ul class="grid gap-3">
          <li
            v-for="item in prizeItems"
            :key="item"
            class="rounded-[18px] bg-white/10 px-6 py-5 text-[14px] font-medium leading-[1.45] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-7 sm:text-[16px] lg:min-h-[72px] lg:px-8"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
