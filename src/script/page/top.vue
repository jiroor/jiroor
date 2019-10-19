<template>
  <article>
    <heading :level="1">jiroor</heading>

    <unit>
      <template v-slot:heading>Splatoon 2</template>
      <template v-slot:description>任天堂から発売されたTPSゲーム</template>
    </unit>
  </article>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

const Top: ComponentOptions<Vue> = {};

export default Top;
</script>

<style lang="scss" scoped>
</style>
