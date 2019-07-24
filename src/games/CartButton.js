import React, { useContext } from 'react'

import styled from 'styled-components'
import { css } from '@styled-system/css'

import Button from '../ui/Button'
import IconButton from '../ui/IconButton'
import { CartContext } from '../App'
import { IconShoppingCart } from '../ui/Icons'
import { addLineItem } from '../actions'

const S = {
  Button: styled(Button)(css({ display: ['none', 'inline-block'] }))
}

const Cart = ({ itemId }) => {
  const [, dispatch] = useContext(CartContext)

  const handleAddLineItem = () => dispatch(addLineItem(itemId))

  return (
    <>
      <IconButton
        display={['initial', 'none']}
        icon={IconShoppingCart}
        onClick={handleAddLineItem}
      />

      <S.Button onClick={handleAddLineItem}>Add to cart</S.Button>
    </>
  )
}

Cart.displayName = 'Cart'
export default Cart
