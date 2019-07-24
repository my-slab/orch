import React from 'react'

import Box from '../src/ui/Box'
import Flex from '../src/ui/Flex'
import Heading from '../src/ui/Heading'
import Text from '../src/ui/Text'

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
