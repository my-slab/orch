import React from 'react'

import PropTypes from 'prop-types'

import Box from '../ui/Box'
import Heading from '../ui/Heading'
import Text from '../ui/Text'

const Detail = ({ description, title }) => (
  <Box p={['sm', 'md']}>
    <Heading as="h4" fontWeight="bold" pb={[0, 'md']}>
      {title}
    </Heading>
    <Text pb={['sm', 'md']} display={['none', 'initial']}>
      {description}
    </Text>
  </Box>
)

Detail.displayName = 'Detail'

Detail.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Detail
