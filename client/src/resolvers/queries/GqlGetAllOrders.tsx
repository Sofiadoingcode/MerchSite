import { gql } from '@apollo/client';
const GetAllOrders = gql`
query Orders {
    orders {
      id
      totalPrice
      orderTime
      address {
        id
        city
        country
        postalCode
        streetAddress
      }
      user {
        id
        name
        email
        phone
        username
      }
      productLines {
        id
        amount
        linePrice
        size
        product {
          id
          name
          description
          price
          size
          ratingAvg
          image
          category {
            id
            name
          }
        }
      }
    }
  }`
  export default GetAllOrders