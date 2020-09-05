import React from 'react'
import {Link} from 'gatsby'
import styles from './desktop-nav.module.css'
import BigCTA from './bigCTAs'

export default ({slugs, currentLocale, languageList, ctas, siteTitle}) => {
  return (
    <nav className={styles.desktopNav} aria-label='Main navigation'>
      <div className={styles.navTop}>
        <Link className={styles.siteTitleLink} to={`/${currentLocale}`}>{siteTitle}</Link>
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
            {ctas.secondaryCTAs && ctas.secondaryCTAs.map(cta => <BigCTA cta={cta} classes={styles.secondaryCTA} />)}
            {ctas.mainCTA && <BigCTA cta={ctas.mainCTA} classes={styles.mainCTA} />}
          </ul>
        </nav>
      </div>
    </nav>)
}
