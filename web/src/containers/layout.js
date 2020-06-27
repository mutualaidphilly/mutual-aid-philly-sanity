import {graphql, StaticQuery} from 'gatsby'
import React, {useState} from 'react'
import Layout from '../components/layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteConfig {
      title
    }
    routes: allSanityRoute {
      edges {
        node {
          id
          slug {
            current
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
        console.log('site data', data.site)
        const {site, routes} = data
        const slugs = routes.edges.map(edge => edge.node.slug.current)

        return (
          <Layout
            {...props}
            showNav={showNav}
            siteTitle={site.title}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
            slugs={slugs}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
