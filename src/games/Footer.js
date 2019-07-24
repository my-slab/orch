import React, { useContext } from 'react'

import PropTypes from 'prop-types'

import Box from '../ui/Box'
import Button from '../ui/Button'
import CartButton from './CartButton'
import Flex from '../ui/Flex'
import IconButton from '../ui/IconButton'
import Money from '../utils/Money'
import Text from '../ui/Text'
import WishlistButton from './WishlistButton'
import { CartContext } from '../App'
import { IconBookmarkBorder, IconShoppingCart } from '../ui/Icons'

const Footer = ({ discount, id, price }) => (
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
        <CartButton itemId={id} />
        <WishlistButton itemId={id} />
      </Box>
    </Flex>

    <Flex
      display={['none', 'flex']}
      alignItems="center"
      justifyContent="space-between"
    >
      <CartButton itemId={id} />
      <WishlistButton itemId={id} />
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
