type User {
    userId: ID,
    favs: Binary,
    ingredient_id: ID,
    grocery_id: ID
}

type Grocery {
    grocery_id: ID,
    name: Binary,
    img: Binary,
    desc: Binary,
    slug: Binary,
    created_at: Date,
    updated_at: Date,
    id_1: ID,
    favs: Binary
}

type Item {
    item_id: ID,
    name: Binary,
    description: Binary,
    quantity: Int,
    purchase: Binary
}

type Ingredient {
    favs: Binary,
    ingredient_id: ID,
    name: Binary,
    description: Binary,
    custom: Binary,
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
    favs: Binary,
    grocery_id: ID
}

type Department {
    department_id: ID,
    name: Binary,
    desc: Binary,
    created_at: Date,
    updated_at: Date
}

type AccessToken {
    userId: ID
}

type UserCredential {
    userId: ID
}

type UserIdentity {
    userId_1: ID
}