import React from 'react'

import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Banner from '../src/games/Banner'
import Box from '../src/ui/Box'
import Card from '../src/ui/Card'
import CartProvider from '../src/CartProvider'
import Detail from '../src/games/Detail'
import Flex from '../src/ui/Flex'
import Footer from '../src/games/Footer'
import Game from '../src/games/Game'
import Heading from '../src/ui/Heading'
import Relative from '../src/ui/Relative'
import Text from '../src/ui/Text'
import { Block, Section } from './Helpers'

const game = {
  id: 1,
  description:
    'A story based action survival game based in a post apocalyptic world.',
  discount: 14,
  image:
    'https://pmcvariety.files.wordpress.com/2018/06/the-last-of-us-part-2.jpg?w=1000&h=563&crop=1',
  price: 105,
  title: 'The Last of Us Part II'
}

const undiscountedGame = { ...game, discount: undefined }

const handleAddToCart = action('add to cart')
const handleAddToWishlist = action('add to wishlist')

storiesOf('Games', module)
  .add('game', () => (
    <CartProvider>
      <Box>
        <Section title="Game">
          <Block title="default">
            <Game
              {...undiscountedGame}
              addToCart={handleAddToCart}
              addToWishlist={handleAddToWishlist}
            />
          </Block>

          <Block title="discount">
            <Game
              {...game}
              addToCart={handleAddToCart}
              addToWishlist={handleAddToWishlist}
            />
          </Block>
        </Section>

        <Section title="banner">
          <Block title="default">
            <Card width={350}>
              <Banner image={game.image} />
            </Card>
          </Block>

          <Block title="isOnSale">
            <Relative>
              <Card width={350}>
                <Banner image={game.image} isOnSale />
              </Card>
            </Relative>
          </Block>
        </Section>

        <Section title="Detail">
          <Block>
            <Card width={350}>
              <Detail description={game.description} title={game.title} />
            </Card>
          </Block>
        </Section>

        <Section title="Footer">
          <Block>
            <Card width={350}>
              <Footer
                {...undiscountedGame}
                addToCart={handleAddToCart}
                addToWishlist={handleAddToWishlist}
              />
            </Card>
          </Block>

          <Block title="discount">
            <Card width={350}>
              <Footer
                {...game}
                addToCart={handleAddToCart}
                addToWishlist={handleAddToWishlist}
              />
            </Card>
          </Block>
        </Section>
      </Box>
    </CartProvider>
  ))
  .add('games', () => {
    const games = [
      game,
      undiscountedGame,
      game,
      game,
      undiscountedGame,
      game,
      game,
      undiscountedGame,
      game,
      game,
      undiscountedGame
    ].map((g, i) => ({
      ...g,
      id: i + 1
    }))

    return (
      <CartProvider>
        <Box>
          <Flex width="full" justifyContent="center" flexWrap="wrap">
            {games.map(game => (
              <Box m="lg">
                <Game key={game.id} {...game} />
              </Box>
            ))}
          </Flex>
        </Box>
      </CartProvider>
    )
  })
