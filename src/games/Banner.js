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
  BackgroundImageSM: styled(BackgroundImage)(props => ({
    borderTopLeftRadius: themeGet('radii.lg')(props),
    borderBottomLeftRadius: themeGet('radii.lg')(props)
  })),
  BackgroundImageLG: styled(BackgroundImage)(props => ({
    borderTopLeftRadius: themeGet('radii.lg')(props),
    borderTopRightRadius: themeGet('radii.lg')(props)
  }))
}

const Pill = ({ discount }) => (
  <Absolute top={[8, 16]} left={[8, 16]}>
    <Box borderRadius="sm" bg="orcaGreen">
      <Text color="white" case="upper" fontWeight="bold" p="xs" fontSize="xs">
        <Box display={['initial', 'none']}>
          <IconLocalOffer /> save <Money value={discount} />
        </Box>
        <Box display={['none', 'initial']}>On Sale!</Box>
      </Text>
    </Box>
  </Absolute>
)

Pill.displayName = 'Pill'

const Banner = ({ discount, image, isOnSale, ...props }) => (
  <Box width="full">
    <S.BackgroundImageSM
      display={['inherit', 'none']}
      image={image}
      {...props}
    />

    <S.BackgroundImageLG
      display={['none', 'inherit']}
      image={image}
      {...props}
    />
    {isOnSale && <Pill discount={discount} />}
  </Box>
)

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
