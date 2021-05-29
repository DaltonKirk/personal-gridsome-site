<template>
  <Layout>
    <h1>{{ $context.project.title }}</h1>
      <div v-html="$context.project.content">
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Project'
  }
}
</script>

<style>
  p + h2 {
    margin-bottom: -20px;
  }

  iframe {
    border: none;
  }
</style>