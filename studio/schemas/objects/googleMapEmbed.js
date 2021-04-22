export default {
  title: 'Google Map Embed',
  name: 'googleMapEmbed',
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
          .custom(url => url.includes('google.com/maps'))
    }
  ]
}
