import BaseBlockContent from '@sanity/block-content-to-react'
import Figure from './figure'
import React from 'react'
import * as Headings from './generic/heading'
import ArrowLink from './arrowLink/arrowLink.jsx'
import TwoColumnContent from './twoColumnContent/twoColumnContent'

const arrowLink = ({mark, children}) => {
  return <ArrowLink href={mark.href}>{children}</ArrowLink>
}

const serializers = {
  types: {
    image: Figure,
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
        default:
          // Fall back to default handling
          return BaseBlockContent.defaultSerializers.types.block(props)
      }
    },
    hr: () => <hr />,
    googleFormEmbed: ({node: {url}}) => url && <iframe src={`${url}/viewform?embedded=true`} style={{width: '100%'}} height='462' frameBorder='0' marginHeight='0' marginWidth='0'>Loading…</iframe>,
    airtableFormEmbed: ({node: {url}}) => url && <iframe src={`${url}`} style={{width: '100%', height: '60vh', border: 'none', marginTop: '1rem'}}>Loading…</iframe>,
    googleMapEmbed: ({node: {url}}) => url && <iframe src={`${url}`} style={{width: '100%', height: '60vh', border: 'none', marginTop: '1rem'}}>Loading…</iframe>
  },
  marks: {
    arrowLink,
    externalLink: ({mark, children}) => {
      const {blank, href} = mark
      return blank
        ? <a href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

serializers.types.twoColumnContent = props => {
  return (<TwoColumnContent
    columnOneContent={props.node.ColumnOne.flat()}
    columnTwoContent={props.node.ColumnTwo.flat()}
  />
  )
}

export default serializers
