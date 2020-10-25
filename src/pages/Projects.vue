<template>
  <Layout>
    <h1>Projects</h1>
    <ProjectList />
  </Layout>
</template>

<script>
import ProjectList from '~/components/ProjectList.vue'

export default {
  components: {
    ProjectList
  },
  metaInfo: {
    title: 'Projects'
  }
}
</script>


