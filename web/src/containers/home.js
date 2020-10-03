import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {localize} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'

import Layout from '../containers/layout'
import Page from '../components/page'
import SEO from '../components/seo'

const HomeWrapper = props => {
  const {errors, locale, location} = props
  
  const data = useStaticQuery(graphql`
  query IndexPageQuery {
    site:sanitySiteConfig {
      frontpage {
        _rawTitle
        _rawContent
        description
      }
      _rawMainCta
      _rawSecondaryCtAs
    }    
  }
`)
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const localizedData = localize(site, locale)
  const {_rawContent, _rawTitle, description} = localizedData.frontpage;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <>
      <SEO lang={locale[0]} description={description} />
      <Layout currentLocale={locale[0]} location={location} ctas={{mainCTA: localizedData._rawMainCta, secondaryCTAs: localizedData._rawSecondaryCtAs}}>
        {_rawContent && <Page title={_rawTitle} _rawContent={_rawContent} />}
      </Layout>
    </>
  )
}

export default HomeWrapper
