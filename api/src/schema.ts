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
    orders: [Order!]!

}

type User {
    id: ID
    username: String!
    password: String!
    role: String
    customer: Customer
    }

type Address {
    id: ID!
    postalCode: String!
    streetAddress: String!
    city: String!
    country: String!
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
    login(userInput: UserInput) : LoginOutput
  }


type Mutation {
  createProduct(input:ProductInput): Product
  deleteProduct(id:ID): Boolean
  editProduct(input:ProductInput): Product
  createCategory(input:CategoryInput): Category
  createOrder(orderInput:OrderInput): Order
  createCustomerAccount(userInput:UserInput): User
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
    customer: CustomerInput
}

input CustomerInput {
  id: ID
  name: String!
  email: String!
  phone: Int
  addressId: ID
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
  customerId: ID!
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