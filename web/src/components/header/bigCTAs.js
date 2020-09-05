import React from 'react'

function BigCTA ({cta, classes}) {
  return (
    <li>
      <a href={cta.href} className={classes} target='_blank' rel='noopener'>
        {cta.text}
      </a>
    </li>
  )
}

export default BigCTA
