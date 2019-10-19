<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

const Description: ComponentOptions<Vue> = {
  name: "description"
};

export default Description;
</script>

<style lang="scss" scoped>
</style>
