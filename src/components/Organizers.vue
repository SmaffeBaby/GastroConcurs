<script setup lang="ts">
import fondSubyektovLogo from '@/img/header/FondSubyektov.svg'
import komitetPoPromLogo from '@/img/header/KomitetPoProm.svg'
</script>

<template>
  <section id="organizers" class="bg-[#17003f] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
    <div class="mx-auto max-w-[1680px]">
      <h2 class="text-center text-[40px] font-black uppercase leading-none text-white sm:text-6xl lg:text-[64px]">
        Организаторы
      </h2>

      <div class="mt-20 grid gap-6 lg:grid-cols-2 lg:gap-7">
        <article
          class="flex min-h-[190px] items-center rounded-[32px] border-[3px] border-[#7cff00] bg-[#2d175c]/86 px-8 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:px-10 lg:px-12"
        >
          <img
            class="h-[94px] w-full max-w-[590px] object-contain object-left sm:h-[108px] lg:h-[118px]"
            :src="fondSubyektovLogo"
            alt="Фонд развития субъектов малого и среднего предпринимательства в Санкт-Петербурге"
          />
        </article>

        <article
          class="flex min-h-[190px] items-center rounded-[32px] border-[3px] border-[#7cff00] bg-[#2d175c]/86 px-8 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:px-10 lg:px-12"
        >
          <img
            class="h-[104px] w-full max-w-[650px] object-contain object-left sm:h-[118px] lg:h-[132px]"
            :src="komitetPoPromLogo"
            alt="Комитет по промышленной политике, инновациям и торговле Санкт-Петербурга"
          />
        </article>
      </div>
    </div>
  </section>
</template>
