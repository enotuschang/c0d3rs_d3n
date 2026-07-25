<script setup lang="ts">
definePageMeta({
  layout: 'inner'
})

const route = useRoute()

const {data, status, error} = useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
}, {
  getCachedData(key, nuxtApp) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  }
})

useSeoMeta({
  title: computed(() => {
    if (status.value === 'pending') return 'Loading...'

    return data.value?.title
  }),
  description: computed(() => data.value?.description)
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div
          v-if="status === 'pending'"
          class="flex justify-center items-center fixed inset-0 z-999"
      >
        <UIcon
            name="svg-spinners:6-dots-rotate"
            class="w-10 h-10"
        />
      </div>

      <ContentRenderer
          v-if="data"
          :value="data"
          class="section--content"
      />

      <p
          v-if="error"
          v-text="`${error.statusCode} ${error.message}`"
      />
    </div>
  </section>
</template>
