<script setup lang="ts">
import { ref } from 'vue'

interface QuestionItem {
  question: string
  answer: string
}

const questions: QuestionItem[] = [
  {
    question: 'Кто может участвовать в конкурсе?',
    answer:
      'Участниками могут быть субъекты малого и среднего предпринимательства (МСП), зарегистрированные в Санкт-Петербурге, работающие в сфере креативных индустрий. Компании должны быть включены в реестр МСП и не находиться в процессе ликвидации или банкротства.',
  },
  {
    question: 'Как правильно оформить презентацию бренда для заявки?',
    answer:
      'Презентация должна кратко раскрывать идею бренда, его визуальную айдентику, продуктовую линейку, достижения и планы развития. Материалы лучше оформить в едином стиле и приложить к заявке в доступном формате.',
  },
  {
    question: 'Как проходит голосование?',
    answer:
      'Голосование проходит после завершения приема заявок. Работы оцениваются по критериям конкурса, после чего формируется список победителей в заявленных номинациях.',
  },
  {
    question: 'До какого числа принимаются заявки?',
    answer:
      'Срок приема заявок будет указан в условиях участия и официальных объявлениях конкурса. Рекомендуем подать заявку заранее, чтобы успеть проверить все материалы.',
  },
]

const activeQuestionIndex = ref(0)

function toggleQuestion(index: number) {
  activeQuestionIndex.value = activeQuestionIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="questions" class="bg-[#17003f] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
    <div class="mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[460px_1fr] lg:gap-20">
      <h2 class="text-[42px] font-black uppercase leading-none text-white sm:text-6xl lg:text-[58px]">
        Вопросы
      </h2>

      <div class="grid">
        <article
          v-for="(item, index) in questions"
          :key="item.question"
          class="border-b border-[#7cff00]/40"
        >
          <button
            class="flex w-full items-start justify-between gap-8 py-6 text-left text-[22px] font-extrabold leading-[1.18] text-white transition hover:text-[#7cff00] sm:text-[26px] lg:text-[30px]"
            type="button"
            :aria-expanded="activeQuestionIndex === index"
            :aria-controls="`question-panel-${index}`"
            @click="toggleQuestion(index)"
          >
            <span>{{ item.question }}</span>
            <span
              class="mt-2 block size-3 shrink-0 rotate-[-45deg] border-r-2 border-t-2 border-current transition-transform duration-200"
              :class="{ 'rotate-[135deg]': activeQuestionIndex !== index }"
              aria-hidden="true"
            />
          </button>

          <div
            v-show="activeQuestionIndex === index"
            :id="`question-panel-${index}`"
            class="max-w-[630px] pb-7 text-[15px] font-medium leading-[1.55] text-white sm:text-[17px]"
          >
            {{ item.answer }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
