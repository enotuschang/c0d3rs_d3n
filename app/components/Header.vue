<script setup lang="ts">
import { useColorMode } from '#imports'

const colorMode = useColorMode()

const themeToggleHandler = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <header>
    <div class="container flex items-center gap-4">
      Header

      <NuxtLink to="/about">About</NuxtLink>

      <NuxtLink to="/contacts">Contacts</NuxtLink>

      <UButton
          class="ml-auto"
          @click="themeToggleHandler"
          :label="colorMode.value === 'light' ? 'dark' : 'light'"
      />
    </div>
  </header>
</template>

<style scoped>

</style>
