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
    <HomeMenu/>

    <div class="content">
      <h1 v-text="data?.title"/>
    </div>

    <div class="flex flex-col gap-4">
      <LangSwitcher/>

      <UColorModeButton/>
    </div>

  </section>
</template>

<style scoped>
@reference "tailwindcss";

.section {
  --container-mw:calc(100vh * 1.778);
  @apply grid grid-cols-[1fr_100vh_1fr] items-center max-w-(--container-mw) h-screen mx-auto;
}
</style>
