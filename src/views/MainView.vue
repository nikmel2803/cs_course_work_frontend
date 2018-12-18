<template>
  <div>
    <organization-item
      v-for="org in organizations"
      :orgId="org.id"
      :key="org.id"
    ></organization-item>
  </div>
</template>

<script>
  import OrganizationItem from '../elements/Tree/OrganizationItem';
  import {LOAD_DATA} from '../store/actions/organizationsData';
  import api from '../api';

  export default {
    name: 'MainView',
    async created() {
      const user = this.$store.state.auth.user;
      const response = await api.getData(user.login, user.password);
      this.$store.commit(LOAD_DATA, response);
    },
    computed: {
      organizations() {
        return this.$store.state.organizationsData.organizations;
      }
    },
    components: {
      'OrganizationItem': OrganizationItem,
    }
  };
</script>

<style>

</style>
