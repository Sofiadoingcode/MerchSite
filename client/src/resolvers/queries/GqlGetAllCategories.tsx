import { gql } from '@apollo/client';
const GetAllCategories = gql`
query Categories {
    categories {
      id
      name
    }
  }
  `
export default GetAllCategories