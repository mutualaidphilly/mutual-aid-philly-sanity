import React from 'react'

import Layout from '../containers/layout'
import SEO from '../components/seo'
// import SEO from '../components/seo'

const NotFoundPage = ({location}) => (
  <>
    <SEO />
    <Layout location={location} ctas={{}}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
)

export default NotFoundPage
