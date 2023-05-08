import {gql} from '@apollo/client';

const GqlEditProduct = gql`
mutation EditProduct($input: ProductInput) {
    editProduct(input: $input) {
      id
      name
      description
      price
      category
      size
    }
  }
`;
export default GqlEditProduct