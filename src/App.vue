<template>
  <div id="app">
    <sign-in-dialog
      @signedIn=""
    ></sign-in-dialog>

    <tree-item
      :nodes="tree.nodes"
      :depth="0"
      :label="tree.label"
    ></tree-item>
  </div>
</template>

<script>
  import SignInDialog from './elements/dialogs/SignInDialog';
  import TreeItem from './elements/TreeItem';

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
    name: 'app',
    data() {
      return {
        tree: tree,
        loggedIn: false,
        user: null
      }
    },
    created() {
      window.addEventListener('storage', () => {
        this.loggedIn = localStorage.getItem('login') && localStorage.getItem('password');
      });
      this.loggedIn = localStorage.getItem('login') && localStorage.getItem('password');
    },
    components: {
      'SignInDialog': SignInDialog,
      'TreeItem': TreeItem,
    }
  }
</script>

<style lang="scss">
  body {
    padding: 10px;
    background-color: #E5E5E5;
  }
</style>
