const typeDefs = `#graphql
type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    category: Category!
    size: [String]
    image: String!
    ratingAvg: Float
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
    user: User
    productLines: [ProductLine!]!
  }

type User {
    id: ID
    username: String!
    password: String!
    role: String
    name: String!
    email: String!
    phone: Int
    address: Address
    orders: [Order!]!
    }

type Address {
    id: ID!
    postalCode: String!
    streetAddress: String!
    city: String!
    country: String!
}

type Review {
  id: ID!
  title: String!
  text: String
  rating: Float!
  user: User!
  product: Product!
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
    productByCategory(id: ID): Product!
    login(userInput: UserInput) : LoginOutput
    orders: [Order!]!
    reviewsByProduct(id: ID): [Review!]!
    ordersByUser(id: ID): [Order!]!
    user(id:ID): User
  }

type Mutation {
  createProduct(input:ProductInput): Product
  deleteProduct(id:ID): Boolean
  editProduct(input:ProductInput): Product
  createCategory(input:CategoryInput): Category
  login(userInput: UserInput) : LoginOutput
  createOrder(orderInput:OrderInput): Order
  createReview(reviewInput:ReviewInput): Review
  createCustomerAccount(userInput:UserInput): User
  createAccount(userInput:UserInput): User
  createAddress(addressInput: AddressInput): Address
  addAddressToUser(id:ID, addressInput: AddressInput): User
}

input ProductInput{
  id: ID
  name: String!
  description: String
  price: Float!
  categoryId: ID
  category: CategoryInput
  size: [String]
  image: String!
  ratingAvg: Float
}

input CategoryInput {
  id: ID
  name: String!
}

input UserInput {
    username: String!
    password: String!
    name: String
    email: String
    phone: Int
    addressId: ID
    role: String
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
  userId: ID
  productLines: [ProductLineInput!]!
}

input ProductLineInput{
  id: ID
  linePrice: Float
  amount: Int!
  size: String!
  productId: ID!
}
input ReviewInput {
  id: ID
  title: String!
  text: String
  rating: Float!
  userId: ID!
  productId: ID!
}

`

export default typeDefs;
