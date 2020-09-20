import React from 'react'
import PropTypes from 'prop-types'
import Flag from './flag'

const COLORS = [
  '#5bcefa',
  '#f5a9b8',
  '#ffffff',
  '#f5a9b8',
  '#5bcefa'
]

const TransPride = ({ height }) => (
  <Flag colors={COLORS} height={height} />
)

TransPride.propTypes = {
  height: PropTypes.number
}

TransPride.defaultProp = {
  height: 0
}

export default TransPride
