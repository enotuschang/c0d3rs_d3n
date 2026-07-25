<script setup lang="ts">
import {MENU_LIST} from '~/utils/menu'

const {t} = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <nav class="home-menu">
    <NuxtLink
        v-for="(item, index) in MENU_LIST"
        class="home-menu--link"
        :key="`menu_item_${index}`"
        :to="localePath(item.link)"
    >
      <UIcon
          class="home-menu--icon"
          :name="item.icon"
      />

      {{ t(item.label) }}
    </NuxtLink>
  </nav>
</template>

<style scoped>
@reference "tailwindcss";

.home-menu {
  @apply flex flex-col justify-center gap-4;
}

.home-menu--link {
  @apply flex items-center gap-2 transition-opacity duration-300;

  @variant hover {
    @apply opacity-80;
  }
}

.home-menu--icon {
  @apply w-8 h-8 shrink-0;
}
</style>
