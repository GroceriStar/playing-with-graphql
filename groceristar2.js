type Grocery {
  id: ID!
  name: String!
  image: String!
  description: String!
  slug: String!
  departments: [Department!]
  purchased: [Ingredient!]
  ingredients: [Ingredient!]
}
# add show/hide options
# add purchased stuff

interface Department {
  id: ID!
  department: Department!
}



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
