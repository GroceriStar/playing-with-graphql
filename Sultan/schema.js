const myData = require('./dummyData');
const { buildSchema } = require('graphql');

const typeDefs = buildSchema(`
type Query {
    Users: User!
    Groceries: Grocery!
    Items: Item!
    Ingredients: Ingredient!
    UserGrocery: UserGrocery!
    UserFav: UserFav!
    Departments: Department!
}

type User {
    userId: ID!
    favs: String!
    ingredient_id: ID!
    grocery_id: ID!
}

type Grocery {
    grocery_id: ID!
    name: String!
    img: String!
    desc: String!
    slug: String!
    created_at: String!
    updated_at: String!
    id_1: ID!
    favs: String!
}

type Item {
    item_id: ID!
    name: String!
    description: String!
    quantity: Int!
    purchase: String!
}

type Ingredient {
    favs: String!
    ingredient_id: ID!
    name: String!
    description: String!
    custom: String!
    created_at: String!
    updated_at: String!
    id_1: ID!
    department_id: ID!
}

type UserGrocery {
    userGrocery_id: ID!
    userId: ID!
}

type UserFav {
    ingredient_id: ID!
    userId: ID!
    favs: String!
    grocery_id: ID!
}

type Department {
    department_id: ID!
    name: String!
    desc: String!
    created_at: String!
    updated_at: String!
}`);

// type AccessToken {
//     userId: ID
// }

// type UserCredential {
//     userId: ID
// }

// type UserIdentity {
//     userId_1: ID
// }

const resolvers = {
    Query: {
        Users: () => myData.user,
        Groceries: () => myData.grocery,
        Items: () => myData.item,
        Ingredients: () => myData.ingredient,
        UserGrocery: () => myData.userGrocery,
        UserFav: () => myData.userFav,
        Departments: () => myData.department
    },
    User: {
        userId: (root) => root.id,
        favs: (root) => root.favs,
        ingredient_id: (root) => root.ingredient,
        grocery_id: (root) => root.grocery
    },
    Grocery: {
        grocery_id: (root) => root.grocery_id,
        name: (root) => root.name,
        img: (root) => root.img,
        desc: (root) => root.dec,
        slug: (root) => root.slug,
        created_at: (root) => root.created_at,
        updated_at: (root) => root.updated_at,
        id_1: (root) => root.id_1,
        favs: (root) => root.favs
    },
    Item: {
        item_id: (root) => root.item_id,
        name: (root) => root.name,
        description: (root) => root.description,
        quantity: (root) => root.quantity,
        purchase: (root) => root.purchase
    },
    Ingredient: {
        favs: (root) => root.favs,
        ingredient_id: (root) => root.ingredient_id,
        name: (root) => root.name,
        description: (root) => root.description,
        custom: (root) => root.custom,
        created_at: (root) => root.created_at,
        updated_at: (root) => root.updated_at,
        id_1: (root) => root.id_1,
        department_id: (root) => root.department_id
    },
    UserGrocery: {
        userGrocery_id: (root) => root.userGrocery_id,
        userId: (root) => root.userId
    },
    UserFav: {
        ingredient_id: (root) => root.ingredient_id,
        userId: (root) => root.userId,
        favs: (root) => root.favs,
        grocery_id: (root) => root.grocery_id
    },
    Department: {
        department_id: (root) => root.department_id,
        name: (root) => root.name,
        desc: (root) => root.desc,
        created_at: (root) => root.created_at,
        updated_at: (root) => root.updated_at
    }
}

let data = [typeDefs, resolvers];

module.exports = data;
