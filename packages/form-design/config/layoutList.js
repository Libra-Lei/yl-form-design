/*
 * @Description: 布局配置
 * @Author: Libra
 * @Date: 2021-02-01 13:11:19
 * @LastEditors: Libra
 */
export default [
  // TODO: 待添加布局功能
  {
    type: 'divider',
    label: '分割线',
    icon: 'power_input',
    options: {
      text: null
    },
    key: '',
    model: ''
  },
  {
    type: 'grid',
    label: '栅格布局',
    icon: 'grid_view',
    options: {},
    columns: [
      {
        key: '',
        span: 6,
        list: []
      },
      {
        key: '',
        span: 6,
        list: []
      }
    ],
    key: '',
    model: ''
  }
]