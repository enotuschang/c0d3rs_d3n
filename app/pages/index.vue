<script setup lang="ts">
definePageMeta({
  layout: 'main'
})

const {data, status, error} = useAsyncData('/', () => {
  return queryCollection('content').path('/').first()
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
      <h1 class="section--title">
        Hello, world!
      </h1>
    </div>
  </section>
</template>
