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
        console.log({title, siteTitle, data})
        return (
          <Helmet
            titleTemplate={`%s - ${siteTitle}`}
            defaultTitle={siteTitle}
            title={title}
          >
            <meta name='description' content={metaDescription} />
            <meta name='og:title' content={siteTitle} />
            <meta name='og:description' content={metaDescription} />
            <meta name='og:type' content='website' />
            <meta name='twitter:title' content={siteTitle} />
            <meta name='twitter:description' content={metaDescription} />
            <meta name='twitter:card' content='summary' />
        </Helmet>
        //   <Helmet
        //     // htmlAttributes={{lang}}
        //     title={siteTitle}
        //     titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
        //     meta={[
        //       {
        //         name: 'description',
        //         content: metaDescription
        //       },
        //       {
        //         property: 'og:title',
        //         content: title
        //       },
        //       {
        //         property: 'og:description',
        //         content: metaDescription
        //       },
        //       {
        //         property: 'og:type',
        //         content: 'website'
        //       },
        //       {
        //         name: 'twitter:card',
        //         content: 'summary'
        //       },
        //       {
        //         name: 'twitter:title',
        //         content: title
        //       },
        //       {
        //         name: 'twitter:description',
        //         content: metaDescription
        //       }
        //     ]
        //       .concat(
        //         keywords && keywords.length > 0
        //           ? {
        //             name: 'keywords',
        //             content: keywords.join(', ')
        //           }
        //           : []
        //       )
        //       .concat(meta)}
        //   />
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
