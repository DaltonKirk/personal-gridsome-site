<template>
  <a class="button-link" :href="href" :rel="rel" :target="target">
      <slot></slot>
  </a>
</template>

<script>
export default {
    props: ['href', 'target'],
    computed: {
        rel: function () {
            return this.target === '_blank' ? 'noreferrer' : '';
        }
    }
};
</script>


<style lang="scss">

.button-link {
  background: #ff8c00;
  padding: 10px 20px;
  border-radius: 10px;
  color: black;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: #cc5800;
  }
}
</style>