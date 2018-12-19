<template>
  <div>
    {{ user.last_name }} {{ user.first_name }} {{ user.patronymic }}
    <button @click="logout">Выйти</button>
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
      const response = await api.getData();
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

</style>
