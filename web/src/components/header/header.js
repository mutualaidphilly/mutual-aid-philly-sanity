import {Link} from 'gatsby'
import React, {useState, useEffect} from 'react'
import Icon from '../icon'
import {cn} from '../../lib/helpers'

import styles from './header.module.css'
import MobileNav from './mobileNav'
function useWindowSize () {
  const isClient = typeof window === 'object'

  function getSize () {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize () {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

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
  const classes = isMain ? styles.mainCTA : styles.secondaryCTA

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
  slugs,
  siteTitle,
  currentLocale,
  location,
  ctas
}) => {
  const size = useWindowSize()
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Link to={`/${currentLocale}`}>{siteTitle}</Link>
        {size.width < 450 && (
          <MobileNav
            onHideNav={onHideNav}
            onShowNav={onShowNav}
            showNav={showNav}
            slugs={slugs}
            currentLocale={currentLocale}
            ctaList={[
              ctas.secondaryCTAs && ctas.secondaryCTAs.map(cta => createCTA(cta)),
              ctas.mainCTA && createCTA(ctas.mainCTA, true)
            ]}
            languageList={createLanguageLinks(currentLocale, location.pathname)}
          />
        )}
        {
          size.width >= 450 && (
            <h1>nav@</h1>
          )
        }
      </div>
    </div>
  )
}

export default Header
