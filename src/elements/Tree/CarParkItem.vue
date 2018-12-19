<template>
  <div class="tree-item car-park-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children" :class="iconClasses">
      <div @click="toggleChildren">Автопарк</div>
    </div>
    <div class="tree-item__new" @click.capture="newCar"></div>
    <car-item
      v-if="showChildren"
      @removeCar="removeCar(index)"
      v-for="(car, index) in data"
      :data="car"
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
    components: {
      'CarItem': CarItem
    },
    methods: {
      newCar() {
        const carData = {};
        for (let key in this.$scheme.car_park) {
          carData[key] = this.$scheme.car_park[key].name;
        }
        this.data.push(carData);
        this.$eventHub.$emit('save');
      },
      removeCar(index) {
        this.data.splice(index, 1);
        this.$eventHub.$emit('save');
      }
    }
  };
</script>

<style lang="scss">
  .car-item {
    margin-left: 25px;
  }
</style>
