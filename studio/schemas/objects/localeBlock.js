import Tabs from 'sanity-plugin-tabs'
import supportedLanguages from './locales'
import {StyledH1} from '../../../web/src/components/generic/heading'

export default {
  title: 'title',
  name: 'localeBlock',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id
  })),
  options: {
    layout: 'object'
  },
  fields: supportedLanguages.map(lang => ({
    name: lang.id,
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          {
            title: 'Title',
            value: 'title',
            blockEditor: {
              render: StyledH1
            }
          },
          {title: 'Normal', value: 'normal'},
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'Quote', value: 'blockquote'}
        ],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
            {title: 'Code', value: 'code'}
          ],
          annotations: [
            {type: 'arrowLink'}
          ]
        }
      },
      {type: 'hr'}
    ],
    fieldset: lang.id
  }))
}
