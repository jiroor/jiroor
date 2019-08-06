<template>
  <section id="signin">
    <h1>Signin</h1>

    <form>
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="signin">Signin</button>
      <p v-show="error">{{ error }}</p>
    </form>
  </section>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";
import * as firebase from "firebase";

interface ISignin extends Vue {
  username: string;
  password: string;
  error: string;
}

const Signin: ComponentOptions<ISignin> = {
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },

  methods: {
    signin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((user: firebase.auth.UserCredential) => {
          this.$router.push("top");
        })
        .catch((error: Error) => (this.error = error.message));
    }
  }
};

export default Signin;
</script>
