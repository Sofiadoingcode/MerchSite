import { gql } from '@apollo/client';

const ordersByUser = gql`
query Query($ordersByUserId: ID) {
  ordersByUser(id: $ordersByUserId) {
    id
    totalPrice
    productLines {
      size
      product {
        size
        ratingAvg
        price
        name
        image
        id
        description
        category {
          name
        }
      }
      linePrice
      id
      amount
    }
    orderTime
    address {
      streetAddress
      postalCode
      id
      country
      city
    }
    user {
      username
      name
      id
      phone
      email
    }
  }
}
  `
export default ordersByUser