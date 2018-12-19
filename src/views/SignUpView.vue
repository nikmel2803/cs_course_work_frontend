<template>
  <div>
    <form class="sing-up" @submit.prevent="signUp">
      <h1>Зарегистрировать организацию</h1>
      <input required v-model="login" type="text" placeholder="Login"/>
      <input required v-model="password" type="password" placeholder="Password"/>
      <input required v-model="email" placeholder="email"/>
      <input required v-model="first_name" placeholder="Имя"/>
      <input required v-model="last_name" placeholder="Фамилия"/>
      <input required v-model="patronymic" placeholder="Отчество"/>
      <select v-model="sex">
        <option disabled value="">Пол</option>
        <option value="0">М</option>
        <option value="1">Ж</option>
      </select>
      <input required v-model="birthday" placeholder="Дата рождения"/>
      <input required v-model="orgData.name" placeholder="Названия организации"/>
      <input required v-model="orgData.description" placeholder="Описания организации"/>
      <input required v-model="orgData.founding_date" placeholder="Дата основания организации"/>
      <input required v-model="orgData.address" placeholder="Адрес организации"/>
      <hr/>
      <button type="submit">Зарегистрироваться</button>
      <router-link to="/sign-in">Уже есть аккаунт? Авторизируйтесь</router-link>
    </form>
  </div>
</template>

<script>
  import apiCall from '../api';

  export default {
    name: 'SignUpView',
    data() {
      return {
        login: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        patronymic: '',
        sex: '',
        birthday: '',
        orgData: {
          name: '',
          description: '',
          founding_date: '',
          address: ''
        }
      };
    },
    methods: {
      signUp: function () {
        apiCall.registerOrg({
          login: this.login,
          password: this.password,
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          patronymic: this.patronymic,
          sex: this.sex,
          birthday: this.birthday,
          orgData: this.orgData
        }).then(() => {
          this.$router.push('/sign-in');
        });
      }
    },
  };
</script>

<style>
  .sing-up {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
  }
</style>
