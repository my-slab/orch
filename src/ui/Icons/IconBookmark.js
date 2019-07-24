import React from 'react'

import Icon from './Icon'

const Bookmark = props => (
  <Icon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g>
      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
    </g>
  </Icon>
)

Bookmark.displayName = 'Bookmark'

export default Bookmark
