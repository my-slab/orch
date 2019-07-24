import React from 'react'

import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Absolute from '../src/ui/Absolute'
import BackgroundImage from '../src/ui/BackgroundImage'
import Box from '../src/ui/Box'
import Button from '../src/ui/Button'
import Card from '../src/ui/Card'
import Flex from '../src/ui/Flex'
import Heading from '../src/ui/Heading'
import IconButton from '../src/ui/IconButton'
import Input from '../src/ui/Input'
// import Money from '../src/games/Money'
import Nav from '../src/ui/Nav'
import Relative from '../src/ui/Relative'
import Text from '../src/ui/Text'

import { Table, Tr, Td } from '../src/ui/Table'
import {
  IconBookmarkBorder,
  IconLocalOffer,
  IconRemoveShoppingCart,
  IconShoppingCart
} from '../src/ui/Icons'

storiesOf('ui components', module)
  .add('Box', () => <Box bg="orcaBlue" height={200} m="md" width={200} />)
  .add('Flex', () => (
    <Flex justifyContent="space-between" m="md">
      <Box bg="surface" height={200} width={200} />
      <Box bg="orcaBlue" height={200} width={200} />
      <Box bg="peachpuff" height={200} width={200} />
    </Flex>
  ))
  .add('Card', () => <Card height={400} m="md" />)
  .add('BackgroundImage', () => (
    <BackgroundImage
      height={200}
      image="https://pmcvariety.files.wordpress.com/2018/06/the-last-of-us-part-2.jpg?w=1000&h=563&crop=1"
      m="md"
      width={200}
    />
  ))
  .add('Button', () => (
    <Box m="md">
      <Box mb="md">
        <Button>Add to cart</Button>
      </Box>
      <Box>
        <Button variant="secondary">Add to wishlist</Button>
      </Box>
    </Box>
  ))
  .add('Text', () => (
    <Box p="md">
      <Text>The Last of Us</Text>
      <Text fontWeight="bold">The Last of Us</Text>
      <Text color="textSecondary">The Last of Us</Text>
      <Text color="orcaBlue">The Last of Us</Text>
      <Text color="white" bg="orcaBlue" as="span">
        The Last of Us
      </Text>
    </Box>
  ))
  .add('Heading', () => (
    <Box p="md">
      <Heading as="h1">The Last of Us</Heading>
      <Heading as="h2">The Last of Us</Heading>
      <Heading as="h3">The Last of Us</Heading>
      <Heading as="h4">The Last of Us</Heading>
      <Heading as="h5">The Last of Us</Heading>
      <Heading as="h6">The Last of Us</Heading>
    </Box>
  ))
  .add('Position - Relative, Absolute', () => (
    <Box p="md">
      <Relative bg="surface" height={200} width={200}>
        <Absolute top={16} left={16} p="md" bg="peachpuff" />
        <Absolute top={16} right={16} p="md" bg="peachpuff" />
        <Absolute bottom={16} right={16} p="md" bg="peachpuff" />
        <Absolute bottom={16} left={16} p="md" bg="peachpuff" />
      </Relative>
    </Box>
  ))
  .add('IconButton', () => (
    <Box p="md">
      <Box p="sm">
        <IconButton icon={IconLocalOffer} />
        <IconButton icon={IconLocalOffer} variant="secondary" />
      </Box>
      <Box p="sm">
        <IconButton icon={IconShoppingCart} />
        <IconButton icon={IconShoppingCart} variant="secondary" />
      </Box>
      <Box p="sm">
        <IconButton icon={IconBookmarkBorder} />
        <IconButton icon={IconBookmarkBorder} variant="secondary" />
      </Box>
    </Box>
  ))
  .add('Nav', () => (
    <Box p="md">
      <Nav />
    </Box>
  ))
  // .add('Table', () => (
  //   <Box p="md">
  //     <Box bg="surface">
  //       <Table width="full">
  // <Tr>
  //   <Td>the last of us part II</Td>
  //   <Td textAlign="right">
  //     <Button variant="secondary">remove from cart</Button>
  //     <label for="amount">
  //       Amount: <Input name="amount" type="number" width={64} />
  //     </label>
  //   </Td>
  //   <MoneyCell value={200} />
  // </Tr>
  //         <Tr>
  //           <Td>the last of us part II</Td>
  //           <Td textAlign="right">
  //             <Button variant="secondary">remove from cart</Button>
  //             <IconButton icon={IconRemoveShoppingCart} variant="secondary" />
  //             <label for="amount">
  //               Amount: <Input name="amount" type="number" width={64} />
  //             </label>
  //           </Td>
  //           <MoneyCell value={100} />
  //         </Tr>
  //       </Table>
  //     </Box>
  //   </Box>
  // ))
  .add('Input', () => (
    <Box p="md">
      <Input type="number" width={64} />
    </Box>
  ))

// const S = {
//   Td: styled(Td)`
//     text-align: right;
//   `
// }

// const MoneyCell = ({ value }) => (
//   <S.Td width="1%">
//     <Money value={value} />
//   </S.Td>
// )
