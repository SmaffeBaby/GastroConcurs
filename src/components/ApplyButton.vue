<script setup lang="ts">
interface ApplyButtonProps {
  href?: string
  label?: string
}

withDefaults(defineProps<ApplyButtonProps>(), {
  href: '#apply',
  label: 'Подать заявку',
})
</script>

<template>
  <a
    :href="href"
    class="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[22px] bg-[#7cff00] text-center font-extrabold leading-none text-[#15003b] shadow-[0_0_26px_rgba(124,255,0,0.22)] transition hover:bg-[#a3ff38]"
  >
    {{ label }}
  </a>
</template>
