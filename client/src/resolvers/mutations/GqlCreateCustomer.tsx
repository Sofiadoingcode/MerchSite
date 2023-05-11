import {gql} from '@apollo/client';

const GqlCreateCustomer = gql`
mutation Mutation($userInput: UserInput) {
  createCustomerAccount(userInput: $userInput) {
    username
    password
    phone
    name
    email
   
  }
}
`;
export default GqlCreateCustomer