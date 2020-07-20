import React from 'react'
import BlockContent from '../block-content'
import styles from './twoColumnContent.module.css'

function TwoColumnContent ({columnOneContent, columnTwoContent}) {
  return (
    <div className={styles.twoColumnContentContainer}>
      <div style={{backgroundColor: 'red'}}>
        <BlockContent blocks={columnOneContent} />
      </div>
      <div style={{backgroundColor: 'blue'}}>
        <BlockContent blocks={columnTwoContent} />
      </div>
    </div>
  )
}

export default TwoColumnContent
