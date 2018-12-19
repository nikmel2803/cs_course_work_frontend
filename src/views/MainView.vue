<template>
  <div>
    <organization-item
      :data="org"
    ></organization-item>
  </div>
</template>

<script>
  import OrganizationItem from '../elements/Tree/OrganizationItem';
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
    components: {
      'OrganizationItem': OrganizationItem,
    }
  };
</script>

<style>

</style>
