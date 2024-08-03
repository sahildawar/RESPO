import Link from 'next/link'
import React from 'react'
import Styles from './Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={Styles.design}>
      <div className={Styles.segment1}>
        <Link href="/" className={Styles.logoname}>CARSION-WALK</Link>
      </div>
      <div className={Styles.segment2}>
          <Link href='/trends' className={Styles.tr}>Trends</Link>
          <Link href='/featured' className={Styles.tr}>Featured</Link>
          <Link href='/aboutus' className={Styles.tr}>AboutUs</Link>
          <Link href='/hamburger' className={Styles.hamburger}>
            <button className={Styles.imgb}> 
              <Image src='/hamb.png' alt='hamb' width={40} height={34} />
            </button>
            </Link>
      </div>
    </div>
  )
}

export default Navbar