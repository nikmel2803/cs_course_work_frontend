<template>
  <div class="tree-item car-item">
    <div class="tree-item__label-wrapper">
      <div class="tree-item__dots" @click.capture="edit"></div>
      <h1 class="car-item__name">{{ name }}</h1>
      <div class="car-item__model">Модель: {{ model }}</div>
      <div class="car-item__description">Описание: {{ description }}</div>
      <div class="car-item__purchase_date">Описание: {{ purchase_date }}</div>
    </div>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';

  export default {
    name: 'CarItem',
    mixins: [ItemMixin],
    props: ['data', 'index'],
    data() {
      console.log('ubdex' + this.index);

      console.log(this.data);
      const car = this.data.car_park[this.index];
        return {
        name: car.name,
        model: car.model,
        description: car.description,
        purchase_date: car.purchase_date
      };
    }
  };
</script>

<style lang="scss">
  .car-item {
    &__name {
      font-size: 20px;
      margin: 0;
    }
  }
</style>
