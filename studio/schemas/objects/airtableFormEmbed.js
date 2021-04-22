export default {
  title: 'Airtable Form Embed',
  name: 'airtableFormEmbed',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: Rule =>
        Rule.required()
          .uri({
            scheme: ['https']
          })
          .custom(url => url.includes('airtable.com'))
    }
  ]
}
