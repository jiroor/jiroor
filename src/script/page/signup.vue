<template>
  <section id="signup">
    <h1>Signup</h1>

    <form>
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="signup">Register</button>
      <p v-show="error">{{ error }}</p>
    </form>
  </section>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";
import * as firebase from "firebase";

interface ISignup extends Vue {
  username: string;
  password: string;
  error: string;
}

const Signup: ComponentOptions<ISignup> = {
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },

  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then((user: firebase.auth.UserCredential) => {
          this.$router.push("signin");
        })
        .catch((error: Error) => (this.error = error.message));
    }
  }
};

export default Signup;
</script>
