import React from 'react'
import Styles from './FP1.module.css'
import Image from 'next/image'

const FP1 = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.segment1}>
        <Image src='/rim1.png' width={800} height={800} className={Styles.img}/>
      </div>
        <div className={Styles.segment2}>
            <div className={Styles.segment21}>
                <div>
                    <p className={Styles.A1}>
                    Unleash The 
                    </p> 
                </div>
                <div>
                    <p className={Styles.span1}>
                        SPIRIT
                    </p>
                </div>
            </div>
                <p className={Styles.A2}> It’s widely known in the drifting community, 
                        some people build show cars to look like drift cars, 
                        but others build drift cars to drift, and also show them.
                </p>
                <button className={Styles.A3}>
                    See What's New
                </button>
          
        </div>
    </div>
  )
}

export default FP1