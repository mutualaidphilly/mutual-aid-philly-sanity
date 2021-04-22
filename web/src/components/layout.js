import React from 'react'
import Header from './header/header'

import '../styles/layout.css'
import {content} from './layout.module.css'
import Footer from './footer/Footer'

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
    <div className={content}>{children}</div>
    <Footer contactInfo={contactInfo} footerContent={footerContent} />
  </>
)

export default Layout
