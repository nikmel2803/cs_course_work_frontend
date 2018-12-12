<template>
  <div>
    <form class="sing-in" @submit.prevent="signIn">
      <h1>Sign in</h1>
      <input required v-model="login" type="text" placeholder="Login"/>
      <input required v-model="password" type="password" placeholder="Password"/>
      <hr/>
      <button type="submit">Login</button>
      <router-link to="/sign-up">Зарегистрировать организацию</router-link>
    </form>
  </div>
</template>

<script>
  import {AUTH_REQUEST} from '../store/actions/auth'

  export default {
    name: 'SignInView',
    data() {
      return {
        login: '',
        password: '',
      }
    },
    methods: {
      signIn: function () {
        const {login, password} = this;
        this.$store.dispatch(AUTH_REQUEST, {login, password}).then(() => {
          this.$router.push('/')
        })
      }
    },
  }
</script>

<style>
  .sing-in {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
  }
</style>
