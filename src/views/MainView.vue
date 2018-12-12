<template>
  <div>
    <organization-item
      v-for="(org, index) in organizations"
      :data="org"
      :index="index"
      :key="index"
    ></organization-item>
  </div>
</template>

<script>
  import OrganizationItem from '../elements/Tree/OrganizationItem';
  import {LOAD_DATA} from '../store/actions/organizationsData';

  export default {
    name: 'MainView',
    created() {
      const user = this.$store.state.auth.user;


      this.$store.dispatch(LOAD_DATA);
    },
    computed: {
      organizations () {
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
