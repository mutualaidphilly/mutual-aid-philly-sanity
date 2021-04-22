const path = require('path')
const envString = `${process.env.NODE_ENV || 'development'}`
const pathString = path.resolve(process.cwd(), `./.env.${envString}`)

require('dotenv').config({
  path: pathString
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: 'https://mutualaidphilly.com',
    languages: {
      langs: ['en', 'es', 'zh'],
      defaultLangKey: 'en'
    }
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        ...clientConfig.sanity,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: true,
        prefixDefault: true
      }
    }
  ]
}
