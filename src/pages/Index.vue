<template>
  <Layout>
    <h1>Hello world</h1>
    <p class="content-para">Hello world, my name is Dalton. Welcome to my site! Here you can read about some of the projects I have worked on and learn a bit about me.</p>
    <p class="content-para">I am a full-stack developer. Working mainly with the .NET environment. I'm a huge fan of .NET core and MVC but have my fair share of expeirence in .NET Framework and Web Forms.</p>
    <p class="content-para">As a full-stack developer, I do front end too! I've worked with Javascript frameworks like React.js and Vue.js. I've also built an entire pixel art animation tool in pure Javascript (no framework) you can read more about that here.</p>
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
