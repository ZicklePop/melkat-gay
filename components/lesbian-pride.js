import React from 'react'
import PropTypes from 'prop-types'
import Flag from 'flag'

const COLORS = [
  '#d52d00',
  '#ff9a56',
  '#ffffff',
  '#d362a4',
  '#a30262'
]

const LesbianPride = ({ height }) => (
  <Flag colors={COLORS} height={height} />
)

LesbianPride.propTypes = {
  height: PropTypes.number
}

LesbianPride.defaultProp = {
  height: 0
}

export default LesbianPride
