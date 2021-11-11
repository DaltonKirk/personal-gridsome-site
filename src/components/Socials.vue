<template>
  <div class="socials">
    <a
      class="social-link-icon"
      href="https://github.com/DaltonKirk"
      target="_blank"
      rel="noopener"
      title="Github">
      <g-image
        src="~/assets/images/GitHub-Mark-32px.png"
        alt="github logo"
        width="32"
        height="32"
      />
    </a>
    <a
      class="social-link-icon"
      href="https://uk.linkedin.com/in/dalton-kirk"
      target="_blank"
      rel="noopener"
      title="LinkedIn">
      <g-image
        src="~/assets/images/LI-In-Bug.png"
        alt="linkedin logo"
        width="32"
        height="32"
      />
    </a>
    <a
      class="social-link-icon"
      href="https://www.instagram.com/daltonkirk95/"
      target="_blank"
      rel="noopener"
      title="Instagram">
      <g-image
        src="~/assets/images/glyph-logo_May2016.png"
        alt="instagram logo"
        width="32"
        height="32"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "Socials",
};
</script>

<style scoped lang="scss">
.social-link-icon {
  margin: 0 10px;
}
</style>
