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
      _rawFooterContent
      contact {
        email
        phone
      }
    }
    routes: sanitySiteConfig {
      mainNavigation {
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
        const localizedSite = localize(site, [props.currentLocale, 'en'])
        const localizedRoutes = localize(routes, [props.currentLocale, 'en'])
        const slugs = localizedRoutes.mainNavigation.map(navItem => {
          return {
            slug: navItem.slug.current,
            label: navItem.page._rawTitle
          }
        })

        return (
          <>
            <Fonts />
            <Layout
              {...props}
              showNav={showNav}
              siteTitle={localizedSite.title}
              onHideNav={handleHideNav}
              onShowNav={handleShowNav}
              footerContent={localizedSite._rawFooterContent}
              contactInfo={localizedSite.contact}
              slugs={slugs}
            />
          </>
        )
      }}
    />
  )
}

export default LayoutContainer
