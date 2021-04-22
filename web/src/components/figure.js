import React from 'react'
import Image from "gatsby-plugin-sanity-image"
// import clientConfig from '../../client-config'

import {root} from './figure.module.css'

export default ({node}) => {

  if (!node) {
    return null
  }

  return (
    <figure className={root}>
      <Image {...node} style={{maxWidth : '100%'}}/>
    </figure>
  )
}
