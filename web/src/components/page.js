import React from 'react'
import BlockContent from './block-content'
import Container from './container'
import styles from './page.module.css'
const renderOneOrMoreBlocks = rawContent => {
  return rawContent.map(block => <BlockContent blocks={block || []} />)
}
function Page (props) {
  const {_rawContent, title} = props
  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {renderOneOrMoreBlocks(_rawContent)}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Page
