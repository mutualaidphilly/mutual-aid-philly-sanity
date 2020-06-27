
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const supportedLanguages = ['es', 'en', 'zh']
const createLocalePage = (page, createPage) => {
  const {context, ...rest} = page
  createPage({
    ...rest,
    context: {
      ...context,
      locale: process.env.LOCALE
    }
  })
  if (supportedLanguages.length) {
    supportedLanguages.forEach(code => {
      const {path, context, ...rest} = page
      createPage({
        ...rest,
        path: `/${code}${path}`,
        // every page for each language gets the language code as a prefix
        // to its path: "/es/blog/<some-slug>" for example
        context: {
          ...context,
          locale: code
        }
      })
    })
  }
}

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
        component: require.resolve('./src/templates/contentPage.js'),
        context: {id}
      })

      createLocalePage({
        path,
        component: require.resolve('./src/templates/contentPage.js'),
        context: {id}
      }, createPage)
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createPages(graphql, actions, reporter)
  
}
