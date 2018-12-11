<template>
  <div>

    <h1>{{ data.name }}</h1>
    <tree-item
      :nodes="tree.nodes"
      :depth="0"
      :label="tree.label"
    ></tree-item>
  </div>

</template>

<script>
  import TreeItem from '../elements/TreeItem';
  import apiCall from '../api';

  const tree = {
    label: 'root',
    nodes: [
      {
        label: 'item1',
        nodes: [
          {
            label: 'item1.1'
          },
          {
            label: 'item1.2',
            nodes: [
              {
                label: 'item1.2.1'
              }
            ]
          }
        ]
      },
      {
        label: 'item2'
      }
    ]
  };

  export default {
    name: 'MainView',
    data() {
      return {
        tree,
        data: null
      };
    },
    created() {
      console.log('MainView created!');
      const user = this.$store.state.auth.user;

      apiCall.getData(user.login, user.password).then(response => {
        this.data = response;
      });
    },
    components: {
      'TreeItem': TreeItem,
    }
  };
</script>

<style scoped>

</style>
