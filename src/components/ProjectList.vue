<template>
    <ul class="project-list">
        <li v-for="project in $static.projects.edges" :key="project.node.title">
            <a :href="`/projects/${project.node.slug}`">
                <h3>{{project.node.title}}</h3>
                <p>{{ project.node.description }}</p>
            </a>
        </li>
    </ul>
</template>

<static-query>
  query {
   projects: allProjects {
     edges {
       node {
         slug,
         title,
         description
       }
     }
   }
  }
</static-query>

<script>
export default {
 name: 'ProjectList'
}
</script>

<style lang="scss">
    .project-list {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
            border: 1px solid black;
            border-radius: 5px;
            margin-right: 20px;
            margin-bottom: 1rem;
            flex-grow: 1;
            flex-basis: 0;
            @media (max-width: 640px) {
                flex-basis: 100%;
            }

            a {
                color: #000;
                display: block;
                padding: 0 30px;
                text-decoration: none;
                height: 100%;
                &:active {
                    color: grey;
                }
            }
        }
    }
</style>