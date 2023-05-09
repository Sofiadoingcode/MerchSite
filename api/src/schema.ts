const typeDefs = `#graphql
type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    category: String!
    size: String
  }

type ProductLine {
    id: ID!
    linePrice: Float
    amount: Int!
    size: String!
    product: Product!
  }
  
type Order {
    id: ID!
    orderTime: String!
    totalPrice: Float!
    address: Address!
    customer: Customer!
    productLines: [ProductLine!]!
  }

type Customer {
    id: ID!
    name: String!
    email: String!
    phone: Int
    address: Address
}

type Address {
    id: ID!
    postalCode: String!
    streetAddress: String!
    city: String!
    country: String!
}

type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    role: String!
  }


  
type Query {
    products: [Product!]!
    product(id: ID): Product
  }


type Mutation {
  createProduct(input:ProductInput): Product
  deleteProduct(id:ID): Boolean
  editProduct(input:ProductInput): Product
  createOrder(orderInput:OrderInput): Order
}

input ProductInput{
  id: ID
  name: String!
  description: String
  price: Float!
  category: String!
  size: String
}

input CustomerInput {
  id: ID
  name: String!
  email: String!
  phone: Int
  address: AddressInput
}

input AddressInput{
    id: ID
    postalCode: String!
    streetAddress: String!
    city: String!
    country: String!
}

input OrderInput{
  id: ID
  orderTime: Int
  totalPrice: Float!
  address: AddressInput!
  customer: CustomerInput!
  productLines: [ProductLineInput!]!
}

input ProductLineInput{
  id: ID
  linePrice: Float
  amount: Int!
  size: String!
  product: ProductInput!
}
  
`

export default typeDefs;