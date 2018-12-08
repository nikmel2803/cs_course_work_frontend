<template>
  <div class="tree-item">
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent" :class="labelClasses">
        <div v-if="nodes" class="fa" :class="iconClasses"></div>
        {{ label }}
      </div>
    </div>
    <tree-item
      v-if="showChildren"
      v-for="node in nodes"
      :nodes="node.nodes"
      :label="node.label"
      :depth="depth + 1"
    >
    </tree-item>
  </div>
</template>

<script>
  export default {
    name: 'TreeItem',
    props: ['nodes', 'label', 'depth'],
    data() {
      return {
        showChildren: false
      }
    },
    computed: {
      iconClasses() {
        return {
          'fa-plus-square-o': !this.showChildren,
          'fa-minus-square-o': this.showChildren
        }
      },
      labelClasses() {
        return {'has-children': this.nodes}
      },
      indent() {
        return {transform: `translate(${this.depth * 50}px)`}
      }
    },
    methods: {
      toggleChildren() {
        this.showChildren = !this.showChildren;
      }
    }
  }
</script>

<style lang="scss">
  .tree-item {
    .label-wrapper {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
      .has-children {
        cursor: pointer;
      }
    }
    .fa-plus-square-o{
      float: left;
      min-width: 10px;
      min-height: 10px;
      background-image: url("../assets/next.svg");
    }
    .fa-plus-square-o{

    }
  }
</style>
