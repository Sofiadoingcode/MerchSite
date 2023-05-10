const typeDefs = `#graphql
type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    category: Category!
    size: [String]
    image: String!
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
    role: String
    customer: Customer
  }


type Category {
  id: ID!
  name: String!
}

type LoginOutput {
    token: String!
    user: User!
}
  
type Query {
    products: [Product!]!
    product(id: ID): Product
    categories: [Category!]!
    productsByCategory(id: ID): [Product!]!
  }

type Mutation {
  createProduct(input:ProductInput): Product
  deleteProduct(id:ID): Boolean
  editProduct(input:ProductInput): Product
  createCategory(input:CategoryInput): Category
  login(userInput: UserInput) : LoginOutput
}

input ProductInput{
  id: ID
  name: String!
  description: String
  price: Float!
  category: CategoryInput!
  size: [String]
  image: String!
}

input CategoryInput {
  id: ID
  name: String!
}

input UserInput {
    username: String!
    password: String!
}
  
`

export default typeDefs;