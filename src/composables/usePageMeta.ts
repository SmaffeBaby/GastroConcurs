import { onMounted, watchEffect } from 'vue'

interface PageMeta {
  title: string
  description?: string
}

export function usePageMeta(meta: PageMeta) {
  onMounted(() => {
    watchEffect(() => {
      document.title = meta.title

      if (!meta.description) {
        return
      }

      let description = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]',
      )

      if (!description) {
        description = document.createElement('meta')
        description.name = 'description'
        document.head.append(description)
      }

      description.content = meta.description
    })
  })
}
