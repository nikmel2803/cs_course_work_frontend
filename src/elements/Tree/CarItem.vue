<template>
  <div class="tree-item car-item">
    <div class="tree-item__label-wrapper">
      <div @click="toggleChildren" v-if="!showChildren">{{ data.name }}</div>
      <div v-else-if="!isEdit" @click="toggleChildren">
        <h1 class="organization-item__name">{{ data.name }}</h1>
        <div class="organization-item__status">Статус: {{ data.status }}</div>
        <div class="organization-item__description">Описание: {{ data.description }}</div>
        <div class="organization-item__founding_date">Модель {{ data.model }}</div>
        <div class="organization-item__address">Дата приобретения {{ data.purchase_date }}</div>
      </div>
      <div v-else>
        <table>
          <tr>
            <td>Название</td>
            <td><input type="text" :disabled="user.access === 2" v-model="data.name"></td>
          </tr>
          <tr>
            <td>Описание</td>
            <td><input type="text" :disabled="user.access === 2" v-model="data.description"></td>
          </tr>
          <tr>
            <td>Модель</td>
            <td><input type="text" :disabled="user.access === 2" v-model="data.model"></td>
          </tr>
          <tr>
            <td>Статус</td>
            <td><input type="text" :disabled="!canEdit" v-model="data.status"></td>
          </tr>
          <tr>
            <td>Водители</td>
            <td><input type="text" :disabled="user.access === 2" v-model="data.drivers"></td>
          </tr>
          <tr>
            <td>Дата приобретения</td>
            <td><input type="text" :disabled="user.access === 2" v-model="data.purchase_date"></td>
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
    <div class="tree-item__dots" @click.capture="edit"></div>
    <div class="tree-item__remove" v-if="user.access<2" @click.capture="$emit('removeCar')"></div>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';

  export default {
    name: 'CarItem',
    mixins: [ItemMixin],
    methods: {
      saveData() {
        this.isEdit = false;
        this.$eventHub.$emit('save');
      }
    },
    computed: {
      canEdit() {
        if (this.user.access < 2) return true;
        if (this.data.drivers.includes(this.user.login)) return true;
        return false;
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
