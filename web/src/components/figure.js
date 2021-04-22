import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

import {root} from './figure.module.css'

export default ({node}) => {
  if (!node.asset) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(node.asset._ref, {maxWidth: 675}, clientConfig.sanity)

  return (
    <figure className={root}>
      <GatsbyImage image={fluidProps} alt={node.alt} />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </figure>
  )
}
