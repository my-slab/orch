import React, { useContext } from 'react'

import { Link } from '@reach/router'

import Box from '../ui/Box'
import Card from '../ui/Card'
import Heading from '../ui/Heading'
import LineItem from './LineItem'
import Summary from './Summary'
import Text from '../ui/Text'
import { CartContext } from '../App'
import { Table } from '../ui/Table'
import { removeLineItem, updateLineItem } from '../actions'

const Empty = () => (
  <Box px="lg" pb="lg">
    <Box mb="md">
      <Heading as="h6" textAlign="center">
        There no items in your cart
      </Heading>
    </Box>

    <Link to="/">
      <Text variant="secondary" textAlign="center">
        Head back to the games
      </Text>
    </Link>
  </Box>
)

Empty.displayName = 'Empty'

const Cart = () => {
  const [state, dispatch] = useContext(CartContext)
  const lineItemIds = [...state.lineItemIds]

  const handleUpdateItem = (id, quantity) =>
    dispatch(updateLineItem({ id, quantity }))

  const handleRemoveItem = id => dispatch(removeLineItem(id))

  return (
    <Card width="full">
      <Box py="lg" px="md">
        <Heading as="h3">Your Cart</Heading>
      </Box>

      {lineItemIds.length ? (
        <Table>
          {lineItemIds.map(id => (
            <LineItem
              id={id}
              key={id}
              removeLineItem={handleRemoveItem}
              updateLineItem={handleUpdateItem}
              {...state.lineItems[id]}
              {...state.items[id]}
            />
          ))}

          <Summary items={state.items} lineItems={state.lineItems} />
        </Table>
      ) : (
        <Empty />
      )}
    </Card>
  )
}

Cart.displayName = 'Cart'
export default Cart
