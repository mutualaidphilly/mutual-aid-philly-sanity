import React from 'react'
import {graphql} from 'gatsby'
import { localize } from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlockContent from '../components/block-content'

// import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query IndexPageQuery {
    site:sanitySiteConfig {
      frontpage {
        _rawTitle
        _rawContent
      }
    }    
  }
`

const IndexPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const localizedData = localize(site, ['es', 'en'])
  const title = localizedData.frontpage._rawTitle
  const _rawContent = localizedData.frontpage._rawContent

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
        {_rawContent && <BlockContent blocks={_rawContent[0] || []} />}
      </Container>
    </Layout>
  )
}

export default IndexPage
