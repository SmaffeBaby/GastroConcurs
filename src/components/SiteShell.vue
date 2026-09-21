<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Nominations from '@/components/Nominations.vue'
import Organizers from '@/components/Organizers.vue'
import Prizes from '@/components/Prizes.vue'
import Questions from '@/components/Questions.vue'
</script>

<template>
  <div id="top" class="min-h-screen bg-[#17003f] text-white">
    <Header />

    <main class="px-4 pb-20 pt-12 sm:px-6 lg:px-10 lg:pt-16">

    </main>

    <Nominations />

    <Prizes />

    <Questions />

    <Organizers />

    <Footer />
  </div>
</template>
