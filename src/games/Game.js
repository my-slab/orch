import React from 'react'

import styled from 'styled-components'

import Banner from './Banner'
import Card from '../ui/Card'
import Detail from './Detail'
import Flex from '../ui/Flex'
import Footer from './Footer'

const S = {
  Flex: styled(Flex)`
    position: relative;
    min-height: 150px;
  `
}

const Game = ({
  addLineItem,
  addWishlistItem,
  description,
  discount,
  id,
  image,
  price,
  removeWishlistItem,
  title,
  ...props
}) => (
  <Card width={['full', 350]} {...props} m={['sm', 'lg']}>
    <S.Flex flexDirection={['row', 'column']}>
      <Banner discount={discount} image={image} isOnSale={!!discount} />

      <Flex
        flex="1 256px"
        flexDirection="column"
        justifyContent="space-between"
        minWidth={256}
      >
        <Detail description={description} price={price} title={title} />
        <Footer
          addLineItem={addLineItem}
          addWishlistItem={addWishlistItem}
          discount={discount}
          id={id}
          price={price}
          removeWishlistItem={removeWishlistItem}
          title={title}
        />
      </Flex>
    </S.Flex>
  </Card>
)

Game.displayName = 'Game'

export default Game
