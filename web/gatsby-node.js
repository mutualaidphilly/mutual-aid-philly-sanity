
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createPages (graphql, actions, reporter) {
  const {createPage} = actions
  const homePage = await graphql(`
    {
      sanitySiteConfig {
        frontpage {
          id
        }
      }
    }
  `)
  const homePageID = homePage.data.sanitySiteConfig.frontpage.id

  reporter.info(`Home page id is: ${homePageID}`)
  const result = await graphql(`
    {
      allSanityPage(filter: {id: {ne: "${homePageID}"}}) {
        nodes {
          _rawTitle
          id
          slug
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageNodes = (result.data.allSanityPage || {}).nodes || []

  pageNodes
    .forEach((node) => {
      const id = node.id
      const slug = node.slug
      const path = `/${slug}/`

      reporter.info(`Page Info:`)
      reporter.info(`Title: ${slug}`)
      reporter.info(`Id: ${id}`)
      reporter.info(`Creating page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/project.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createPages(graphql, actions, reporter)
}
