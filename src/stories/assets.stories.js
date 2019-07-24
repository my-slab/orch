import React from 'react'

import { storiesOf } from '@storybook/react'

import * as icons from '../ui/Icons'
import Box from '../ui/Box'
import Flex from '../ui/Flex'
import Heading from '../ui/Heading'
import Text from '../ui/Text'
import ThemeProvider from '../ui/ThemeProvider'
import theme from '../ui/theme'

storiesOf('assets', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('icons', () => (
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
