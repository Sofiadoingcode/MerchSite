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
    lineprice: Float
    amount: Int!
    size: String!
    product: Product!
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
    phone: Int
    address: Address

}

type Address {
    id: ID!
    postalcode: String!
    streetaddress: String!
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
    productLines: [ProductLine!]!

  }

type Mutation {
  createProduct(input:ProductInput): Product
  deleteProduct(id:ID): Boolean
  editProduct(input:ProductInput): Product
  createOrder(input:OrderInput): Order
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
    postalcode: String!
    streetaddress: String!
    city: String!
    country: String!
}

input OrderInput{
  id: ID
  orderTime: String
  totalprice: Float!
  address: AddressInput!
  customer: CustomerInput!
  productlines: [ProductLineInput!]!
}

input ProductLineInput{
  id: ID
  lineprice: Float
  amount: Int!
  size: String!
  product: ProductInput!
}
  
`

export default typeDefs;