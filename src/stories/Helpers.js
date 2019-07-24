import React from 'react'

import Box from '../ui/Box'
import Flex from '../ui/Flex'
import Heading from '../ui/Heading'
import Text from '../ui/Text'

const Block = ({ children, title = 'default' }) => (
  <Box mb="md">
    <Text mb="md">
      <code>{title}</code>
    </Text>
    {children}
  </Box>
)

Block.displayName = 'Block'

const Section = ({ children, title }) => (
  <Box m="lg">
    <Heading as="h6" pb="md">
      <code>{title}</code>
    </Heading>

    <Flex flexWrap="wrap" justifyContent="space-between" width={'50%'}>
      {children}
    </Flex>
  </Box>
)

Section.displayName = 'Section'

export { Block, Section }
