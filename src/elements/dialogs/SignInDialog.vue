<template>
  <div v-if="!signedIn" class="sign-in-dialog">
    <form class="sign-in-dialog__form" @submit="submit">
      <h1>Авторизация</h1>
      <input type="text" placeholder="Логин" v-model="login"><br>
      <input type="password" placeholder="Пароль" v-model="password"><br>
      <input type="submit" value="Войти"> <br>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "SignInDialog",
    data() {
      return {
        login: localStorage.getItem('login') || '',
        password: localStorage.getItem('password') || '',
        signedIn: false,
      }
    },
    methods: {
      async signIn() {
        const params = {
          login: this.login,
          password: this.password,
        };
        try {
          const response = await axios.get('http://127.0.0.1:8000/signIn', {params: params});
          if ('login' in response.data && 'password' in response.data) {
            localStorage.setItem('login', response.data.login);
            localStorage.setItem('password', response.data.password);
            this.signedIn = true;
            return response.data;
          }
        } catch (e) {
          console.log(e.response.status);
        }
      },
      async submit(e) {
        e.preventDefault();
        const user = await this.signIn();
        this.$emit('signedIn', user)
      }
    }
  }
</script>

<style lang="scss">
  .sign-in-dialog {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    background-color: #E5E5E5;
    z-index: 1;
    &__form {
      margin: auto;
      background-color: #fff;
    }
  }
</style>
