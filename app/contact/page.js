import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Buttons/Button'

export const metadata = {
  title: 'Nai Blog Contact Information',
  description: 'This is contact page.',
}

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.image}
            src="/contact.webp"
            alt=""
            fill={true}

          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input}/>
          <input type='text' placeholder='email' className={styles.input}/>
          <textarea 
            placeholder='message'
            cols='30' rows='10'
            className={styles.textArea}>

          </textarea>
          <Button url='#' text='Send'/>
        </form>
      </div>
    </div>
  )
}

export default Contact