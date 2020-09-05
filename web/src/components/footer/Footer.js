import React from 'react'
import styles from '../layout.module.css'
import BlockContent from '../block-content'
import FacebookIcon from './FacebookIcon'
import TwitterIcon from './TwitterIcon'
import InstagramIcon from './InstagramIcon'

function Footer ({contactInfo, footerContent}) {
  const socialLinksList = [
    {
      href: 'https://www.facebook.com/mutualaidphilly/',
      SocialIcon: FacebookIcon
    },
    // {
    //   href: 'https://www.facebook.com/mutualaidphilly/',
    //   SocialIcon: TwitterIcon
    // },
    {
      href: 'https://www.instagram.com/mutualaidphilly/',
      SocialIcon: InstagramIcon
    }
  ].map((item, index) => <li key={index} className={styles.socialIconList__Item}><a href={item.href} target='_blank' rel='noopener'><item.SocialIcon /></a></li>)
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerColumn}>
          <h1>Contact Us</h1>
          {contactInfo && (
            <nav>
              <div>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
              <ul className={styles.socialIconList}>
                {socialLinksList}
              </ul>
            </nav>
          )}
        </div>
        <div className={styles.footerColumn}>
          {footerContent && <BlockContent blocks={footerContent[0] || []} />}
        </div>
      </div>
    </footer>
  )
}

export default Footer
