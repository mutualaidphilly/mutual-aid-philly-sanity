
export default {
    title: 'Google Form Embed',
    name: 'googleFormEmbed',
    type: 'object',
    fields: [
      {
        title: 'URL',
        name: 'url',
        type: 'url',
        validation: Rule =>
          Rule.uri({
            scheme: ['https'],
          }),
      },
    ]
  };