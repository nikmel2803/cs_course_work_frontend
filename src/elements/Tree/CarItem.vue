<template>
  <div class="tree-item car-item">
    <div class="tree-item__label-wrapper">
      <div class="tree-item__dots" @click.capture="edit"></div>
      <h1 class="car-item__name">{{ data.name }}</h1>
      <div class="car-item__model">Модель: {{ data.model }}</div>
      <div class="car-item__description">Описание: {{ data.description }}</div>
      <div class="car-item__purchase_date">Описание: {{ data.purchase_date }}</div>
    </div>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';

  export default {
    name: 'CarItem',
    mixins: [ItemMixin],
    props: ['data'],
    data() {
      return {
        name: this.data.name
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
