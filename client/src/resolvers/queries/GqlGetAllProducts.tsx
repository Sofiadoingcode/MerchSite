import { gql } from '@apollo/client';
const GetAllProducts = gql`
query Products {
    products {
      id
      name
      description
      price
      category {
        id
        name
      }
      size
      image
    }
  }
  `
export default GetAllProducts