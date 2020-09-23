import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import Stripe from './stripe'
import map from 'lodash/map'
import get from 'lodash/get'

const isBrowser = typeof window !== 'undefined'

const Flag = ({ colors, height, onFinish }) => {
  const flagEl = useRef(null)
  const finishes = useRef(0)
  const stripes = get(colors, 'length', 0)

  const finish = () => {
    finishes.current = finishes.current + 1
    if (finishes.current === stripes) {
      onFinish()
    }
  }

  useEffect(() => {
    let el
    if (isBrowser) {
      el = flagEl.current
      el.addEventListener('animationend', finish)
    }

    return () => {
      if (el) {
        el.removeEventListener('animationend', finish)
      }
    }
  }, [])

  return (
    <div ref={flagEl}>
      {map(colors, (el, i) => (
        <Stripe
          backgroundColor={el}
          height={height / stripes}
          index={i}
          stripes={stripes}
          key={`${i}${el}`}
        />
      ))}
    </div>
  )
}

Flag.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
  onFinish: PropTypes.func
}

Flag.defaultProps = {
  colors: [],
  height: 0,
  onFinish: () => {}
}

export default Flag
