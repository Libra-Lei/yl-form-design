<!--
 * @Description: 表单生成器
 * @Author: Libra
 * @Date: 2021-02-04 16:27:35
 * @LastEditors: Libra
-->
<template>
  <div id="b-form-wrap">
    <div
      class="form-item-wrap"
      v-for="(item, index) in formList"
      :key="index"
      >
      <!-- 普通布局， 宽度100% -->
      <template>
        <form-node
          :formItem="item"
          :formLayout="formConfig"
        />
      </template>

      <!-- TODO: 栅格布局 -->
    </div>
  </div>
</template>

<script>
import FormNode from './FormNode'

export default {
  name: 'YlFormBuild',
  components: { FormNode },
  props: {
    formJson: {
      type: Object,
      required: true
    }
  },
  computed: {
    formList() {
      return this.formJson.list;
    },
    formConfig() {
      return this.formJson.config;
    }
  }
}
</script>