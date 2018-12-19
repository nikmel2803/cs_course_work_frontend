<template>
  <div class="tree-item employee-item">
    <div class="tree-item__label-wrapper">
      <div @click="toggleChildren" v-if="!showChildren">{{ data.last_name }} {{ data.first_name }} {{ data.patronymic }}</div>
      <div v-else-if="!isEdit" @click="toggleChildren">
        <div v-for="(field, key) in $scheme.employees" v-if="!(field.show===false)">{{field.name}}: {{data[key]}}</div>
      </div>
      <div v-else>
        <table>
          <tr v-for="(field, key) in $scheme.employees" v-if="!(field.show===false)">
            <td>{{field.name}}</td>
            <td>
              <input v-if="!(field.available_values)" type="text" v-model="data[key]">
              <select v-else v-model="data[key]">
                <option disabled value="">{{field.name}}</option>
                <option v-bind:value="value.value" v-for="value in field.available_values">{{value.name}}</option>
              </select>
            </td>
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
    <div class="tree-item__remove" @click.capture="$emit('removeEmployee')"></div>
  </div>
</template>

<script>
  import ItemMixin from './ItemMixin';

  export default {
    name: 'EmployeeItem',
    mixins: [ItemMixin],
    methods: {
      saveData() {
        this.isEdit = false;
        this.$eventHub.$emit('save');      }
    }
  };
</script>

<style lang="scss">
  .employee-item {
    &__name {
      font-size: 20px;
      margin: 0;
    }
  }
</style>
