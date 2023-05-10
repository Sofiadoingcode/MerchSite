import {gql} from '@apollo/client';

const GqlCreateCustomer = gql`
mutation CreateProduct($input: UserInput) {
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
export default GqlCreateCustomer