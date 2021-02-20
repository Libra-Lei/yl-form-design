<!--
 * @Description: 组件属性编辑面板
 * @Author: Libra
 * @Date: 2021-02-02 17:57:09
 * @LastEditors: Libra
-->

<template>
  <div class="property">
    <!-- title -->
    <div class="title">
      <h1>控件属性编辑</h1>
    </div>

    <!-- 表单区域 -->
    <div
      v-if="formItem.key"
      class="content"
    >
      <vs-divider>基础信息</vs-divider>

      <vs-input class="item" label="标签名称" placeholder="请输入" v-model="formItem.options.label"/>
      <vs-input class="item" label="数据字段" placeholder="请输入" v-model="formItem.field"/>

      <vs-divider>可选项信息</vs-divider>

      <!-- 如果是 下拉、单选、多选， 则可编辑可选项 -->
      <div
        v-if="formItem.options.options"
        class="item options"
      >
        <p class="title">选项数据</p>

        <div
          class="options-item"
          v-for="(item, index) in formItem.options.options"
          :key="index"
        >
          <vs-input class="options-item-item" placeholder="选项名称" v-model="item.label"/>
          <vs-input class="options-item-item" placeholder="选项值" v-model="item.value"/>
          <vs-button class="options-item-item" radius icon="delete" color="danger" size="small"></vs-button>
        </div>

        <vs-button color="primary" type="line">增加选项</vs-button>
      </div>

      <vs-divider>操作属性</vs-divider>

      <div class="item operation">
        <vs-checkbox v-model="formItem.options.disabled">禁用</vs-checkbox>
        <vs-checkbox v-if="formItem.type === 'select'" v-model="formItem.options.multiple">可多选</vs-checkbox>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentProperty',
  data() {
    return {}
  },
  props: {
    formItem: {
      type: Object,
      required: true
    }
  }
}
</script>