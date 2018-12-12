<template>
  <div class="tree-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children"
         :class="iconClasses"
         @click="toggleChildren">
      <span>{{ data.name }}</span>
    </div>
    <car-park-item
      v-if="showChildren"
      :data="data.car_park"
    ></car-park-item>
    <staff-item
      v-if="showChildren"
      :data="data.employees"
    ></staff-item>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import CarParkItem from './CarParkItem';
  import StaffItem from './StaffItem';

  export default {
    name: 'OrganizationItem',
    mixins: [ItemMixin],
    props: ['data'],
    components: {
      'CarParkItem': CarParkItem,
      'StaffItem': StaffItem
    }
  };
</script>

<style lang="scss">
  @import "ItemStyle";

  .car-park-item {
    margin-left: 25px;
  }
</style>
