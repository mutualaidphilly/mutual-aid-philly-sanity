import React from 'react'
import BlockContent from '../block-content'
import styles from './twoColumnContent.module.css'

function TwoColumnContent ({columnOneContent, columnTwoContent}) {
  return (
    <div className={styles.twoColumnContentContainer}>
      <div className={styles.column}>
        <BlockContent blocks={columnOneContent} />
      </div>
      <div className={styles.column}>
        <BlockContent blocks={columnTwoContent} />
      </div>
    </div>
  )
}

export default TwoColumnContent
