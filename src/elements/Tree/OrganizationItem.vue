<template>
  <div class="tree-item organization-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children" :class="iconClasses">
      <div @click="toggleChildren" v-if="!showChildren">{{ data.name }}</div>
      <div v-else-if="!isEdit" @click="toggleChildren">
        <h1 class="organization-item__name">{{ data.name }}</h1>
        <div class="organization-item__description">Описание: {{ data.description }}</div>
        <div class="organization-item__founding_date">Дата создания: {{ data.founding_date }}</div>
        <div class="organization-item__address">Адрес: {{ data.address }}</div>
      </div>
      <div v-else>
        <table>
          <tr>
            <td>Название</td>
            <td><input type="text" v-model="name"></td>
          </tr>
          <tr>
            <td>Описание</td>
            <td><input type="text" v-model="description"></td>
          </tr>
          <tr>
            <td>Дата основания</td>
            <td><input type="text" v-model="founding_date"></td>
          </tr>
          <tr>
            <td>Адрес</td>
            <td><input type="text" v-model="address"></td>
          </tr>
          <tr>
            <td>
              <button @click="isEdit=false">Отмена</button>
            </td>
            <td>
              <button @click="saveData">Сохранить</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="tree-item__dots" @click.capture="edit"></div>
    <car-park-item
      v-if="showChildren"
      :data="data.car_park"
    ></car-park-item>
    <staff-item
      v-if="showChildren"
      :data="data.employees"
    ></staff-item>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import CarParkItem from './CarParkItem';
  import StaffItem from './StaffItem';
  import OrganizationEdit from '../EditDialogs/OrganizationEdit';

  export default {
    name: 'OrganizationItem',
    data() {
      return {
        name: this.data.name,
        description: this.data.description,
        founding_date: this.data.founding_date,
        address: this.data.address,
        isEdit: false
      };
    },
    mixins: [ItemMixin],
    props: ['data', 'index'],
    methods: {
      edit() {
        this.isEdit = true;
        this.showChildren = true;
      },
      saveData() {

      }
    },
    components: {
      'CarParkItem': CarParkItem,
      'StaffItem': StaffItem,
      'OrganizationEdit': OrganizationEdit
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

  .car-park-item {
    margin-left: 25px;
  }
</style>
