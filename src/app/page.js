import styles from './page.module.css'
import FP1 from './components/fp1/FP1'
import FP2 from './components/fp2/FP2'
import FP2c from './components/fp2 copy/FP2c'
import FP3 from './components/fp3/FP3'
import FP4 from './components/fp4/FP4'

export default function Home() {
  return (
    <div>
      <div>
        <FP1/>
      </div>
      <div>
        <FP3/>
      </div>
      <div>
        <FP4/>
      </div>
      <div>
        {/* <FP2/> */}
        <FP2c/>
      </div>
    </div>
  );
}
