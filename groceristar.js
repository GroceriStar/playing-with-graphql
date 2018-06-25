
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
