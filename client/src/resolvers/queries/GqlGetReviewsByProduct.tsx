import { gql } from '@apollo/client';
const GetReviewsByProduct = gql`
query ReviewsByProduct($reviewsByProductId: ID) {
    reviewsByProduct(id: $reviewsByProductId) {
      id
      title
      text
      rating
      product {
        name
      }
    }
  }
  `
export default GetReviewsByProduct