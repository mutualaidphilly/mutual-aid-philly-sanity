import {Link} from 'gatsby'
import React from 'react'

import styles from './header.module.css'
import MobileNav from './mobileNav'
import DesktopNav from './desktopNav'

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

const Header = ({
  onHideNav,
  onShowNav,
  showNav,
  slugs,
  siteTitle,
  currentLocale,
  location,
  ctas
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <MobileNav
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
          slugs={slugs}
          currentLocale={currentLocale}
          ctas={ctas}
          languageList={createLanguageLinks(currentLocale, location.pathname)}
        />
        <DesktopNav
          slugs={slugs}
          currentLocale={currentLocale}
          ctas={ctas}
          languageList={createLanguageLinks(currentLocale, location.pathname)}
          siteTitle={siteTitle}
        />
      </div>
    </div>
  )
}

export default Header
