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

const TransPride = ({ height, onFinish }) => (
  <Flag colors={COLORS} height={height} onFinish={onFinish} />
)

TransPride.propTypes = {
  height: PropTypes.number,
  onFinish: PropTypes.func
}

TransPride.defaultProp = {
  height: 0,
  onFinish: () => {}
}

export default TransPride
