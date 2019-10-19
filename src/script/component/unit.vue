<template>
  <section>
    <heading :level="2">
      <slot name="heading" />
    </heading>
    <description>
      <slot name="description" />
    </description>
  </section>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

const Unit: ComponentOptions<Vue> = {
  name: "unit"
};

export default Unit;
</script>

<style lang="scss" scoped>
</style>
