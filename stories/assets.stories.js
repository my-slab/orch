import React from 'react'

import { storiesOf } from '@storybook/react'

import * as icons from '../src/ui/Icons'
import Box from '../src/ui/Box'
import Flex from '../src/ui/Flex'
import Heading from '../src/ui/Heading'
import Text from '../src/ui/Text'

storiesOf('assets', module).add('icons', () => (
  <Box p="md">
    <Heading as="h5">
      Icons sourced from{' '}
      <Text as="a" href="https://material.io/tools/icons">
        https://material.io/tools/icons
      </Text>
    </Heading>

    <Flex flexWrap="wrap" mt="md">
      {Object.entries(icons).map(([name, Icon]) => (
        <Box key={name} p="md">
          <Text color="textPrimary" textAlign="center" mb="xs">
            <Icon />
          </Text>

          <Text fontSize="1xs">
            <code>{`<${name} />`}</code>
          </Text>
        </Box>
      ))}
    </Flex>
  </Box>
))
