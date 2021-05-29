<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">Home</g-link>
      </strong>
      <nav class="nav"></nav>
      <Socials />
    </header>
    <slot />
  </div>
</template>

<script>
import Socials from '~/components/Socials.vue'

export default {
  components: {
    Socials
  }
}

</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  background: linear-gradient(0deg, #001fff, #ff8c00);
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0;
  min-height: 100vh;
  padding: 0;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.code-snippet {
  color: white;
  background: grey;
  border-radius: 5px;
  display: block;
  padding: 10px;
  margin: 10px 0;
  overflow-x: auto;
}

a {
  color: #000;
}
</style>
