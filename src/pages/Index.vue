<template>
  <Layout>
    <project-list />
  </Layout>
</template>

<script>
import ProjectList from '~/components/ProjectList.vue'

export default {
    components: {
    ProjectList
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
