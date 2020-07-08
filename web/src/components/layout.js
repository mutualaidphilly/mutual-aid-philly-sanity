import React from 'react'
import Header from './header/header'

import '../styles/layout.css'
import styles from './layout.module.css'
import BlockContent from './block-content'

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  slugs,
  location,
  currentLocale,
  ctas,
  footerContent,
  contactInfo
}) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      slugs={slugs}
      currentLocale={currentLocale}
      location={location}
      ctas={ctas}
    />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerColumn}>
          <h1>Contact Us</h1>
          {contactInfo && <nav>
            <div>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            <div>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </div>
            <ul><li>Social Icon</li><li>Social Icon</li><li>Social Icon</li></ul>
          </nav>}
        </div>
        <div className={styles.footerColumn}>
          {footerContent && <BlockContent blocks={footerContent[0] || []} />}
        </div>
      </div>
    </footer>
  </>
)

export default Layout
