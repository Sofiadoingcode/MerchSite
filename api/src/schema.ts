const typeDefs = `#graphql
type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    category: Category!
    size: [String!]!
    image: String!
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
    id: ID!
    username: String!
    password: String!
    email: String!
    role: String!
  }

type Category {
  id: ID!
  name: String!
  products: [Product!]!
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
}

input ProductInput{
  id: ID
  name: String!
  description: String
  price: Float!
  category: String!
  size: [String!]!
  image: String!
}
  
`

export default typeDefs;