<template>
  <div class="tree-item car-item">
    <div class="tree-item__label-wrapper">
      <div @click="toggleChildren" v-if="!showChildren">{{ name }}</div>
      <div v-else-if="!isEdit" @click="toggleChildren">
        <h1 class="organization-item__name">{{ name }}</h1>
        <div class="organization-item__description">Описание: {{ description }}</div>
        <div class="organization-item__founding_date">Модель {{ model }}</div>
        <div class="organization-item__address">Дата приобретения {{ purchase_date }}</div>
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
            <td>Модель</td>
            <td><input type="text" v-model="model"></td>
          </tr>
          <tr>
            <td>Дата приобретения</td>
            <td><input type="text" v-model="purchase_date"></td>
          </tr>
          <tr>
            <td>
              <button @click="resetData">Отмена</button>
            </td>
            <td>
              <button @click="saveData">Сохранить</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="tree-item__dots" @click.capture="edit"></div>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';
  import {SAVE_CAR} from '../../store/actions/organizationsData';

  export default {
    name: 'CarItem',
    mixins: [ItemMixin],
    props: ['carIndex'],
    data() {
      const org = this.$store.state.organizationsData.organizations.find(org => org.id === this.orgId);

      const car = org.car_park[this.carIndex];
      return {
        name: car.name,
        model: car.model,
        description: car.description,
        purchase_date: car.purchase_date
      };
    },
    methods: {
      resetData() {
        const org = this.$store.state.organizationsData.organizations.find(org => org.id === this.orgId);

        const car = org.car_park[this.carIndex];

        this.name = car.name;
        this.model = car.model;
        this.description = car.description;
        this.purchase_date = car.purchase_date;

        this.isEdit = false;
      },
      saveData() {
        this.$store.commit(SAVE_CAR, {
          id: this.orgId,
          name: this.name,
          model: this.model,
          description: this.description,
          purchase_date: this.purchase_date
        });
        this.isEdit = false;
        this.postToServer();
      }
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
