<!--
 * @Description: 表单生成器
 * @Author: Libra
 * @Date: 2021-02-04 16:27:35
 * @LastEditors: Libra
-->
<template>
  <div id="b-form-wrap">
    <form-layout
      :listObj="formJson"
      :config="formConfig"
    />
  </div>
</template>

<script>
import FormLayout from './FormLaout'

export default {
  name: 'YlFormBuild',
  components: { FormLayout },
  props: {
    formJson: {
      type: Object,
      required: true
    }
  },
  computed: {
    formConfig() {
      return this.formJson.config;
    }
  }
}
</script>