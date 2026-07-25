<script setup lang="ts">
import type {NuxtError} from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <section
      v-if="error"
      class="section min-h-screen flex items-center"
  >
    <div class="container space-y-4 text-center">
      <h1
          class="section--title mb-8"
          v-text="error.statusCode"
      />

      <p
          class="section--paragraph"
          v-text="error.message"
      />

      <NuxtLink to="/">
        Go back home
      </NuxtLink>
    </div>
  </section>
</template>
