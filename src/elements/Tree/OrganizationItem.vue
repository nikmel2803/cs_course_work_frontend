<template>
  <div class="tree-item organization-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children" :class="iconClasses">
      <div v-if="!isEdit" @click="toggleChildren">
        <h1 class="organization-item__name">{{ data.name }}</h1>
        <div class="organization-item__description">Описание: {{ data.description }}</div>
        <div class="organization-item__founding_date">Дата создания: {{ data.founding_date }}</div>
        <div class="organization-item__address">Адрес: {{ data.address }}</div>
      </div>
      <div v-else>
        <table>
          <tr>
            <td>Название</td>
            <td><input type="text" v-model="data.name"></td>
          </tr>
          <tr>
            <td>Описание</td>
            <td><input type="text" v-model="data.description"></td>
          </tr>
          <tr>
            <td>Дата основания</td>
            <td><input type="text" v-model="data.founding_date"></td>
          </tr>
          <tr>
            <td>Адрес</td>
            <td><input type="text" v-model="data.address"></td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <button @click="saveData">Сохранить</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="tree-item__dots" v-show="user.access>2" @click.capture="edit"></div>
    <car-park-item
      :data="data.car_park"
    ></car-park-item>
    <staff-item
      :data="data.employees"
    ></staff-item>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import CarParkItem from './CarParkItem';
  import StaffItem from './StaffItem';

  export default {
    name: 'OrganizationItem',
    mixins: [ItemMixin],
    methods: {
      saveData() {
        this.isEdit = false;
        this.$eventHub.$emit('save');
      }
    },
    components: {
      'CarParkItem': CarParkItem,
      'StaffItem': StaffItem
    }
  };
</script>

<style lang="scss">
  @import "ItemStyle";

  .organization-item {
    &__name {
      font-size: 20px;
      margin: 0;
    }
  }

  .car-park-item, .staff-item {
    margin-left: 25px;
  }
</style>
