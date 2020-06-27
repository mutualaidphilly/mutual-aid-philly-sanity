import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Page from '../components/project'
// import SEO from '../components/seo'
import Layout from '../containers/layout'
import {localize} from '../lib/helpers'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    pageData: sanityPage(id: { eq: $id }) {
      _rawTitle
      id
      _rawContent
    }
  }
`

const ProjectTemplate = props => {
  const {data, errors, pageContext} = props
  const page = data && data.pageData
  const localizedPage = localize(page, ['es', 'en'])
  const {_rawTitle: title, _rawContent} = localizedPage
  return (
    <Layout currentLocale={pageContext.locale}>
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {localizedPage && <Page title={title} _rawContent={_rawContent} />}
    </Layout>
  )
}

export default ProjectTemplate
