<script setup lang="ts">
definePageMeta({
  layout: 'inner'
})

const clickLink = (href: string = '#') => {
  const link: Partial<HTMLLinkElement> = document.createElement('A')
  link.setAttribute?.('href', href)
  link.setAttribute?.('target', '_blank')

  document.body.appendChild(link as Node)
  link.click?.()
  document.body.removeChild(link as Node)
}

const emailClickHandler = () => {
  const nameParts = ['enotus', 'chang']
  const domainParts = ['gmail', 'com']
  const href = `mailto:${[nameParts.join('.'), domainParts.join('.')].join('@')}`

  clickLink(href)
}
const phoneClickHandler = () => {
  const phoneParts = ['7', '982', '646', '63', '88']
  const href = `tel:+${phoneParts.join('')}`

  clickLink(href)
}
const telegramClickHandler = () => {
  const urlParts = ['https:/', 't.me', 'jimmy_goldenleg']
  const href = urlParts.join('/')

  clickLink(href)
}
</script>

<template>
  <section class="contact-wrapper">
    <div
        class="contact email"
        @click="emailClickHandler"
    />

    <div
        class="contact phone"
        @click="phoneClickHandler"
    />

    <div
        class="contact telegram"
        @click="telegramClickHandler"
    />
  </section>
</template>

<style scoped>
@reference "tailwindcss";

.contact {
  @apply w-25 aspect-square bg-current cursor-pointer transition-opacity duration-300;

  @variant lg {
    @apply w-35;
  }

  @variant 2xl {
    @apply w-45;
  }

  @variant hover {
    @apply opacity-80;
  }

  @variant [.email] {
    mask:url(~/assets/images/Email.svg) center / contain no-repeat;
  }

  @variant [.phone] {
    mask:url(~/assets/images/Phone.svg) center / contain no-repeat;
  }

  @variant [.telegram] {
    mask:url(~/assets/images/Telegram.svg) center / contain no-repeat;
  }
}

.contact-wrapper {
  @apply flex gap-20 justify-center items-center my-auto;

  @variant max-md {
    @apply flex-col;
  }

  @variant lg {
    @apply gap-30;
  }

  @variant 2xl {
    @apply gap-40;
  }
}
</style>
