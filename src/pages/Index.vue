<template>
  <Layout>
    <project-list />
  </Layout>
</template>

<script>
import ProjectList from "~/components/ProjectList.vue";

export default {
  components: {
    ProjectList,
  },
  metaInfo: {
    title: "Home",
    meta: [
      {
        name: "description",
        content:
          "Dalton Kirk. Hobbyist game developer and full-time full-stack web developer. This is my personal site for sharing my projects and having a place to write about them.",
      },
    ],
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
