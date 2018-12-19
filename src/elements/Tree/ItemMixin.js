export default {
  props: [ 'orgId' ],
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
    org() {
      return this.$store.state.organizationsData.organizations.find(org => org.id === this.orgId);
    },
    carPark() {
      return this.org.car_park;
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
