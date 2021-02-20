<!--
 * @Description: 表单主体
 * @Author: Libra
 * @Date: 2021-02-01 14:11:23
 * @LastEditors: Libra
-->

<template>
  <div class="form-conent">
    <draggable
      class="drag-wrap"
      tag="ul"
      group="form-draggable"
      v-model="formList"
      :animation="660"
      :sort="true"
      @add="handleAddItem($event, formList)"
      @start="handleStartItem($event, formList)"
    >
      <form-layout
        v-for="item in formList"
        :key="item.key"
        :formItem="item"
        :formLayout="config"
        :currEditItem="currEditItem"
        @click-item="handleClickItem"
      />
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import FormLayout from './FormLayout'

export default {
  name: 'FormContent',
  components: {
    draggable,
    FormLayout
  },
  data() {
    return {}
  },
  props: {
    listObj: { // 表单项目对象， 必须包含list中 { list: [], ... }
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    },
    currEditItem: { // 当前正在编辑的组件
      type: Object,
      required: true
    }
  },
  computed: {
    formList: {
      get: function () {
        return this.listObj.list;
      },
      set: function (v) {
        // deep clone
        const list = JSON.parse(JSON.stringify(v));
        this.$emit('updata-form-list', list);
      }
    }
  },
  methods: {
    handleAddItem(e, list) {
      // 更新当前正在编辑的组件
      this.$emit('change-curr-edit-item', list[e.newIndex]);
    },
    handleStartItem(e, list) {
      // 更新当前正在编辑的组件
      this.$emit('change-curr-edit-item', list[e.oldIndex]);
    },
    handleClickItem(item) {
      this.$emit('change-curr-edit-item', item);
    }
  }
}
</script>