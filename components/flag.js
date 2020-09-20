import React from 'react'
import PropTypes from 'prop-types'
import Stripe from './stripe'
import map from 'lodash/map'
import get from 'lodash/get'

const Flag = ({ colors, height }) => {
  return (
    <div>
      {map(colors, (el, i) => (
        <Stripe
          backgroundColor={el}
          height={height / get(colors, 'lenght', 0)}
          key={`${el}${i}`}
        />
      ))}
    </div>
  )
}

Flag.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number
}

Flag.defaultProps = {
  colors: [],
  height: 0
}

export default Flag
