<template>
  <Layout>
    <h1>Tarko Ammo</h1>
    <article>
      <h2>About Tarkov Ammo</h2>
      <p>
        <a href="https://wizardly-hermann-c44975.netlify.app/">https://wizardly-hermann-c44975.netlify.app/</a>
        is a Vue.js app that I made to help people easily compare ammunition
        types from the game Escape from Tarkov.
      </p>
      <g-image class="image" src="~/assets/images/tarkov-ammo-screenshot.png" width="720" alt="Screenshot of my site https://tarkovammo.com" />
      <p>
        The game has lots of different ammunition types that you can use, and they all have different properties.
        They are not easy to compare in the game so I created this Vue.js application to give people a way to visualise
        the differences between them. Also, it was just a fun project to work on.
      </p>
      <p>
        You start by choosing two ammo types to compare in the autocompleting dropdowns. Then the table will update and indicate the better 
        value with the green colour, red is worse and orange is even.
      </p>
      <h2>Task Tracker</h2>
      <p>
        I also created a task tracker page. Here you can tick off the tasks you have completed in the game to track
        your progress and see how much you have left to do.
      </p>
      <p>
        This uses the browser's local storage, so if you have to use the same browser each time if you wish to keep task data.
      </p>
      <ButtonLink href="https://wizardly-hermann-c44975.netlify.app/" target="_blank">Try it out</ButtonLink>
    </article>
  </Layout>
</template>

<script>
import ButtonLink from '~/components/ButtonLink.vue'

export default {
  metaInfo: {
    title: "Tarkov Ammo",
  },
    components: {
    ButtonLink
  }
};
</script>

<style>
iframe {
  border: none;
}

.image {
  width: 100%;
  height: auto;
}
</style>