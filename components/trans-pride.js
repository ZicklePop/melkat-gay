import PropTypes from 'prop-types'
import Flag from './flag'

const COLORS = [
  '#5bcefa',
  '#f5a9b8',
  '#ffffff',
  '#f5a9b8',
  '#5bcefa'
]

const TransPride = ({ animate, height, onFinish }) => (
  <Flag animate={animate} colors={COLORS} height={height} onFinish={onFinish} />
)

TransPride.propTypes = {
  animate: PropTypes.bool,
  height: PropTypes.number,
  onFinish: PropTypes.func
}

TransPride.defaultProp = {
  animate: false,
  height: 0,
  onFinish: () => {}
}

export default TransPride
