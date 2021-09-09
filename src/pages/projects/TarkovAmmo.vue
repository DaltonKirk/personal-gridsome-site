<template>
  <Layout>
    <h1>Tarko Ammo</h1>
    <p>
      <a href="https://tarkovammo.com">tarkovammo.com</a>
      is a Vue.js app that I made to help people easily compare ammunition types
      from the game Escape from Tarkov.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Project",
  },
};
</script>

<style>
p + h2 {
  margin-bottom: -20px;
}

iframe {
  border: none;
}
</style>