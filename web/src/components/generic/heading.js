import React from 'react'
import styles from './heading.module.css'

export const StyledH1 = props => (<h1 className={styles.heading1}>{props.children}</h1>)
export const StyledH2 = props => (<h2 className={styles.heading2}>{props.children}</h2>)
export const StyledH3 = props => (<h3 className={styles.heading3}>{props.children}</h3>)
export const StyledH4 = props => (<h4 className={styles.heading4}>{props.children}</h4>)
