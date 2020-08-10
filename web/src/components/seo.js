import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

function SEO ({description, lang, meta, keywords, title}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || (data.site && data.site.description) || ''
        const siteTitle = (data.site && data.site.title) || ''
        const siteLang = lang || 'en'

        return (
          <Helmet
            titleTemplate={`%s - ${siteTitle}`}
            defaultTitle={siteTitle}
            title={title}
          >
            <html lang={siteLang} />
            <meta name='description' content={metaDescription} />
            <meta name='og:title' content={siteTitle} />
            <meta name='og:description' content={metaDescription} />
            <meta name='og:type' content='website' />
            <meta name='twitter:title' content={siteTitle} />
            <meta name='twitter:description' content={metaDescription} />
            <meta name='twitter:card' content='summary' />
          </Helmet>
        )
      }}
    />
  )
}

// SEO.defaultProps = {
//   lang: 'en',
//   meta: [],
//   keywords: []
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired
// }

// export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteConfig {
      title
    }
  }
`

export default SEO
