import Tabs from 'sanity-plugin-tabs'
import supportedLanguages from './locales'

export default {
  title: 'Content',
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
            {type: 'externalLink'},
            {type: 'arrowLink'},
          ]
        }
      },
      {type: 'hr'},
      {type : 'googleFormEmbed'},
    ],
    fieldset: lang.id
  }))
}
