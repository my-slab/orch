import React from 'react'

import Flex from './Flex'
import Heading from './Heading'
import Relative from './Relative'
import { IconVideoGameAsset } from './Icons'

const Nav = ({ children }) => (
  <Relative top={0} left={0} right={0} height={64} bg="#344951">
    <Flex
      width="full"
      justifyContent="space-between"
      alignItems="center"
      height="full"
      px="md"
      color="white"
    >
      <Flex>
        <Heading as="h3" m="0" color="white" pr="sm">
          <IconVideoGameAsset />
        </Heading>

        <Heading as="h3" m="0" color="white">
          Games Cart
        </Heading>
      </Flex>

      {children}
    </Flex>
  </Relative>
)

Nav.displayName = 'Nav'

export default Nav
