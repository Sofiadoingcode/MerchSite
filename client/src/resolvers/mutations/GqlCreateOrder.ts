import {gql} from '@apollo/client';

const GqlCreateOrder = gql`
mutation CreateOrder($orderInput: OrderInput) {
    createOrder(orderInput: $orderInput) {
        id
        orderTime
        totalPrice
          customer {
            name
            id
            email
        }
        productLines {
            id
        }
     }
  }
`;
export default GqlCreateOrder