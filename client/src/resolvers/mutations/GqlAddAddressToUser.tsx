import {gql} from '@apollo/client';

const GqlAddAddressToUser = gql`
mutation Mutation($addAddressToUserId: ID, $addressInput: AddressInput) {
    addAddressToUser(id: $addAddressToUserId, addressInput: $addressInput) {
        id
        email
        name
        username
        address {
          id
          country
          city
          postalCode
          streetAddress
        }
    }
}
`;
export default GqlAddAddressToUser