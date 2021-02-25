import Content from '../components/content'
import Flag from '../components/flag'
import Layout from '../components/layout'
import useFlags from '../hooks/use-flags'

const cx = {
  main: 'relative',
  container: 'db',
  layer: 'absolute absolute--fill'
}

const Index = () => {
  const {
    currentFlag,
    getNextFlag,
    height,
    previousFlag
  } = useFlags()

  return (
    <Layout className={cx.main}>
      <div className={cx.container}>
        <div className={cx.layer}>
          <Flag
            key={previousFlag.join('')}
            colors={previousFlag}
            height={height}
          />
        </div>
        <div className={cx.layer}>
          <Flag
            animate
            key={currentFlag.join('')}
            colors={currentFlag}
            height={height}
            onFinish={getNextFlag}
          />
        </div>
        <div className={cx.layer}>
          <Content height={height} />
        </div>
      </div>
    </Layout>
  )
}

export default Index
