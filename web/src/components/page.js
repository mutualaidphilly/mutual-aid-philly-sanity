import React from 'react'
import BlockContent from './block-content'
import Container from './container'
import styles from './page.module.css'

function Page (props) {
  const {_rawContent, title} = props
  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {_rawContent && <BlockContent blocks={_rawContent[0] || []} />}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Page
