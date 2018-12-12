<template>
  <div class="tree-item employee-item">
    <div class="tree-item__label-wrapper">
      <span>{{ data.last_name }} {{data.first_name}} {{data.patronymic}}</span>
    </div>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';

  export default {
    name: 'EmployeeItem',
    mixins: [ItemMixin],
    props: ['data']
  };
</script>

<style lang="scss">

</style>
