import {gql} from '@apollo/client';

const GqlCreateReview = gql`
mutation CreateReview($reviewInput: ReviewInput) {
    createReview(reviewInput: $reviewInput) {
      id
      title
      text
      rating
      product {
        name
      }
    }
  }
`;
export default GqlCreateReview