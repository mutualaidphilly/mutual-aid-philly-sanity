import React from 'react'

function SocialLink ({href, svg, newTab = true}) {
  const anchorProps = newTab ? {
    target: '_blank',
    rel: 'noopener'
  } : {}

  return (
    <a href={href} {...anchorProps} >
      {svg}
    </a>
  )
}
export default SocialLink
