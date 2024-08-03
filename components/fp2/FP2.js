import React from 'react'
import Styles from './FP2.module.css'
import Image from 'next/image'

const FP2 = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={`${Styles.item} ${Styles.i1}`}>
        <Image src='/cadillac4k.jpg' width={290} height={170}/>
      </div>
      <div className={`${Styles.item} ${Styles.i2}`}>
        <Image src='/porsche4k.jpg' width={290} height={170}/>
      </div>
      <div className={`${Styles.item} ${Styles.i3}`}>
        <Image src='/pagani4k.jpg' width={290} height={170}/>
      </div>
      <div className={`${Styles.item} ${Styles.i4}`}>
        <Image src='/lambo4k.jpg' width={290} height={170}/>
      </div>
      <div className={`${Styles.item} ${Styles.i5}`}>
        <Image src='/mustang4k.jpg' width={290} height={170}/>
      </div>
      <div className={`${Styles.item} ${Styles.i6}`}>
        <Image src='/mercedes4k.jpg' width={290} height={170}/>
      </div>
    </div>
  )
}

export default FP2 