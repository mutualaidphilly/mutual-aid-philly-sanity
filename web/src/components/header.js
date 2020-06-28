import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const createLanguageLinks = (currentLocale, currentLocation) => {
  const supportedLocales = [
    {locale: 'en', label: 'English'},
    {locale: 'es', label: 'Español'},
    {locale: 'zh', label: '中文'}
  ]

  return supportedLocales
    .filter(localeObj => localeObj.locale !== currentLocale)
    .map(localeObj => {
      const url = currentLocation.replace(currentLocale, localeObj.locale)
      return (
        <li key={url}>
          <Link to={url} className={styles.languageLink}>
            {localeObj.label}
          </Link>
        </li>
      )
    })
}

const createCTA = (cta, isMain) => {
  const classes = isMain ? styles.mainCTA : styles.cta

  return (
    <li>
      <a href={cta.href} className={classes}>
        {cta.text}
      </a>
    </li>
  )
}

const Header = ({
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  slugs,
  currentLocale,
  location,
  ctas
}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <Link to={`/${currentLocale}`}>{siteTitle}</Link>
      <nav className={styles.mobileNavContainer}>
        <button className={cn(styles.cta, styles.toggleNavButton)} onClick={showNav ? onHideNav : onShowNav}>
        Menu
        </button>
        <button className={cn(styles.darkCTA, styles.backToTopButton)}>
        Back to Top
        </button>
      </nav>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>

        <nav className={styles.languageNav}>
          <ul className={styles.languageList}>{createLanguageLinks(currentLocale, location.pathname)}</ul>
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
                  <Link to={`/${currentLocale}/${slug}/`}>About</Link>
                </li>
              ))}
          </ul>
        </nav>
        <button className={cn(styles.cta, styles.navClose, styles.darkCTA)} onClick={showNav ? onHideNav : onShowNav}>Close</button>
      </nav>
    </div>
  </div>
)

export default Header
