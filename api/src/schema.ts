const typeDefs = `#graphql
type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    category: String!
    size: String
  }

type Token {
  token: String!
}
type ProductLine {
    id: ID!
    lineprice: Float
    amount: Int!
    size: String!
    Product: Product!
  }
  
type Order {
    id: ID!
    orderTime: String!
    totalprice: Float!
    address: Address!
    customer: Customer!
    productlines: [ProductLine!]!
  }

type Customer {
    id: ID!
    name: String!
    email: String!
    phone: Int!
    address: Address!

}

type User {
    id: ID
    username: String!
    password: String!
    email: String
    role: String
    }

type Address {
    id: ID!
    postalcode: String!
    streetaddress: String!
    city: String!
    country: String!
}

type User {
    id: ID
    username: String!
    password: String!
    email: String
    role: String
  }

type LoginOutput {
    token: String!
    user: User!
}
  
type Query {
    products: [Product!]!
    product(id: ID): Product
    login(input: UserInput) : LoginOutput

  }

type Mutation {
  createProduct(input:ProductInput): Product
}

input ProductInput{
  id: ID
  name: String!
  description: String
  price: Float!
  category: String!
  size: String
}

input UserInput {
    username: String!
    password: String!
}
  
`

export default typeDefs;