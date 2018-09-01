var data = require('@groceristar/groceristar-fetch/groceristar')
console.log(data.getGrocery());

let myUser = {
    userId: '1',
    favs: 'my favs',
    ingredient_id: '1',
    grocery_id: '1'
};

let myGrocery = {
    grocery_id: '1',
    name: 'my g',
    img: 'my img',
    desc: 'desc',
    slug: 'slug',
    created_at: '123',
    updated_at: '123',
    id_1: '1',
    favs: 'my favs'
};

let myItem = {
    item_id: '1',
    name: 'item name',
    description: 'item desc',
    quantity: 100,
    purchase: 'today'
};

let myIng = {
    favs: 'my favs',
    ingredient_id: '1',
    name: 'my ingredient',
    description: 'my desc',
    custom: 'abc',
    created_at: '1/1/2017',
    updated_at: '1/1/2018',
    id_1: '1',
    department_id: '1'
};

let myUserGrocery = {
    userGrocery_id: '1',
    userId: '1'
};

let myUserFav = {
    ingredient_id: '1',
    userId: '1',
    favs: 'my favs',
    grocery_id: '1'
};

let myDepartment = {
    department_id: '1',
    name: 'my name',
    desc: 'my desc',
    created_at: '1/1/2017',
    updated_at: '1/1/2018'
}

let dummyData = {
    user: myUser,
    grocery: myGrocery,
    item: myItem,
    ingredient: myIng,
    userGrocery: myUserGrocery,
    userFav: myUserFav,
    department: myDepartment
};

module.exports = dummyData;
