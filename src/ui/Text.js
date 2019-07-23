import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { color, compose, layout, space, typography } from 'styled-system'

const letterCase = props => {
  switch (props.case) {
    case 'lower': {
      return { textTransform: 'lowercase' }
    }
    case 'title': {
      return { textTransform: 'capitalize' }
    }
    case 'upper': {
      return { textTransform: 'uppercase' }
    }
    default: {
      return { textTransform: 'none' }
    }
  }
}

const Text = styled('div')`
  ${compose(
    color,
    layout,
    space,
    typography
  )}
  ${letterCase}
`

Text.defaultProps = {
  color: 'textPrimary',
  fontFamily: 'sans',
  fontSize: 'md',
  fontWeight: 'normal'
}

Text.propTypes = {
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.typography,
  as: PropTypes.string
}

export default Text
