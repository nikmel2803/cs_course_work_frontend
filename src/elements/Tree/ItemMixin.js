export default {
  props: [ 'data' ],
  data() {
    return {
      showChildren: false,
      isEdit: false
    };
  },
  computed: {
    iconClasses() {
      return {
        'tree-item--opened': !this.showChildren,
        'tree-item--closed': this.showChildren
      };
    },
    user() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    edit() {
      this.isEdit = true;
      this.showChildren = true;
    },
    toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
};
