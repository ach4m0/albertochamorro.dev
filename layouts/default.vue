<template>
  <div>
    <Header @hamburger-menu-clicked="onHamburgerMenuClicked" />
    <DrawerMenu
      :active="drawerMenuActive"
      @drawer-menu-close-event="onDrawerMenuClose"
    />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawerMenuActive: false,
    }
  },
  methods: {
    onHamburgerMenuClicked() {
      this.drawerMenuActive = true
    },
    onDrawerMenuClose() {
      this.drawerMenuActive = false
    },
  },
}
</script>

<style>
html {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

html.dark {
  @apply bg-gray-700;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3 {
  @apply font-display text-custom-gray;
}

p {
  @apply font-body text-custom-gray my-4;
}

.dark h1,
.dark h2,
.dark h3,
.dark p,
.dark small {
  @apply text-gray-100;
}

a {
  @apply text-custom-blue;
}

a:hover,
a:focus {
  text-decoration: underline;
}

input,
textarea {
  @apply rounded border border-gray-700 py-2 px-3;
}

input:focus,
textarea:focus {
  @apply outline-none border border-custom-blue;
}

.button--green {
  @apply bg-white;
}

.button--green:hover {
  @apply bg-black;
}

.custom-path-bg {
  background: url('~assets/images/custom_path.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.xl-container {
  max-width: 75rem;
  margin: 0 auto;
}

.text-container {
  max-width: 50rem;
  padding: 2rem;
}

.nuxt-content h2 {
  @apply text-2xl mt-6 mb-2;
}
.nuxt-content h3 {
  @apply text-xl mt-6 mb-1;
}
.nuxt-content p {
  @apply font-body text-lg my-6;
}
.nuxt-content img {
  @apply m-auto max-w-full my-6;
}
.nuxt-content ul {
  list-style: initial;
  @apply font-body text-lg my-6 text-custom-gray;
}
.nuxt-content blockquote {
  @apply p-4 border-l-4 border-custom-blue font-body text-custom-gray;
}
.dark .nuxt-content ul,
.dark .nuxt-content blockquote {
  @apply text-gray-100;
}

@media (min-width: 768px) {
  .nuxt-content img {
    @apply max-w-screen-sm;
  }
}
</style>
