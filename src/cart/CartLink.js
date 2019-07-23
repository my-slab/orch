import React, { useContext } from 'react'

import { Link } from '@reach/router'

import Absolute from '../ui/Absolute'
import Flex from '../ui/Flex'
import Text from '../ui/Text'
import { CartContext } from '../App'
import { IconShoppingCart } from '../ui/Icons'

const CartLink = () => {
  const [state] = useContext(CartContext)
  const count = [...state.lineItemIds].length

  return (
    <Link to="/checkout">
      <Text color="white" variant="secondary">
        <IconShoppingCart />

        {count > 0 && (
          <Absolute right={8} top={12}>
            <Flex
              alignItems="center"
              bg="red"
              borderRadius="full"
              height={18}
              justifyContent="center"
              width={18}
            >
              <Text color="white" fontSize="xs">
                {count}
              </Text>
            </Flex>
          </Absolute>
        )}
      </Text>
    </Link>
  )
}

CartLink.displayName = 'CartLink'
export default CartLink
