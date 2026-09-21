<script setup lang="ts">
interface ApplyModalProps {
  isOpen: boolean
}

defineProps<ApplyModalProps>()

const emit = defineEmits<{
  close: []
}>()

function closeModal() {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 grid place-items-center bg-[#090018]/80 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
      @click.self="closeModal"
    >
      <section
        class="relative w-full max-w-[640px] rounded-[28px] border-[3px] border-[#7cff00] bg-[#2d175c] px-6 py-7 text-white shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:px-9 sm:py-9"
      >
        <button
          class="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-2xl leading-none text-white transition hover:bg-white/10"
          type="button"
          aria-label="Закрыть форму"
          @click="closeModal"
        >
          ×
        </button>

        <h2 id="apply-modal-title" class="max-w-[420px] text-[28px] font-black uppercase leading-none sm:text-[34px]">
          Подать заявку
        </h2>

        <form class="mt-8 grid gap-5" @submit.prevent="closeModal">
          <label class="grid gap-2 text-[12px] font-bold uppercase text-white/70">
            Название организации
            <input
              class="h-14 rounded-[16px] border border-white/15 bg-white/10 px-5 text-[15px] font-medium text-white outline-none transition placeholder:text-white/35 focus:border-[#7cff00]"
              name="organization"
              type="text"
              required
              autocomplete="organization"
              placeholder="ООО Гастро Бренд"
            />
          </label>

          <label class="grid gap-2 text-[12px] font-bold uppercase text-white/70">
            Почта
            <input
              class="h-14 rounded-[16px] border border-white/15 bg-white/10 px-5 text-[15px] font-medium text-white outline-none transition placeholder:text-white/35 focus:border-[#7cff00]"
              name="email"
              type="email"
              required
              autocomplete="email"
              placeholder="mail@example.ru"
            />
          </label>

          <label class="grid gap-2 text-[12px] font-bold uppercase text-white/70">
            Расположение
            <input
              class="h-14 rounded-[16px] border border-white/15 bg-white/10 px-5 text-[15px] font-medium text-white outline-none transition placeholder:text-white/35 focus:border-[#7cff00]"
              name="location"
              type="text"
              required
              autocomplete="street-address"
              placeholder="Санкт-Петербург"
            />
          </label>

          <label class="mt-1 flex items-start gap-3 text-[12px] font-medium leading-[1.45] text-white/75">
            <input
              class="mt-0.5 size-5 shrink-0 accent-[#7cff00]"
              name="personal-data"
              type="checkbox"
              required
            />
            <span>
              Согласен на обработку персональных данных
            </span>
          </label>

          <button
            class="mt-3 h-16 rounded-[20px] bg-[#7cff00] text-[18px] font-extrabold text-[#15003b] transition hover:bg-[#a3ff38]"
            type="submit"
          >
            Отправить заявку
          </button>
        </form>
      </section>
    </div>
  </Teleport>
</template>
