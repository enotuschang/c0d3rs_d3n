<script setup lang="ts">
const {locale: code = 'ru', locales = [], setLocale} = useI18n()
</script>

<template>
  <div class="flex justify-center items-center gap-4">
    <UButton
        v-for="locale in locales"
        :label="locale.name"
        :disabled="locale.code === code"
        size="lg"
        class="cursor-pointer"
        @click="setLocale(locale.code)"
    />
  </div>
</template>

<style scoped>

</style>
