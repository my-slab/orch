import React, { useContext } from 'react'

import styled from 'styled-components'
import { css } from '@styled-system/css'

import Button from '../ui/Button'
import IconButton from '../ui/IconButton'
import { CartContext } from '../App'
import { IconBookmark, IconBookmarkBorder } from '../ui/Icons'
import { addWishlistItem, removeWishlistItem } from '../actions'

const S = {
  Button: styled(Button)(css({ display: ['none', 'inline-block'] }))
}

const Wishlist = ({ itemId }) => {
  const [{ wishlistItemIds }, dispatch] = useContext(CartContext)
  const isOnWishlist = wishlistItemIds.has(itemId)

  const handleAddToWishlist = () => {
    isOnWishlist
      ? dispatch(removeWishlistItem(itemId))
      : dispatch(addWishlistItem(itemId))
  }

  return (
    <>
      <IconButton
        display={['initial', 'none']}
        icon={isOnWishlist ? IconBookmark : IconBookmarkBorder}
        onClick={handleAddToWishlist}
        variant="secondary"
      />

      <S.Button variant="secondary" onClick={handleAddToWishlist}>
        {isOnWishlist ? 'On wishlist' : 'Save to wishlist'}
      </S.Button>
    </>
  )
}

Wishlist.displayName = 'Wishlist'
export default Wishlist
