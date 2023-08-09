<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link v-if="this.$route.path !== '/'" to="/">
          <arrow class="back-arrow"></arrow>
        </g-link>
      </strong>
      <nav class="nav"></nav>
      <Socials />
    </header>
    <slot />
  </div>
</template>

<script>
import Socials from '~/components/Socials.vue'
import Arrow from '~/components/icons/Arrow.vue'

export default {
  components: {
    Socials,
    Arrow
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

<style lang="scss">
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

.back-arrow {
  transition: all .25s;

  &:hover {
    transform: scale(1.2);
  }
}

a {
  color: #000;
}

h2 {
  margin: 0;
}

p {
  margin: 0 0 20px 0;
}

article {
  color: white;
  background: rgba(0, 0, 0, 0.38);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

article a {
  color: white;
}

.content-para {
  font-weight: 500;
}

</style>
