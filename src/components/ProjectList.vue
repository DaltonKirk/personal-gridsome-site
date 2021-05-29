<template>
  <ul class="project-list">
    <li v-for="project in $static.projects.edges" :key="project.node.title">
      <a class="project-list__link" :href="`/projects/${project.node.slug}`">
        <h3>{{ project.node.title }}</h3>
        <p>{{ project.node.description }}</p>
        <a
          class="project-list__github"
          v-if="project.node.github"
          :href="project.node.github"
          target="_blank"
          rel="noopener"
        >
          <g-image src="~/assets/images/GitHub-Mark-32px.png" alt="github logo" width="32" />
        </a>
      </a>
    </li>
  </ul> </template
>@

<static-query>
  query {
   projects: allProjects {
     edges {
       node {
         slug,
         title,
         description,
         github
       }
     }
   }
  }
</static-query>

<script>
export default {
  name: 'ProjectList',
};
</script>

<style lang="scss">
.project-list {
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 1rem;

    h3 {
      margin: 0 0 20px 0;
    }
  }
}

.project-list__link {
  padding: 20px;
  display: block;
  color: #000;
  height: 100%;
  text-decoration: none;

  &:active {
    color: grey;
  }
}

.project-list__github {
  padding: 0;
}
</style>
