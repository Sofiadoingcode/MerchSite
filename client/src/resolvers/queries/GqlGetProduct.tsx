import { gql } from '@apollo/client';
const GetProduct = gql`
query Product {
    product {
      id
      name
      description
      price
      category
      size
    }
  }
  `
export default GetProduct