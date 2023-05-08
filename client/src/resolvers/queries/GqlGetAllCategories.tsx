import { gql } from '@apollo/client';
const GetAllCategories = gql`
query Categories {
    categories {
      id
      name
      products {
        id
        name
        description
        price
        size
        image
      }
    }
  }
  `
export default GetAllCategories