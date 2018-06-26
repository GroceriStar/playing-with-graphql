
type Department {
  id: ID!
  name: String!
  description: String!
  ingredients: [Ingredient!]
}

type Ingredient {
  id:ID!
  name: String!
  description: String!
  custom: Boolean!
  department: Department!
}

type Query {
  allIngredients($department: id):[Ingredient!]!
}

type Mutation {
  createIngredient(name: String!, description: String!, custom: Boolean!): Ingredient!
}

type Subscription {
  added: Ingredient {
    id: name
  }
}
