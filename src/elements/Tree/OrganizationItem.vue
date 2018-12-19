<template>
  <div class="tree-item organization-item">
    <div class="tree-item__label-wrapper tree-item__label-wrapper--has-children" :class="iconClasses">
      <div @click="toggleChildren" v-if="!showChildren">{{ org.name }}</div>
      <div v-else-if="!isEdit" @click="toggleChildren">
        <h1 class="organization-item__name">{{ org.name }}</h1>
        <div class="organization-item__description">Описание: {{ org.description }}</div>
        <div class="organization-item__founding_date">Дата создания: {{ org.founding_date }}</div>
        <div class="organization-item__address">Адрес: {{ org.address }}</div>
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
      :orgId="orgId"
    ></car-park-item>
    <!--<staff-item-->
    <!--v-if="showChildren"-->
    <!--:data="data"-->
    <!--&gt;</staff-item>-->
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import CarParkItem from './CarParkItem';
  import StaffItem from './StaffItem';
  import {SAVE_ORG} from '../../store/actions/organizationsData';

  export default {
    name: 'OrganizationItem',
    mixins: [ItemMixin],
    methods: {
      saveData() {
        this.$store.commit(SAVE_ORG, {
          id: this.orgId,
          name: this.name,
          founding_date: this.founding_date,
          description: this.description,
          address: this.address
        });
        this.isEdit = false;
        this.postToServer();
      }

    },
    data() {
      const org = this.$store.state.organizationsData.organizations.find(org => org.id === this.orgId);

      return {
        name: org.name,
        founding_date: org.founding_date,
        description: org.description,
        address: org.address
      };
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

  .car-park-item {
    margin-left: 25px;
  }
</style>
