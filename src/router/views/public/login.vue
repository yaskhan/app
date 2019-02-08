<docs>
  # Login View

  Contains the login form, a link to the forgot password view and the SSO login
  buttons
</docs>

<template>
  <Layout>
    <h1>Sign In</h1>
    <form @submit.prevent="signIn">
      <BaseMaterialInput id="email" v-model="email" type="email" label="Email" />
      <BaseMaterialInput id="password" v-model="password" type="password" label="Password" />
      <RouterLink :to="{ name: 'forgot-password' }">Forgot Password</RouterLink>
      <BaseButton type="submit" full-width>Sign In</BaseButton>
    </form>
  </Layout>
</template>

<script>
import Layout from "@layouts/public";
import { mapState } from "vuex";

export default {
  name: "Login",
  components: {
    Layout,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {},
  },
};
</script>
