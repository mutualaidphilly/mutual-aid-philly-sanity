import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const createLanguageLinks = (currentLocale, currentLocation) => {
  const supportedLocales = ['en', 'es', 'zh']

  return supportedLocales
    .filter(loc => loc !== currentLocale)
    .map(loc => {
      const url = currentLocation.replace(currentLocale, loc)
      return (
        <li key={url}>
          <Link to={url}>{loc}</Link>
        </li>
      )
    })
}

const Header = ({onHideNav, onShowNav, showNav, siteTitle, slugs, currentLocale, location}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to={`/${currentLocale}`}>{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>{createLanguageLinks(currentLocale, location.pathname)}</ul>
        <ul>
          {slugs &&
            slugs.map(slug => (
              <li key={slug}>
                <Link to={`/${currentLocale}/${slug}/`}>About</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
