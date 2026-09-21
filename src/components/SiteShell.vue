<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

import AboutContest from '@/components/AboutContest.vue'
import ApplyModal from '@/components/ApplyModal.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import Nominations from '@/components/Nominations.vue'
import Organizers from '@/components/Organizers.vue'
import Prizes from '@/components/Prizes.vue'
import Questions from '@/components/Questions.vue'
import Stages from '@/components/Stages.vue'

const isApplyModalOpen = ref(false)

function openApplyModal() {
  isApplyModalOpen.value = true
}

function closeApplyModal() {
  isApplyModalOpen.value = false
}

onMounted(() => {
  window.addEventListener('open-apply-modal', openApplyModal)
})

onBeforeUnmount(() => {
  window.removeEventListener('open-apply-modal', openApplyModal)
})
</script>

<template>
  <div id="top" class="min-h-screen bg-[#17003f] text-white">
    <Header />

    <main class="px-4 pb-5 pt-12 sm:px-6 lg:px-10 lg:pt-16">

    </main>

    <HeroSection />

    <Stages />

    <AboutContest />

    <Nominations />

    <Prizes />

    <Questions />

    <Organizers />

    <Footer />

    <ApplyModal :is-open="isApplyModalOpen" @close="closeApplyModal" />
  </div>
</template>
