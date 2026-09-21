<script setup lang="ts">
import { ref } from 'vue'

import ApplyButton from '@/components/ApplyButton.vue'
import { useHeaderNavigation } from '@/composables/useHeaderNavigation'
import fondSubyektovLogo from '@/img/header/FondSubyektov.svg'
import komitetPoPromLogo from '@/img/header/KomitetPoProm.svg'
import konkursLuchshihLogo from '@/img/header/KonkursLuchshih.svg'

const { headerNavigation } = useHeaderNavigation()
const isMenuOpen = ref(false)
</script>

<template>
  <header class="relative z-20 px-4 pt-[14px] sm:px-6 lg:px-8 xl:pt-0">
    <div
      class="relative mx-auto flex max-w-[1836px] items-center gap-3 xl:grid xl:grid-cols-[minmax(150px,176px)_minmax(430px,560px)_minmax(360px,1fr)_minmax(180px,220px)] xl:gap-3 xl:pt-[14px] 2xl:grid-cols-[233px_675px_626px_278px] 2xl:gap-4"
    >
      <a
        href="#top"
        class="flex h-14 w-[164px] shrink-0 items-center xl:h-[60px] xl:w-full 2xl:h-20 2xl:w-[233px]"
        aria-label="GastroConcurs"
      >
        <img
          class="block h-full w-full object-contain"
          :src="konkursLuchshihLogo"
          alt="Конкурс лучших брендов гастроиндустрии Санкт-Петербурга"
        />
      </a>

      <div
        class="hidden h-14 min-w-0 shrink-0 items-center gap-4 rounded-[18px] border border-white/15 bg-white/[0.04] px-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur xl:flex xl:h-[60px] xl:w-full xl:gap-4 xl:px-5 2xl:h-[68px] 2xl:w-[675px] 2xl:gap-5 2xl:px-8"
      >
        <span class="shrink-0 text-[12px] font-extrabold uppercase leading-none tracking-wide xl:w-[124px] xl:text-[13px] 2xl:w-[150px] 2xl:text-[16px]">
          При<br />
          поддержке
        </span>
        <span class="h-8 w-px shrink-0 bg-white/15 xl:h-9 2xl:h-10" />
        <img
          class="h-7 w-[150px] min-w-0 shrink object-contain xl:h-7 xl:w-[150px] 2xl:h-8 2xl:w-[172px]"
          :src="fondSubyektovLogo"
          alt="Фонд развития субъектов малого и среднего предпринимательства в Санкт-Петербурге"
        />
        <img
          class="h-7 w-[178px] min-w-0 shrink object-contain xl:h-8 xl:w-[128px] 2xl:h-9 2xl:w-[138px]"
          :src="komitetPoPromLogo"
          alt="Комитет по промышленной политике, инновациям и торговле Санкт-Петербурга"
        />
      </div>

      <nav
        class="ml-auto hidden h-[60px] min-w-0 items-center justify-center rounded-[18px] border border-white/15 bg-white/5 px-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur xl:ml-0 xl:flex xl:w-full 2xl:h-[68px] 2xl:w-[626px] 2xl:px-6"
        aria-label="Основная навигация"
      >
        <a
          v-for="item in headerNavigation"
          :key="item.href"
          :href="item.href"
          class="whitespace-nowrap rounded-xl px-2.5 py-3 text-[9px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white 2xl:px-4"
        >
          {{ item.label }}
        </a>
      </nav>

      <ApplyButton
        class="ml-auto h-14 w-[140px] rounded-[18px] px-5 text-[13px] sm:w-[168px] lg:h-16 lg:w-[190px] lg:text-[15px] xl:absolute xl:right-0 xl:top-0 xl:ml-0 xl:h-[94px] xl:w-[220px] xl:rounded-t-none xl:rounded-b-[34px] xl:px-6 xl:text-[16px] 2xl:h-[104px] 2xl:w-[278px] 2xl:rounded-b-[40px] 2xl:text-[18px]"
      />

      <button
        class="inline-grid size-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white xl:hidden"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Открыть меню"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="grid gap-1.5">
          <span class="block h-0.5 w-5 rounded-full bg-current" />
          <span class="block h-0.5 w-5 rounded-full bg-current" />
          <span class="block h-0.5 w-5 rounded-full bg-current" />
        </span>
      </button>
    </div>

    <nav
      v-if="isMenuOpen"
      id="mobile-navigation"
      class="mx-auto mt-3 grid max-w-[1800px] gap-1 rounded-2xl border border-white/15 bg-[#28105b] p-2 text-white shadow-2xl lg:hidden"
      aria-label="Мобильная навигация"
    >
      <a
        v-for="item in headerNavigation"
        :key="item.href"
        :href="item.href"
        class="rounded-xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
        @click="isMenuOpen = false"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
