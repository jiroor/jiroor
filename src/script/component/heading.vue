<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

const Heading: ComponentOptions<Vue> = {
  name: "heading",

  props: {
    level: {
      type: Number,
      validator: (value: any) => [1, 2].includes(value)
    }
  },

  computed: {
    tag() {
      return `h${this.level}`;
    }
  }
};

export default Heading;
</script>

<style lang="scss" scoped>
</style>
