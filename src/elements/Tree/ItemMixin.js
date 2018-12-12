export default {
  data() {
    return {
      showChildren: false
    };
  },
  computed: {
    iconClasses() {
      return {
        'tree-item--opened': !this.showChildren,
        'tree-item--closed': this.showChildren
      };
    }
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
};
