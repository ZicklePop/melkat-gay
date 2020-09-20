import React from 'react'
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

const LGBTQIAPride = ({ height }) => (
  <Flag colors={COLORS} height={height} />
)

LGBTQIAPride.propTypes = {
  height: PropTypes.number
}

LGBTQIAPride.defaultProp = {
  height: 0
}

export default LGBTQIAPride
