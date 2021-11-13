<template>
  <Layout>
    <h1>Pixel Art Animator</h1>
    <article>
        <h2>What is it?</h2>
        <p>
          It's a pixel art animation tool! It's a fully client side web application built with pure Javascript, no frameworks.
          You can draw multiple frames and export them as a single sprite sheet and you can also import these files to continue working on your animation.
        </p>
        <h2>Why I built it</h2>
        <p>
          I built it for creating 2D animations in the Unity game engine. I found that my current tools were not giving me every thing I needed.
          I wanted to be able to see a preview of my animation and see the effect that my edits made in real time.
        </p>
        <ButtonLink href="https://animate.daltonkirk.com" target="_blank">Try it out</ButtonLink>
    </article>
  </Layout>
</template>

<script>
import ButtonLink from '~/components/ButtonLink.vue'

export default {
  metaInfo: {
    title: 'Project',
    meta: [
      {
        name: 'description',
        content: 'A browser based pixel art animation tool.'
      }
    ]
  },
  components: {
    ButtonLink
  }
}
</script>

<style>
  iframe {
    border: none;
  }
</style>