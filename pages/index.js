import { useState } from 'react'
import Layout from '../components/layout'
import TransPride from '../components/trans-pride'
import LGBTQIAPride from '../components/lgbtqia-pride'
import LesbianPride from '../components/lesbian-pride'
import get from 'lodash/get'
import useWindowSize from '../hooks/use-window-size'

const cx = {
  main: 'vh-100 dt w-100',
  container: 'dtc v-mid tc'
}

const FLAGS = [
  TransPride,
  LesbianPride,
  LGBTQIAPride
]

const Index = () => {
  const [flagIndex, setFlagIndex] = useState(0)
  const { height } = useWindowSize()
  const flagCount = get(FLAGS, 'length', 0)
  const nextFlag = () => {
    const nextIndex = flagIndex + 1
    if (nextIndex < flagCount) {
      setFlagIndex(nextIndex)
    } else {
      setFlagIndex(0)
    }
  }
  const CurrentFlag = FLAGS[flagIndex]
  return (
    <Layout className={cx.main}>
      <div className={cx.container}>
        <CurrentFlag
          height={height}
          onFinish={nextFlag}
        />
      </div>
    </Layout>
  )
}

export default Index
