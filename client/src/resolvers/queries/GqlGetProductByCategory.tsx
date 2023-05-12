import { gql } from '@apollo/client';
const getProductFromCategory = gql`
query Query($productByCategoryId: ID) {
  productByCategory(id: $productByCategoryId) {
    id
    name
    description
    price
    size
    image
    ratingAvg
  }
}
  `
export default getProductFromCategory