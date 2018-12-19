<template>
  <div class="tree-item car-park-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children" :class="iconClasses">
      <div @click="toggleChildren">Автопарк</div>
    </div>
    <div class="tree-item__new" @click.capture="newCar"></div>
    <car-item
      v-if="showChildren"
      v-for="(car, index) in carPark"
      :orgId="orgId"
      :carIndex="index"
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
    components: {
      'CarItem': CarItem
    },
    methods: {
      newCar() {
        console.log(this.carPark.length);
        this.$store.commit(SAVE_CAR, {
          id: this.orgId,
          index: this.carPark.length,
          name: 'Наименование',
          model: 'Модель',
          purchase_date: 'Дата приобретения',
          description: 'Описание',
        });
      }
    }
  };
</script>

<style lang="scss">
  .car-item {
    margin-left: 25px;
  }
</style>
