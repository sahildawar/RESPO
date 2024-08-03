import React from 'react'
import Styles from './helpicon.module.css'
import Image from 'next/image'

const helpicon = () => {
  return (
    <div className={Styles.helpicon}>
                Help? 
        <Image src="/callicon.png" className={Styles.callicon}/>
    </div>
  )
}

export default helpicon