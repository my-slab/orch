import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { border, color, compose, layout, space } from 'styled-system'

const Base = styled('input')(
  compose(
    border,
    color,
    layout,
    space
  )
)

const Box = styled(Base)`
  border: 1px solid #ccc;
  display: inline-block;
`

Box.defaultProps = {
  borderRadius: 'md',
  p: 'sm'
}

Box.displayName = 'Input'

Box.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space
}

export default Box
