import {graphql, StaticQuery} from 'gatsby'
import React, {useState} from 'react'
import Layout from '../components/layout'
import Fonts from './font'
import { localize } from '../lib/helpers'

const query = graphql`
  query SiteConfigQuery {
    site: sanitySiteConfig {
      title
      _rawMainCta
      _rawSecondaryCtAs
    }
    routes: allSanityRoute {
      edges {
        node {
          id
          slug {
            current
          }
          page {
            _rawTitle
          }
        }
      }
    }
  }
`

function LayoutContainer (props) {
  const [showNav, setShowNav] = useState(false)

  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
    setShowNav(false)
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }

        const {site, routes} = data
        const localizedRoutes = localize(routes, [props.currentLocale, 'en'])
        const slugs = localizedRoutes.edges.map(edge => {
          return {
            slug: edge.node.slug.current,
            label: edge.node.page._rawTitle
          }
        })

        console.log('slugs', slugs)

        return (
          <>
            <Fonts />
            <Layout
              {...props}
              showNav={showNav}
              siteTitle={site.title}
              onHideNav={handleHideNav}
              onShowNav={handleShowNav}
              slugs={slugs}
            />
          </>
        )
      }}
    />
  )
}

export default LayoutContainer
