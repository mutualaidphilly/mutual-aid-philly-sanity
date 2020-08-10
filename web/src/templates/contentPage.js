import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Page from '../components/page'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {localize} from '../lib/helpers'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    pageData: sanityPage(id: { eq: $id }) {
      id
      description
      _rawTitle
      _rawContent
    }
    site:sanitySiteConfig {
      _rawMainCta
      _rawSecondaryCtAs
    }   
  }
`

const ProjectTemplate = props => {
  const {data, errors, pageContext, location} = props
  const localizedData = localize(data, [pageContext.locale, 'en'])
  const localizedPage = localizedData && localizedData.pageData
  const localizedSite = localizedData && localizedData.site
  
  const {_rawTitle: title, _rawContent} = localizedPage
  console.log(pageContext.locale)
  return (
    <>
      <SEO description={localizedPage.description} lang={pageContext.locale} title={title} />
      <Layout currentLocale={pageContext.locale} location={location} ctas={{mainCTA: localizedSite._rawMainCta, secondaryCTAs: localizedSite._rawSecondaryCtAs}}>
        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}
        {localizedPage && <Page title={title} _rawContent={_rawContent} />}
      </Layout>
    </>
  )
}

export default ProjectTemplate
