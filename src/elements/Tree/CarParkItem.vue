<template>
  <div class="tree-item car-park-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children" :class="iconClasses">
      <div @click="toggleChildren">Автопарк</div>
    </div>
    <div class="tree-item__new" @click.capture="newCar"></div>
    <car-item
      v-if="showChildren"
      v-for="(car, index) in carPark"
      :data="data"
      :index="index"
      :key="index"
    ></car-item>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import CarItem from './CarItem';
  import {SAVE_CAR} from '../../store/actions/organizationsData';

  export default {
    name: 'CarParkItem',
    mixins: [ItemMixin],
    props: ['data'],
    components: {
      'CarItem': CarItem
    },
    methods: {
      newCar() {
        console.log(this.data.car_park.length);
        this.$store.commit(SAVE_CAR, {
          id: this.data.id,
          index: this.data.car_park.length,
          name: 'Наименование',
          model: 'Модель',
          purchase_date: 'Дата приобретения',
          description: 'Описание',
        });
      }
    },
    computed: {
      carPark() {
        console.log('wdwqd')
        return this.data.car_park;
      }
    }
  };
</script>

<style lang="scss">
  .car-item {
    margin-left: 25px;
  }
</style>
