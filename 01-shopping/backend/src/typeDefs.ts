export const typeDefinitions = /* GraphQL */ `
  scalar Date

  enum Permission {
    ADMIN
    USER
    ITERMCREATE
    ITEMUPDATE
    ITEMDELETE
    PERMISSIONUPDATE
  }

  type Item {
    id: Int!
    title: String!
    description: String!
    image: String
    largeImage: String
    price: Int!
    createdAt: Date!
    updatedAt: Date!
  }

  type User {
    id: Int!
    name: String!
    email: String!
    permissions: [Permission!]!
  }

  type Meta {
    count: Int!
  }

  type SuccessMessage {
    message: String
  }

  type Mutation {
    createItem(title: String, description: String, price: Int, image: String, largeImage: String): Item!
    updateItem(id: Int!, title: String, description: String, price: Int): Item!
    deleteItem(id: Int!): Item
    signup(email: String!, password: String!, name: String!): User!
    signin(email: String!, password: String!): User!
    signout: SuccessMessage
    requestReset(email: String!): SuccessMessage
    resetPassword(resetToken: String!, password: String!, confirmPassword: String!): User!
    updatePermissions(permissions: [Permission], userId: Int!): User
  }

  type Query {
    items(first: Int, skip: Int): [Item]!
    item(id: Int!): Item
    _allItemsMeta: Meta
    me: User
    users: [User]!
  }
`