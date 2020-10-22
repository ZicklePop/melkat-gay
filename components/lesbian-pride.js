import PropTypes from 'prop-types'
import Flag from './flag'

const COLORS = [
  '#d52d00',
  '#ff9a56',
  '#ffffff',
  '#d362a4',
  '#a30262'
]

const LesbianPride = ({ animate, height, onFinish }) => (
  <Flag animate={animate} colors={COLORS} height={height} onFinish={onFinish} />
)

LesbianPride.propTypes = {
  animate: PropTypes.bool,
  height: PropTypes.number,
  onFinish: PropTypes.func
}

LesbianPride.defaultProp = {
  animate: false,
  height: 0,
  onFinish: () => {}
}

export default LesbianPride
