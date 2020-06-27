import React from 'react'
import {Link} from 'gatsby'
import BlockContent from './block-content'
import Container from './container'

import styles from './project.module.css'

function Project (props) {
  const {_rawContent, title} = props
  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawContent && <BlockContent blocks={_rawContent[0] || []} />}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Project
