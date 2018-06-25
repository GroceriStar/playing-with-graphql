
# union Allergy | Diet | Nutrition | Holiday | Cuisine | Course

enum Type {
  ALLERGY, COURSE, CUISINE, DIET, HOLIDAY, NUTRITION
}

interface Attribute {
  name: String!
  type: Type!
}

type Attribute {
  name: String!
  type: Type!
}

type Recipe {
  image: String!
  title: String!
  directions: [Direction]!
  prep_time: String!
  # total_time: Number! or String!
  recipe_yield: String!
  attributes: [Attribute!]
  ingredients: [Ingredient!]
}

type Department {
  name: String!
  description: String!
  ingredients: [Ingredient!]
}

type Ingredient {
  name: String!
  description: String!
  custom: Boolean!
  department: Department!
}
