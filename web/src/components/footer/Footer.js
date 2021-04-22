import React from 'react'
// eslint-disable-next-line camelcase
import {socialIconList, socialIconList__Item, footer, footerWrapper, footerColumn} from '../layout.module.css'
import BlockContent from '../block-content'
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'

function Footer ({contactInfo, footerContent}) {
  const socialLinksList = [
    {
      href: 'https://www.facebook.com/mutualaidphilly/',
      SocialIcon: FacebookIcon,
      label: 'Mutual Aid Philly Facebook'
    },
    {
      href: 'https://www.instagram.com/mutualaidphilly/',
      SocialIcon: InstagramIcon,
      label: 'Mutual Aid Philly Instagram'
    }
  ].map((item, index) => (
    // eslint-disable-next-line camelcase
    <li key={index} className={socialIconList__Item}>
      <a href={item.href} target='_blank' rel='noopener noreferrer'>
        <span style={{
          position: 'absolute',
          left: '-10000px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
        >{item.label}
        </span>
        <item.SocialIcon />
      </a>
    </li>))
  return (
    <footer className={footer}>
      <div className={footerWrapper}>
        <div className={footerColumn}>
          <h1>Contact Us</h1>
          {contactInfo && (
            <nav>
              <div>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
              <ul className={socialIconList} aria-label='Social media links'>
                {socialLinksList}
              </ul>
            </nav>
          )}
        </div>
        <div className={footerColumn}>
          {footerContent && <BlockContent blocks={footerContent[0] || []} />}
        </div>
      </div>
    </footer>
  )
}

export default Footer
