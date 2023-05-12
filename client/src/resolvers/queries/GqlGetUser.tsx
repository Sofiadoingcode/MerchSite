import { gql } from '@apollo/client';
const GetUser = gql`
query User($userId: ID) {
    user(id: $userId) {
        id
        address {
          id
          country
          city
          postalCode
          streetAddress
        }
    }
  }
  `
export default GetUser