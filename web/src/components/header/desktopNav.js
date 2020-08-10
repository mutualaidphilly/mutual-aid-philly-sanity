import React from 'react'
import {Link} from 'gatsby'
import styles from './desktop-nav.module.css'
const createCTA = (cta, isMain) => {
  const classes = isMain ? styles.mainCTA : styles.secondaryCTA

  return (
    <li key={cta.href}>
      <a href={cta.href} className={classes}>
        {cta.text}
      </a>
    </li>
  )
}
export default ({slugs, currentLocale, languageList, ctas, siteTitle}) => {
  return (<nav className={styles.desktopNav}>

    <div className={styles.navTop}>
      <Link to={`/${currentLocale}`}>{siteTitle}</Link>
      <nav className={styles.languageNav} aria-label='Language Selection'>
        <ul className={styles.languageList}>
          {languageList}
        </ul>
      </nav>
    </div>
    <div className={styles.navBottom}>
      <nav className={styles.mainMenu} aria-label='Main Menu'>
        <ul className={styles.mainMenuList}>
          {slugs &&
        slugs.map(slug => (
          <li key={slug.label}>
            <Link to={`/${currentLocale}/${slug.slug}/`} className={styles.mainNavItem}>
              <span>{slug.label}</span>
            </Link>
          </li>
        ))}
        </ul>
      </nav>
      <nav className={styles.ctaMenu} aria-label='Help Mutual Aid Philly'>
        <ul className={styles.ctaList}>
          {ctas.secondaryCTAs && ctas.secondaryCTAs.map(cta => createCTA(cta))}
          {ctas.mainCTA && createCTA(ctas.mainCTA, true)}
        </ul>
      </nav>
    </div>
  </nav>)
}
