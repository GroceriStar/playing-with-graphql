type User {
    userId: ID,
    favs: String,
    ingredient_id: ID,
    grocery_id: ID
}

type Grocery {
    grocery_id: ID,
    name: String,
    img: String,
    desc: String,
    slug: String,
    created_at: Date,
    updated_at: Date,
    id_1: ID,
    favs: String
}

type Item {
    item_id: ID,
    name: String,
    description: String,
    quantity: Int,
    purchase: String
}

type Ingredient {
    favs: String,
    ingredient_id: ID,
    name: String,
    description: String,
    custom: String,
    created_at: Date,
    updated_at: Date,
    id_1: ID,
    department_id: ID
}

type UserGrocery {
    userGrocery_id: ID,
    userId: ID
}

type UserFav {
    ingredient_id: ID,
    userId: ID,
    favs: String,
    grocery_id: ID
}

type Department {
    department_id: ID,
    name: String,
    desc: String,
    created_at: Date,
    updated_at: Date
}

// type AccessToken {
//     userId: ID
// }

// type UserCredential {
//     userId: ID
// }

// type UserIdentity {
//     userId_1: ID
// }