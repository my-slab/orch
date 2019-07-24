import React from 'react'

import { Router } from '@reach/router'

import Box from './ui/Box'
import CartLink from './cart/CartLink'
import CartProvider from './CartProvider'
import Checkout from './cart/Cart'
import Home from './games/GameList'
import Nav from './ui/Nav'
import ThemeProvider from './ui/ThemeProvider'
import theme from './ui/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Nav>
          <CartLink />
        </Nav>

        <Box maxWidth="max" mx={['3%', '6%', 'auto']} my={['lg', '2xl']}>
          <Router>
            <Home path="/" />
            <Checkout path="/checkout" />
          </Router>
        </Box>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
