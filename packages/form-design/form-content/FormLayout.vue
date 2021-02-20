<!--
 * @Description: 表单布局
 * @Author: Libra
 * @Date: 2021-02-02 15:46:10
 * @LastEditors: Libra
-->
<template>
  <div class="drag-box">
    <div
      class="form-item-wrap"
      :class="{'active': currEditItem.key === formItem.key}"
      @click.stop="$emit('click-item', formItem)"
      >
      <!-- 删除按钮 -->
      <vs-icon
        class="trash-btn"
        icon="delete"
      />

      <!-- TODO: 栅格布局 -->
      <template v-if="formItem.type === 'grid'">
        <vs-row>
          <vs-col
            v-for="(col, index) in formItem.columns"
            :key="index"
            :vs-w="col.span"
          >
            <!-- <draggable
              class="grid-drag-wrap"
              tag="ul"
              :group="{name: 'form-draggable', pull: false, put: true}"
              v-model="col.list"
              :animation="660"
              :sort="true"
              @add="handleAddItem($event, col.list)"
              @start="handleStartItem($event, col.list)"
            >
              <form-layout
                v-for="item in col.list"
                :key="item.key"
                :formItem="item"
                :formLayout="formLayout"
                :currEditItem="currEditItem"
                @click-item="handleClickItem"
              />
            </draggable> -->

            <!-- 调用 form-content -->
            <form-content
              :listObj="col"
              :config="formLayout"
              :currEditItem="currEditItem"
              @updata-form-list="handleUpdateFormList"
              @change-curr-edit-item="handleChangeCurrEditItem"
            />

          </vs-col>
        </vs-row>
      </template>

      <!-- 普通布局， 宽度100% -->
      <template
        v-else
      >
        <form-node
          :formItem="formItem"
          :formLayout="formLayout"
        />
      </template>
    </div>
  </div>
</template>

<script>
// import draggable from 'vuedraggable'

import FormContent from './FormContent'
import FormNode from './FormNode'

export default {
  name: 'FormLayout',
  components: { FormContent, FormNode },
  props: {
    formItem: {
      type: Object,
      required: true
    },
    formLayout: {
      type: Object,
      required: true
    },
    currEditItem: { // 当前正在编辑的组件
      type: Object,
      required: true
    }
  },
  methods: {
    handleUpdateFormList(list) {
      console.log('list: ', list);

    },
    handleChangeCurrEditItem(item) {
      console.log('item: ', item);

    }
  }
}
</script>