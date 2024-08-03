import React from 'react'
import Styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.design}>
        Carsion Walk
        &#169; All Copyright Reserved
      </div>
      <div className={Styles.designl}>
        Carsion Walk
      </div>
      <div className={Styles.platform}>
        <div>
          <Image src='/ig.webp' width={18} height={18}/> Instagram
        </div>
        <div>
          <Image src='/facebook.webp' width={18} height={18}/> Facebook
        </div>
        <div>
          <Image src='/x.png' width={18} height={18}/> Twitter
        </div>
        <div>
          <Image src='/in.png' width={18} height={18}/> Linkedin
        </div>
      </div>
    </div>  
  )
}

export default Footer