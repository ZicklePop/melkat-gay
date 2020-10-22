import PropTypes from 'prop-types'
import Flag from './flag'

const COLORS = [
  '#000000',
  '#784f17',
  '#e40303',
  '#ff8c00',
  '#ffed00',
  '#008026',
  '#004dff',
  '#750787'
]

const LGBTQIAPride = ({ animate, height, onFinish }) => (
  <Flag animate={animate} colors={COLORS} height={height} onFinish={onFinish} />
)

LGBTQIAPride.propTypes = {
  animate: PropTypes.bool,
  height: PropTypes.number,
  onFinish: PropTypes.func
}

LGBTQIAPride.defaultProp = {
  animate: false,
  height: 0,
  onFinish: () => {}
}

export default LGBTQIAPride
