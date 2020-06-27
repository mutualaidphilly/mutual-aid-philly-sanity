// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import route from './documents/route'
import contentPage from './documents/contentPage'
import siteConfig from './documents/siteConfig'

// Object types
import localeString from './objects/localeString'
import localeBlock from './objects/localeBlock'
import link from './objects/link'
import socialMediaLink from './objects/socialMediaLink'
import contact from './objects/contact'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'mutual-aid-philly',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    link,
    socialMediaLink,
    localeString,
    localeBlock,
    contact,
    // The following are document types which will appear
    // in the studio.
    route,
    contentPage,
    siteConfig
  ])
})
