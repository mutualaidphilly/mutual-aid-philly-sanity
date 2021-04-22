import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import clientConfig from '../../client-config'
import serializers from './serializers'
import {content} from './page.module.css'

const BlockContent = ({blocks}) => {
  return <BaseBlockContent className={content} blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
}

export default BlockContent
