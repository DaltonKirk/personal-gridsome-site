<template>
  <Layout>
    <h1>{{ $context.project.title }}</h1>
      <div v-html="$context.project.content">
    </div>
  </Layout>
</template>

<script>
export default {

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