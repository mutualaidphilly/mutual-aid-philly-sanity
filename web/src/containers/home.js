import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {localize} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlockContent from '../components/block-content'

// import SEO from '../components/seo'
import Layout from '../containers/layout'

const HomeWrapper = props => {
  const {errors, locale} = props
  const data = useStaticQuery(graphql`
  query IndexPageQuery {
    site:sanitySiteConfig {
      frontpage {
        _rawTitle
        _rawContent
      }
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
  console.log('localized Data', localizedData)
  const title = localizedData.frontpage._rawTitle
  const _rawContent = localizedData.frontpage._rawContent

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout currentLocale={locale[0]}>
      <Container>
        <h1>{title}</h1>
        <p>{JSON.stringify(props)}</p>
        {_rawContent && <BlockContent blocks={_rawContent[0] || []} />}
      </Container>
    </Layout>
  )
}

export default HomeWrapper
