import PropTypes from 'prop-types'
import Flag from './flag'

const COLORS = [
  '#ff218c',
  '#ffd800',
  '#21b1ff'
]

const PanPride = ({ animate, height, onFinish }) => (
  <Flag animate={animate} colors={COLORS} height={height} onFinish={onFinish} />
)

PanPride.propTypes = {
  animate: PropTypes.bool,
  height: PropTypes.number,
  onFinish: PropTypes.func
}

PanPride.defaultProp = {
  animate: false,
  height: 0,
  onFinish: () => {}
}

export default PanPride
