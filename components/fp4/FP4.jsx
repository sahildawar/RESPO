import React from 'react'
import Styles from './FP4.module.css'
import Image from 'next/image'

const hoveranimation = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.anime2}>
        <div className={Styles.head}>
          <h1>Running After Models</h1>
        </div>
        <div className={Styles.desc}>
        There is no fixed distinction between sports cars and other 
        categories of performance cars, such as muscle cars and grand tourers, 
        with some cars being members of several categories.considered the pinnacle
         of performance cars and are generally produced in limited quantities.
        </div>
        <div>
          <button className={Styles.button}>
            Explore
          </button>
        </div>
      </div>
      <div className={Styles.anime1}>
      <Image src='/td2.jpg' width={90*3} height={160*3} className={Styles.img}/>
      </div>
    </div>
    )
}

export default hoveranimation