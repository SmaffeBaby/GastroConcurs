<script setup lang="ts">
import SiteShell from '@/components/SiteShell.vue'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta({
  title: 'GastroConcurs',
  description: 'Верстка сайта GastroConcurs на Vue.',
})
</script>

<template>
  <SiteShell />
</template>
