import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Button from './components/Buttons/Button'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality.We bring together the teams for 
          the global tech industry.
        </p>
        <Button url="/portfolio" text="See My Works"/>
      </div>
      <div className={styles.item}>
        <Image className={styles.img} width={700} height={400} src="https://images.pexels.com/photos/2816903/pexels-photo-2816903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </div>
    </div>
  )
}

export default Home