<script setup lang="ts">
import {MENU_LIST} from '~/utils/menu'

const {t} = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <nav class="text-right border-current/50 border-r">
    <NuxtLink
        v-for="(item, index) in MENU_LIST"
        class="home-menu--link"
        :key="`menu_item_${index}`"
        :to="localePath(item.link)"
    >
      {{ t(item.label) }}
    </NuxtLink>
  </nav>
</template>

<style scoped>
@reference "tailwindcss";

.home-menu--link {
  @apply block px-9 py-4 text-4xl font-extralight transition-opacity duration-300;

  /*@variant xl {
    @apply text-xl;
  }*/

  @variant hover {
    @apply opacity-80;
  }
}

::v-global(.dark) {
  .home-menu--link {
    @apply font-thin tracking-[.01em];
  }
}
</style>
