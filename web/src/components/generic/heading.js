import React from 'react'
import {heading1, heading2, heading3, heading4} from './heading.module.css'
const GithubSlugger = require('github-slugger')
const slugger = new GithubSlugger()

function createSlug (children) {
  slugger.reset()
  // The following ternery accounts for headings with emphasis, bold, and other Sanity marks.
  // If it's normal content, use it. Otherwise, get the nested content.
  const text = (typeof children[0] === 'string' ? children : children[0].props.node.children).join()
  return slugger.slug(text)
}

function createHeading (headingLevel, classes, {children}) {
  const Title = headingLevel
  const slug = createSlug(children)

  return (<Title className={classes} id={slug}>
    {children}
  </Title>)
}

export const StyledH1 = props => createHeading('h1', heading1, props)
export const StyledH2 = props => createHeading('h2', heading2, props)
export const StyledH3 = props => createHeading('h3', heading3, props)
export const StyledH4 = props => createHeading('h4', heading4, props)
