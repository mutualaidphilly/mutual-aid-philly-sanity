import React from 'react'
import {arrowLink, arrowContainer} from './arrowLink.module.css'

function ArrowLink ({href, children}) {
  return (
    <span className={arrowLink}>
      <a href={href}>{children}</a>
      <span className={arrowContainer}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='33'
          height='20'
          viewBox='0 0 33 33'
          aria-hidden='true'
        >
          <path
            d='M21.5771 24.8493L30.2842 16.1422M30.2842 16.1422L21.5216 7.37959M30.2842 16.1422L1.99995 16.1422'
            strokeWidth='3'
          />
        </svg>
      </span>
    </span>
  )
}

export default ArrowLink
