import Tabs from 'sanity-plugin-tabs'
const columnNames = ['ColumnOne', 'ColumnTwo']
export default {
  title: 'Two Column Section',
  name: 'twoColumnContent',
  type: 'object',
  inputComponent: Tabs,
  options: {
    layout: 'object'
  },
  fields: columnNames.map(columnName => ({
    name: columnName,
    type: 'array',
    of: [
      {
        type: 'localeBlock'
      }
    ]
  })),
  blockEditor: {
    icon: () => '⚮'
  }
}
