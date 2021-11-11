<template>
  <Layout>
    <h1>Pathfinder</h1>
    <article>
      <p>This is a demonstration of my pathfinding algorithm. Right-click to place red walls, Left-click to set path origin.</p>
      <p>This Unity WebGL build works better on desktop browsers and can take a while to load.</p>
      <iframe style="width:100%;height:487px" src="/pathfinder/index.html"></iframe>
    </article>
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
  iframe {
    border: none;
  }
</style>