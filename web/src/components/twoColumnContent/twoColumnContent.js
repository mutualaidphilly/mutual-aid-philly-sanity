import React from 'react'
import BlockContent from '../block-content'
import {column, twoColumnContentContainer} from './twoColumnContent.module.css'

function TwoColumnContent ({columnOneContent, columnTwoContent}) {
  return (
    <div className={twoColumnContentContainer}>
      <div className={column}>
        <BlockContent blocks={columnOneContent} />
      </div>
      <div className={column}>
        <BlockContent blocks={columnTwoContent} />
      </div>
    </div>
  )
}

export default TwoColumnContent
