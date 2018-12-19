<template>
  <div class="tree-item staff-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children" :class="iconClasses">
      <div @click="toggleChildren">Сотрудники</div>
    </div>
    <div class="tree-item__new" @click.capture="newEmployee"></div>
    <employee-item
      v-if="showChildren"
      @removeEmployee="removeEmployee(index)"
      v-for="(empl, index) in data"
      :data="empl"
      :key="index"
    ></employee-item>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import EmployeeItem from './EmployeeItem';
  import uuidv4 from 'uuid/v4';

  export default {
    name: 'StaffItem',
    mixins: [ItemMixin],
    components: {
      'EmployeeItem': EmployeeItem
    },
    methods: {
      newEmployee() {
        const employeeData = {};
        for (let key in this.$scheme.employees) {
          employeeData[key] = this.$scheme.employees[key].default ||this.$scheme.employees[key].name;
        }
        employeeData['login'] = uuidv4();
        this.data.push(employeeData);
        this.$eventHub.$emit('save');
      },
      removeEmployee(index) {
        this.data.splice(index, 1);
        this.$eventHub.$emit('save');
      }
    }
  };
</script>

<style lang="scss">
  .employee-item {
    margin-left: 25px;
  }
</style>
