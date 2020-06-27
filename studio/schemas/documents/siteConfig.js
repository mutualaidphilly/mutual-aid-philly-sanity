import link from '../objects/link'

export default {
  name: 'site-config',
  title: 'Site Configuration',
  type: 'document',
  fields: [
    {name: 'title', title: 'Site Title', type: 'string'},
    {
      name: 'frontpage',
      title: 'Front Page',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: {type: 'page'}
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: Rule => [Rule.unique().error('You have duplicate menu items')],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'route'}]
        }
      ]
    },

    {
      title: 'Main Call To Action Link',
      name: 'mainCTA',
      description: 'Add URLS for main call to actions',
      type: 'link'
    },
    {
      title: 'Secondary Call To Action Links',
      name: 'secondaryCTAs',
      description: 'Add URLS for main call to actions',
      validation: Rule => [Rule.unique().error('You have duplicate menu items')],
      type: 'array',
      of: [
        {
          type: 'link'
        }
      ]
    },
    {
      title: 'Contact Info',
      name: 'contact',
      type: 'contact'
    },
    {
      title: 'Social Media',
      name: 'socialLinks',
      type: 'array',
      of: [
        {
          type: 'socialMediaLink'
        }
      ]
    },
    {
      title: 'Footer Content',
      name: 'footerContent',
      type: 'array',
      of: [{type: 'localeBlock'}],
      preview: {
        select: {
          title: 'title'
        }
      }
    }
  ]
}
