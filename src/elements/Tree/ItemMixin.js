import api from '../../api';

export default {
  props: ['data'],
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
