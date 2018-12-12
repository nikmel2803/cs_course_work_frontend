<template>
  <div class="organization-edit">
    <div class="organization-edit__dialog">
      <label>Название компании</label> <input type="text" v-model="data.name"> <br>
      <label>Описание</label> <input type="text" v-model="data.description"> <br>
      <label>Дата основания</label> <input type="text" v-model="data.founding_date">
      <button @click="$emit('endEdit')">Закрыть</button>
      <button @click="saveData">Сохранить</button>
    </div>
  </div>
</template>

<script>
  import {SAVE_DATA} from '../../store/actions/organizationsData';

  export default {
    name: 'OrganizationEdit',
    props: ['data'],
    methods: {
      async saveData() {
        try {
          await this.$store.dispatch(SAVE_DATA);
        } finally {
          this.$emit('endEdit');
        }
      }
    }
  };
</script>

<style lang="scss">
  .organization-edit {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: rgba(105, 105, 105, 0.7);

    &__dialog {
      color: #000;
      padding: 10px;
      background-color: #ffffff;
      margin: auto;
    }
  }
</style>
