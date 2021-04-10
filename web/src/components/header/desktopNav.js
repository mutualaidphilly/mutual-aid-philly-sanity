import React from 'react'
import {Link} from 'gatsby'
import {desktopNav, navTop, siteTitleLink, languageNav, languageList as languageListStyles, navBottom, mainMenu, mainMenuList, mainNavItem, ctaMenu, ctaList, secondaryCTA, mainCTA} from './desktop-nav.module.css'
import BigCTA from './bigCTAs'

export default ({slugs, currentLocale, languageList, ctas, siteTitle}) => {
  return (
    <nav className={desktopNav} aria-label='Main navigation'>
      <div className={navTop}>
        <Link className={siteTitleLink} to={`/${currentLocale}`}>{siteTitle}</Link>
        <nav className={languageNav} aria-label='Language Selection'>
          <ul className={languageListStyles}>
            {languageList}
          </ul>
        </nav>
      </div>
      <div className={navBottom}>
        <nav className={mainMenu} aria-label='Main Menu'>
          <ul className={mainMenuList}>
            {slugs &&
        slugs.map(slug => (
          <li key={slug.label}>
            <Link to={`/${currentLocale}/${slug.slug}/`} className={mainNavItem}>
              <span>{slug.label}</span>
            </Link>
          </li>
        ))}
          </ul>
        </nav>
        <nav className={ctaMenu} aria-label='Help Mutual Aid Philly'>
          <ul className={ctaList}>
            {ctas.secondaryCTAs && ctas.secondaryCTAs.map(cta => <BigCTA cta={cta} classes={secondaryCTA} />)}
            {ctas.mainCTA && <BigCTA cta={ctas.mainCTA} classes={mainCTA} />}
          </ul>
        </nav>
      </div>
    </nav>)
}
