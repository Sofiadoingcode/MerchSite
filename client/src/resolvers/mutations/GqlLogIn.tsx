import { gql } from '@apollo/client';
const LogIn = gql`
mutation LogIn($userInput: UserInput) {
  login(userInput: $userInput) {
    token
    user {
      id
      username
      password
      email
    }
  }
}
  `
export default LogIn