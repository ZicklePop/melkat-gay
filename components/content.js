import Image from 'next/image'
import PropTypes from 'prop-types'
import Gradient from './gradient'
import melanie from '../public/melanie.jpg'

const cx = {
  container: 'absolute absolute--fill',
  main: 'ma3 pa4 pv5-ns br3 bg shadow-4 f3 f2-ns fw3 absolute absolute--fill overflow-auto',
  gradient: 'fw6 nowrap',
  img: 'center br-100 center dib shadow-4 overflow-hidden grow',
  wrapper: 'mw5 mw6-ns db center'
}

const Content = ({ height }) => (
  <div className={cx.container} style={{ height }}>
    <main className={cx.main}>
      <div className={cx.wrapper}>
        <div
          className={cx.img}
          style={{ height: 128, width: 128 }}
        >
          <Image
            alt='melanie'
            loading='eager'
            src={melanie}
            placeholder='blur'
          />
        </div>
        <h2>
          {'Hi! I’m '}
          <Gradient className={cx.gradient}>
            Melanie Kat
          </Gradient>
        </h2>
        <p>
          {'My pronouns are '}
          <Gradient
            type='woman'
            className={cx.gradient}
          >
            she/her
          </Gradient>
        </p>
        <p>
          {'I am a '}
          <Gradient
            type='trans'
            className={cx.gradient}
          >
            trans woman
          </Gradient>
          {', a '}
          <Gradient
            type='lesbian'
            className={cx.gradient}
          >
            lesbian
          </Gradient>
          {', a '}
          <Gradient
            type='pan'
            className={cx.gradient}
          >
            pansexual
          </Gradient>
          {', and I am '}
          <Gradient
            type='nonbinary'
            className={cx.gradient}
          >
            non-binary
          </Gradient>
        </p>
      </div>
    </main>
  </div>
)

Content.propTypes = {
  height: PropTypes.number
}

Content.defaultProps = {
  height: 0
}

export default Content
