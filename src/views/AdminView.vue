<template>
  <div>
    <div class="user_info">
      Админ панель
      <button @click="logout">Выйти</button>
    </div>
    <organization-item
      :data="org"
    ></organization-item>
  </div>
</template>

<script>
  import OrganizationItem from '../elements/Tree/OrganizationItem';
  import {AUTH_LOGOUT} from "../store/actions/auth";
  import api from '../api';

  export default {
    name: 'MainView',
    async created() {
      const adminPassword = prompt("Введите пароль администратора");
      if (adminPassword !== 'adminqwerty') {
        this.$router.push('/sing-in');
      }
      const orgId = prompt("Введите ID организации");

      const response = await api.getAdminData(orgId);
      this.$eventHub.$on('save', () => api.saveData(this.org));
      this.org = response;
    },
    data() {
      return {
        org: {}
      }
    },
    methods: {
      logout() {
        this.$store.commit(AUTH_LOGOUT);
      }
    },
    computed: {
      user() {
        return this.$store.state.auth.user;
      }
    },
    components: {
      'OrganizationItem': OrganizationItem,
    }
  };
</script>

<style>
  .user_info {
    padding: 10px;
    font-size: 20px;
  }
</style>
