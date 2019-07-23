import React from 'react'

import styled from 'styled-components'

import Money from '../utils/Money'
import Text from '../ui/Text'
import { Td, Tr } from '../ui/Table'

const S = {
  Td: styled(Td)`
    border: none;
  `,
  Tr: styled(Tr)`
    border: none;
  `
}

const Summary = ({ items, lineItems }) => {
  const total = Object.entries(lineItems).reduce((acc, [key, { quantity }]) => {
    const { price, discount } = items[key]
    return acc + (price - discount) * quantity
  }, 0)

  return (
    <S.Tr>
      <S.Td colSpan={3} textAlign="right">
        <Text fontWeight="bold" textAlign="right" fontSize="xl">
          TOTAL: <Money value={total} />
        </Text>
      </S.Td>
    </S.Tr>
  )
}

Summary.displayName = 'Summary'
export default Summary
