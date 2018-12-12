<template>
  <div class="tree-item car-park-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children"
         :class="iconClasses"
         @click="toggleChildren">
      <span>Автопарк</span>
    </div>
    <car-item
      v-if="showChildren"
      v-for="index in data.car_park.length"
      :data="data"
      :index="index"
      :key="index"
    ></car-item>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import CarItem from './CarItem';

  export default {
    name: 'CarParkItem',
    mixins: [ItemMixin],
    props: ['data'],
    components: {
      'CarItem': CarItem
    }
  };
</script>

<style lang="scss">
  .car-item {
    margin-left: 25px;
  }
</style>
