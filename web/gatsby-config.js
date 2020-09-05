// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
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
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: true,
        prefixDefault: true
      }
    }
  ]
}
