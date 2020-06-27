
export default {
  title: 'Social Media URL',
  name: 'socialMediaLink',
  type: 'object',
  fields: [
    {
        title : "label",
        name: "text",
        type: "string"
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http'],
        }),
    },
    {
        title : 'Icon',
        name: "icon",
        type: "image"
    }
  ]
};