const typeDefs = `#graphql
type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    description: String
    category: String!
    size: String
    
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
    orderTime: Date!
    totalprice: Float!
    address: Address!
    customer: Customer!
    productlines: [Productline!]!
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


  
type Query {
    
  }

type Mutation {
    
  }
  

`

export default typeDefs;