export default {
  title: 'URL',
  name: 'externalLink',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel']
        })
    }
  ],
  blockEditor: {
    icon: () => '🔗'
  }
}
