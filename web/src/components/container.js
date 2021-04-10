import React from 'react'

import {root} from './container.module.css'

const Container = ({children}) => {
  return <div className={root}>{children}</div>
}

export default Container
