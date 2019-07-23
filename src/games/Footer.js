import React, { useContext } from 'react'

import PropTypes from 'prop-types'

import Box from '../ui/Box'
import Button from '../ui/Button'
import Flex from '../ui/Flex'
import IconButton from '../ui/IconButton'
import Money from '../utils/Money'
import Text from '../ui/Text'
import { IconBookmarkBorder, IconShoppingCart } from '../ui/Icons'
import { CartContext } from '../App'

import { addLineItem, addWishlistItem, removeWishlistItem } from '../actions'

const Wishlist = ({ itemId }) => {
  const [{ wishlistItemIds }, dispatch] = useContext(CartContext)
  const isOnWishlist = wishlistItemIds.has(itemId)

  return (
    <Button
      variant="secondary"
      onClick={() => {
        isOnWishlist
          ? dispatch(removeWishlistItem(itemId))
          : dispatch(addWishlistItem(itemId))
      }}
    >
      {isOnWishlist ? 'On wishlist' : 'Save to wishlist'}
    </Button>
  )
}

const Cart = ({ itemId }) => {
  const [, dispatch] = useContext(CartContext)
  return (
    <Button onClick={() => dispatch(addLineItem(itemId))}>Add to cart</Button>
  )
}

const Footer = ({ discount, id, price, title }) => (
  <Box p={['sm', 'md']}>
    <Flex alignItems="center" justifyContent="space-between" mb={[0, 'lg']}>
      <Text fontSize="lg" fontWeight="bold">
        <Money value={price - (discount || 0)} />
      </Text>

      <Box display={['none', 'initial']}>
        {discount && (
          <Text color="textSecondary" fontSize="sm">
            Was <Money value={price} />, save <Money value={discount} />!
          </Text>
        )}
      </Box>

      <Box display={['initial', 'none']}>
        <IconButton icon={IconShoppingCart} onClick={() => {}} />
        <IconButton
          icon={IconBookmarkBorder}
          onClick={() => {}}
          variant="secondary"
        />
      </Box>
    </Flex>

    <Flex
      display={['none', 'flex']}
      alignItems="center"
      justifyContent="space-between"
    >
      <Cart itemId={id} />
      <Wishlist itemId={id} />
    </Flex>
  </Box>
)

Footer.displayName = 'Footer'

Footer.propTypes = {
  addToCart: PropTypes.func.isRequired,
  addToWishlist: PropTypes.func.isRequired,
  discount: PropTypes.number,
  price: PropTypes.number.isRequired
}

export default Footer
