import React from 'react'

import styled from 'styled-components'

import Button from '../ui/Button'
import IconButton from '../ui/IconButton'
import Input from '../ui/Input'
import Money from '../utils/Money'
import { IconRemoveShoppingCart } from '../ui/Icons'
import { Td, Tr } from '../ui/Table'

export default ({
  discount,
  id,
  price,
  quantity,
  removeLineItem,
  title,
  updateLineItem
}) => {
  return (
    <Tr>
      <Td>{title}</Td>
      <Td textAlign="right">
        <IconButton
          display={['initial', 'none']}
          icon={IconRemoveShoppingCart}
          onClick={() => removeLineItem(id)}
          variant="secondary"
        />

        <Button
          display={['none', 'initial']}
          onClick={() => removeLineItem(id)}
          variant="secondary"
        >
          remove from cart
        </Button>

        <label for="amount">
          Amount:{' '}
          <Input
            defaultValue={quantity}
            min={1}
            name="amount"
            onChange={e => {
              const quantity = Number(e.target.value)
              quantity ? updateLineItem(id, quantity) : removeLineItem(id)
            }}
            type="number"
            width={64}
          />
        </label>
      </Td>

      <MoneyCell value={(price - discount) * quantity} />
    </Tr>
  )
}

const S = {
  Td: styled(Td)`
    text-align: right;
  `
}

const MoneyCell = ({ value }) => (
  <S.Td width="1%">
    <Money value={value} />
  </S.Td>
)
