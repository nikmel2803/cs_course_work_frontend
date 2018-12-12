<template>
  <div class="tree-item car-park-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children"
         :class="iconClasses"
         @click="toggleChildren">
      <span>Сотрудники</span>
    </div>
    <employee-item
      v-if="showChildren"
      v-for="emp in data"
      :data="emp"
    ></employee-item>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import EmployeeItem from './EmployeeItem';

  export default {
    name: 'StaffItem',
    mixins: [ItemMixin],
    props: ['data'],
    components: {
      'EmployeeItem': EmployeeItem
    }
  };
</script>

<style lang="scss">
.employee-item{
  margin-left: 20px;
}
</style>
