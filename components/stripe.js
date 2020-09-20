import React from 'react'
import PropTypes from 'prop-types'

const Stripe = ({ backgroundColor, height }) => (
  <div
    style={{
      backgroundColor,
      height: `${height}px`
    }}
  />
)

Stripe.propTypes = {
  backgroundColor: PropTypes.string,
  height: PropTypes.number
}

Stripe.defaultProps = {
  backgroundColor: '',
  height: 0
}

export default Stripe
