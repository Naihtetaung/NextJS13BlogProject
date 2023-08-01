import React from 'react'
import styles from './footer.module.css'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className={styles.container}>
      <div>@2023 Burogu.All rights reserved.</div>
      <div className={styles.iconcontainer}>
      <SocialIcon url="https://linkedin.com" style={{ height: 25, width: 25 }}/>
      <SocialIcon url="https://facebook.com" style={{ height: 25, width: 25 }}/>
      <SocialIcon url="https://twitter.com" style={{ height: 25, width: 25 }}/>
      <SocialIcon url="https://reddit.com" style={{ height: 25, width: 25 }}/>
      </div>
    </div>
  )
}

export default Footer