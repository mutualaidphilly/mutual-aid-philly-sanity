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
      SocialIcon: FacebookIcon,
      label: 'Mutual Aid Philly Facebook'
    },
    // {
    //   href: 'https://www.facebook.com/mutualaidphilly/',
    //   SocialIcon: TwitterIcon
    // },
    {
      href: 'https://www.instagram.com/mutualaidphilly/',
      SocialIcon: InstagramIcon,
      label: 'Mutual Aid Philly Instagram'
    }
  ].map((item, index) => (
    <li key={index} className={styles.socialIconList__Item}>
      <a href={item.href} target='_blank' rel='noopener'>
        <span style={{
          position: 'absolute',
          left: '-10000px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}>{item.label}</span>
        <item.SocialIcon />
      </a>
    </li>))
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
              <ul className={styles.socialIconList} aria-label='Social media links'>
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
