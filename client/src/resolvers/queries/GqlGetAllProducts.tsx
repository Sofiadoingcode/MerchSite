import { gql } from '@apollo/client';
const GetAllProducts = gql`
query Products {
    products {
      id
      name
      description
      price
      category
      size
      image
    }
  }
  `
export default GetAllProducts