import {gql} from '@apollo/client';

const GqlCreateCustomer = gql`
mutation Mutation($userInput: UserInput) {
  createCustomerAccount(userInput: $userInput) {
    id
    username
    password
    phone
    name
    email
    role
  }
}
`;
export default GqlCreateCustomer