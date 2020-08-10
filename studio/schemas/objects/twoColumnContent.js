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
  },
  preview: {
    select: {
      columnOne: 'ColumnOne.0.en.0.children.0.text',
      columnTwo: 'ColumnTwo.0.en.0.children.0.text'
    },
    prepare (selection) {
      return {
        title: `Columns: | ${selection.columnOne}  ||  ${selection.columnTwo} |`
      }
    }
  }
}
