import PropTypes from 'prop-types'

const Stripe = ({ animate, backgroundColor, height, index }) => (
  <div
    className={`${animate ? 'stripe' : ''}`}
    style={{
      backgroundColor,
      height: `${height}px`
    }}
  >
    <style jsx>
      {`
        .stripe {
          animation: slide-in var(--slideSpeed) ease-in-out forwards calc(var(--slideSpeed) * ${index});
          width: 0;
          opacity: 0;
        }
        @keyframes slide-in {
          to {
            width: 100%;
            opacity: 1;
          }
        }
      `}
    </style>
  </div>
)

Stripe.propTypes = {
  animate: PropTypes.bool,
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
  index: PropTypes.number
}

Stripe.defaultProps = {
  animate: false,
  backgroundColor: '',
  height: 0,
  index: 0
}

export default Stripe
