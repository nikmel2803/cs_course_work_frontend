<template>
  <div class="tree-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children"
         :class="iconClasses"
         @click.self="toggleChildren">
      <span>{{ data.name }}</span>
      <div class="tree-item__dots" @click.capture="edit"></div>
    </div>
    <car-park-item
      v-if="showChildren"
      :data="data.car_park"
    ></car-park-item>
    <staff-item
      v-if="showChildren"
      :data="data.employees"
    ></staff-item>
    <organization-edit
      v-if="isEdit"
      @endEdit="isEdit=false"
      :data="data"
    ></organization-edit>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import CarParkItem from './CarParkItem';
  import StaffItem from './StaffItem';
  import OrganizationEdit from '../EditDialogs/OrganizationEdit';

  export default {
    name: 'OrganizationItem',
    data() {
      return {
        isEdit: false
      };
    },
    mixins: [ItemMixin],
    props: ['data'],
    methods: {
      edit() {
        this.isEdit = true;
      }
    },
    components: {
      'CarParkItem': CarParkItem,
      'StaffItem': StaffItem,
      'OrganizationEdit': OrganizationEdit
    }
  };
</script>

<style lang="scss">
  @import "ItemStyle";

  .car-park-item {
    margin-left: 25px;
  }
</style>
