import React from 'react'
import BlockContent from './block-content'
import Container from './container'
import {root, grid, mainContent} from './page.module.css'
const renderOneOrMoreBlocks = rawContent => {
  return rawContent.map((block, index) => <BlockContent key={index} blocks={block || []} />)
}
function Page (props) {
  const {_rawContent, title} = props
  return (
    <main className={root}>
      <Container>
        <div className={grid}>
          <div className={mainContent}>
            {renderOneOrMoreBlocks(_rawContent)}
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Page
