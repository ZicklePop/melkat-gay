import PropTypes from 'prop-types'
import { gradientMap } from '../constants/flags'
import ceil from 'lodash/ceil'
import get from 'lodash/get'
import map from 'lodash/map'

const cx = 'gradient ts1'

const getGradient = type => {
  const colors = get(gradientMap, type, [])
  const stripes = get(colors, 'length', 0)
  const increment = 100 / stripes
  const css = map(colors, (color, i) => (
    `${color} ${ceil(increment * i)}%, ${color} ${ceil(increment * (i + 1))}%${stripes === i + 1 ? '' : ', '}`)).join('')
  return `linear-gradient(45deg, ${css})`
}

const Gradient = ({ className, children, type }) => (
  <span
    className={`${cx} ${className}`}
    style={{
      backgroundImage: getGradient(type)
    }}
  >
    {children}
  </span>
)

Gradient.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(gradientMap))
}

Gradient.defaultProps = {
  className: '',
  children: '',
  type: 'lgbtqia'
}

export default Gradient
