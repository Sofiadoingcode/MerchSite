import { gql } from '@apollo/client';

const GetProduct = gql`
  query GetProduct($productId: ID!) {
    product(id: $productId) {
      id
      name
      description
      price
      category
      size
    }
  }
`;

export default GetProduct;
