<script setup lang="ts">
import footerFood from '@/img/footer/footer_food.png'
import konkursLuchshihLogo from '@/img/header/KonkursLuchshih.svg'
</script>

<template>
  <footer id="contacts" class="relative overflow-hidden bg-[#17003f] px-4 pb-8 pt-24 sm:px-6 lg:px-10 lg:pt-36">
    <img
      class="pointer-events-none absolute left-1/2 -top-10 z-0 h-auto w-[min(1720px,116vw)] -translate-x-1/2 select-none object-contain"
      :src="footerFood"
      alt=""
      aria-hidden="true"
    />

    <div
      class="relative z-10 mx-auto grid max-w-[1680px] gap-8 rounded-[28px] border-2 border-[#7cff00] bg-[#4b3971]/70 px-7 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl md:grid-cols-[1fr_auto] md:px-10 lg:min-h-[278px] lg:px-12 lg:py-10"
    >
      <section class="flex max-w-[520px] flex-col justify-between gap-8 text-black">
        <div>
          <img
            class="mb-8 h-14 w-[164px] object-contain brightness-0"
            :src="konkursLuchshihLogo"
            alt="Конкурс лучших брендов гастроиндустрии Санкт-Петербурга"
          />

          <p class="max-w-[320px] text-[9px] font-semibold leading-[1.45]">
            Наименование организации<br />
            Фонд развития субъектов малого<br />
            и среднего предпринимательства<br />
            в Санкт-Петербурге
          </p>
        </div>

        <dl class="grid gap-2 text-[9px] font-medium leading-none">
          <div class="flex gap-2">
            <dt>ИНН</dt>
            <dd>70000000</dd>
          </div>
          <div class="flex gap-2">
            <dt>КПП</dt>
            <dd>70000000</dd>
          </div>
          <div class="flex gap-2">
            <dt>ОГРН</dt>
            <dd>70000000</dd>
          </div>
        </dl>
      </section>

      <section
        class="grid content-between gap-8 text-left text-[9px] font-medium leading-none text-white/85 md:min-w-[260px] md:text-right"
      >
        <dl class="grid gap-2">
          <div>
            <dt class="mb-3 font-bold text-white">Оператор</dt>
            <dd>ООО ЦРПИ</dd>
          </div>
          <div>
            <dt>ИНН</dt>
            <dd>7801341083</dd>
          </div>
          <div>
            <dt>КПП</dt>
            <dd>780101001</dd>
          </div>
          <div>
            <dt>ОГРН</dt>
            <dd>1177847379456</dd>
          </div>
        </dl>

        <nav class="grid gap-2" aria-label="Социальные сети фонда">
          <a class="transition hover:text-[#7cff00]" href="#" aria-label="Фонд в VK">
            Фонд в VK
          </a>
          <a class="transition hover:text-[#7cff00]" href="#" aria-label="Фонд в TG">
            Фонд в TG
          </a>
        </nav>
      </section>
    </div>
  </footer>
</template>
