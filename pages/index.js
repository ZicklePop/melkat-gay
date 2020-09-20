import React from 'react'
import Layout from '../components/layout'
import TransPride from '../components/trans-pride'
import useWindowSize from '../hooks/use-window-size'

const cx = {
  main: 'vh-100 dt w-100',
  container: 'dtc v-mid tc'
}

const Index = () => {
  const { height } = useWindowSize()
  return (
    <Layout className={cx.main}>
      <div className={cx.container}>
        <TransPride height={height} />
      </div>
    </Layout>
  )
}

export default Index
