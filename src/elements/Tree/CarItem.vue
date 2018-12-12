<template>
  <div class="tree-item car-item">
    <div class="tree-item__label-wrapper">
      <span>{{ data.name }} | {{data.model}}</span>
    </div>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';

  export default {
    name: 'CarItem',
    mixins: [ItemMixin],
    props: ['data']
  };
</script>

<style lang="scss">

</style>
