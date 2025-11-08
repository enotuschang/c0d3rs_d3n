<script setup lang="ts">
import type {NuxtError} from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <div v-if="error">
    <h1 v-text="error.statusCode"/>

    <p v-text="error.message"/>

    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
