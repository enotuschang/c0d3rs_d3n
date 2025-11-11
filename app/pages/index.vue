<script setup lang="ts">
definePageMeta({
  layout: 'main'
})

const {t} = useI18n()

useSeoMeta({
  title: t('home.title'),
  description: t('home.description')
})
</script>

<template>
  <section class="section text-center">
      Logo
  </section>

  <section class="section my-auto">
    <div class="container">
      <div class="grid md:grid-cols-2 lg:grid-cols-3">
        <HomeMenu/>
      </div>
    </div>
  </section>

  <section class="section">
    <LangSwitcher/>
  </section>
</template>
