import React from 'react'
import styles from './header.module.css'
import {Link} from 'gatsby'
import Icon from '../icon'
import {cn} from '../../lib/helpers'
import BigCTA from './bigCTAs'

function scrollToTop () {
  document.body.scrollTop = document.documentElement.scrollTop = 0
}
export default ({onHideNav, onShowNav, showNav, slugs, currentLocale, languageList, ctas}) => (
  <>
    <nav className={styles.mobileNavContainer}>
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        Menu
      </button>
      <button type='button' onClick={scrollToTop} className={cn(styles.darkCTA, styles.backToTopButton)}>Back to Top</button>
    </nav>

    <nav className={cn(styles.mobileNav, showNav && styles.showNav)}>
      <nav className={styles.languageNav}>
        <ul className={styles.languageList}>{languageList}</ul>
      </nav>
      <nav className={styles.ctaNav}>
        <ul>
          {ctas.secondaryCTAs && ctas.secondaryCTAs.map(cta => <BigCTA cta={cta} classes={styles.secondaryCTA} />)}
          {ctas.mainCTA && <BigCTA cta={ctas.mainCTA} classes={styles.mainCTA} />}
        </ul>
        <ul>
          <li key='home'>
            <Link to={`/${currentLocale}`} className={styles.pageLink}>
              <span>Home</span>
              <Icon symbol='left-arrow' />
            </Link>
          </li>
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
