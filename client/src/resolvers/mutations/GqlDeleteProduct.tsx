import { gql } from '@apollo/client';

const DeleteProduct = gql`
mutation DeleteProduct($deleteProductId: ID) {
    deleteProduct(id: $deleteProductId)
  }`
  
export default DeleteProduct