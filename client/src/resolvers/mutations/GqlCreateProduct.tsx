import {gql} from '@apollo/client';

const GqlCreateProduct = gql`
mutation CreateProduct($input: ProductInput) {
    createProduct(input: $input) {
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
`;
export default GqlCreateProduct