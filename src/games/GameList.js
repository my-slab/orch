import React, { useContext, useEffect } from 'react'

import Box from '../ui/Box'
import Flex from '../ui/Flex'
import Game from './Game'
import Heading from '../ui/Heading'
import games from './games'
import { CartContext } from '../CartProvider'
import { addItems } from '../actions'

const Empty = () => (
  <Box px="lg" pb="lg">
    <Box mb="md">
      <Heading as="h6" textAlign="center">
        There are no games!
      </Heading>
    </Box>
  </Box>
)

Empty.displayName = 'Empty'

const GameList = () => {
  const [state, dispatch] = useContext(CartContext)
  const itemIds = [...state.itemIds]

  useEffect(() => {
    dispatch(addItems(games))
  }, [])

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {itemIds.length ? (
        itemIds.map(id => <Game id={id} key={id} {...state.items[id]} />)
      ) : (
        <Empty />
      )}
    </Flex>
  )
}

GameList.displayName = 'GameList'

export default GameList
