<template>
  <div>

    <organization-item
      v-for="org in data"
      :data="org"
    ></organization-item>
  </div>

</template>

<script>
  import OrganizationItem from '../elements/OrganizationItem';
  import apiCall from '../api';

  export default {
    name: 'MainView',
    data() {
      return {
        data: null
      };
    },
    created() {
      console.log('MainView created!');
      const user = this.$store.state.auth.user;

      apiCall.getData(user.login, user.password).then(response => {
        console.log(response.organizations);
        this.data = response.organizations;
      });
    },
    components: {
      'OrganizationItem': OrganizationItem,
    }
  };
</script>

<style>

</style>
