import React, { useContext } from 'react'

import { Link } from '@reach/router'

import Absolute from '../ui/Absolute'
import Flex from '../ui/Flex'
import Text from '../ui/Text'
import { CartContext } from '../CartProvider'
import { IconShoppingCart } from '../ui/Icons'

const CartLink = () => {
  const [state] = useContext(CartContext)
  const lineItemIds = [...state.lineItemIds]

  const count = lineItemIds.reduce((acc, id) => {
    const { quantity } = state.lineItems[id]
    return acc + 1 * quantity
  }, 0)

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
