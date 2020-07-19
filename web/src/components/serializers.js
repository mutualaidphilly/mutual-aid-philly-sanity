import BaseBlockContent from '@sanity/block-content-to-react'
import Figure from './figure'
import React from 'react'
import * as Headings from './generic/heading'
import ArrowLink from './arrowLink/arrowLink.jsx'

const arrowLink = props => {
  return <ArrowLink {...props.mark} />
}

const serializers = {
  types: {
    figure: Figure,
    block: props => {
      const {style = 'normal'} = props.node
      switch (style) {
        case 'title':
        case 'h1':
          return <Headings.StyledH1 children={props.children} />
        case 'h2':
          return <Headings.StyledH2 children={props.children} />
        case 'h3':
          return <Headings.StyledH3 children={props.children} />
        case 'h4':
          return <Headings.StyledH4 children={props.children} />
        case 'arrowLink':
          return <a href='https://google.com'>{props.text} -></a>
        default:
          // Fall back to default handling
          return BaseBlockContent.defaultSerializers.types.block(props)
      }
    }
  },
  marks: {
    arrowLink
  }
}

export default serializers
