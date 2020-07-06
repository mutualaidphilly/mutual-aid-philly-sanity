import React from 'react'
import styles from './header.module.css'
import {Link} from 'gatsby'
import Icon from '../icon'

import {cn} from '../../lib/helpers'
const createCTA = (cta, isMain) => {
  const classes = isMain ? styles.mainCTA : styles.secondaryCTA

  return (
    <li>
      <a href={cta.href} className={classes}>
        {cta.text}
      </a>
    </li>
  )
}
export default ({onHideNav, onShowNav, showNav, slugs, currentLocale, languageList, ctas}) => (
  <>
    <nav className={styles.mobileNavContainer}>
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        Menu
      </button>
      <button className={cn(styles.darkCTA, styles.backToTopButton)}>Back to Top</button>
    </nav>

    <nav className={cn(styles.nav, showNav && styles.showNav)}>
      <nav className={styles.languageNav}>
        <ul className={styles.languageList}>{languageList}</ul>
      </nav>
      <nav className={styles.ctaNav}>
        <ul>
          {ctas.secondaryCTAs && ctas.secondaryCTAs.map(cta => createCTA(cta))}
          {ctas.mainCTA && createCTA(ctas.mainCTA, true)}
        </ul>
        <ul>
          {slugs &&
            slugs.map(slug => (
              <li key={slug}>
                <Link to={`/${currentLocale}/${slug.slug}/`} className={styles.pageLink}>
                  <span>{slug.label}</span>
                  <Icon symbol='left-arrow' />
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <button
        className={cn(styles.cta, styles.navClose, styles.darkCTA)}
        onClick={showNav ? onHideNav : onShowNav}
      >
        Close
      </button>
    </nav>
  </>
)
