import React from 'react'

import PropTypes from 'prop-types'

const Money = ({ value }) => {
  const number = Number(value)
  const { language = 'en-AU' } = navigator

  return (
    <span>
      {number.toLocaleString(language, {
        currency: 'USD',
        minimumFractionDigits: 0,
        style: 'currency'
      })}
    </span>
  )
}

Money.displayName = 'Money'

Money.defaultProps = {
  value: 0
}

Money.propTypes = {
  value: PropTypes.number
}

export default Money
