import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import Absolute from '../ui/Absolute'
import BackgroundImage from '../ui/BackgroundImage'
import Box from '../ui/Box'
import Money from '../utils/Money'
import Text from '../ui/Text'
import { IconLocalOffer } from '../ui/Icons'

const S = {
  BackgroundImage: styled(BackgroundImage)(props => ({
    borderTopLeftRadius: themeGet('radii.lg')(props),
    borderTopRightRadius: themeGet('radii.lg')(props)
  }))
}

const Pill = ({ discount }) => (
  <Absolute top={[8, 16]} left={[8, 16]}>
    <Box borderRadius="sm" bg="orcaGreen">
      <Text color="white" case="upper" fontWeight="bold" p="xs" fontSize="xs">
        <IconLocalOffer /> save <Money value={discount} />
      </Text>
    </Box>
  </Absolute>
)

Pill.displayName = 'Pill'

const Banner = ({ discount, image, isOnSale, ...props }) => (
  <Box width="full">
    <S.BackgroundImage image={image} {...props} />
    {isOnSale && <Pill discount={discount} />}
  </Box>
)

// <Relative {...props} width={[150, 'full']}>
// </Relative>

Banner.displayName = 'Banner'

Banner.defaultProps = {
  height: ['100%', 200],
  isOnSale: false,
  width: 'full'
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  isOnSale: PropTypes.bool
}

export default Banner
