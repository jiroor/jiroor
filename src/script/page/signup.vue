<template>
  <section id="signup">
    <h1>Signup</h1>

    <form>
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <button>Register</button>
    </form>
  </section>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

const Signup: ComponentOptions<Vue> = {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};

export default Signup;
</script>
