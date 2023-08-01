import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Buttons/Button'

export const metadata = {
  title: 'About Nai Blog',
  description: 'This is aabout page.',
}

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} width={1245} height={300} src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Abstrub Artices</h1>
          <h2 className={styles.imgDesc}>Drawing award wining digital experiences</h2>
        </div>
      </div>
      <div className={styles.txtContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>What Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec in rutrum libero,
            ac molestie nulla. Vivamus consequat
            tempor purus, eu ullamcorper quam ultrices id.
            Aenean sed interdum nibh, nec venenatis nibh.
            Praesent scelerisque cursus condimentum. Nunc
            facilisis ex in erat feugiat pretium. Fusce
            vestibulum sit amet lorem nec bibendum.
            <br/>
            <br/>
            Nam finibus dolor luctus nibh fermentum
            porttitor. Sed eu mi ac odio sagittis viverra 
            a ut ex. Etiam cursus mauris diam, at vestibulum 
            nulla interdum eu. Nam erat est, lobortis eget 
            tempor non, semper quis nibh. Cras mattis lacus 
            neque, nec blandit ante finibus vitae. Aenean 
            imperdiet mauris vel nunc pulvinar hendrerit. 
            Vivamus gravida, erat id ultrices posuere, lacus 
            massa dignissim ipsum, eu euismod magna leo 
            aliquet sapien. Aenean vehicula turpis fringilla, 
            facilisis purus eu, consectetur nisi. Vivamus 
            bibendum magna lacus. Nulla facilisi.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          Praesent sit amet accumsan lacus, 
          eu commodo elit. Proin lobortis scelerisque 
          pellentesque. Vestibulum ante ipsum primis 
          in faucibus orci luctus et ultrices posuere 
          cubilia curae; Maecenas ac convallis massa. 
          <br/>
          <br/>
          - Creative Illustrations
          <br/>
          <br/>
          - Dynamic Webs
          <br/>
          <br/>
          - Fast & Handy Mobile App
          </p>
          <Button url="/contact" text="Contact Us"/>
        </div>
      </div>
    </div>
  )
}

export default About