import { gql } from '@apollo/client';

const ordersByUser = gql`
query Query {
  ordersByUser {
    orderTime
    id
    address {
      city
      country
      postalCode
      streetAddress
      id
    }
    productLines {
      amount
      linePrice
      product {
        name
        price
        description
      }
      id
      size
    }
    totalPrice
  }
}
  `
export default ordersByUser