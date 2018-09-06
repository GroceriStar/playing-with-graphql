const user1 = {
    userId: '1',
    name: 'Mike',
    favs: 'user1 faves',
    ingredient_id: '1',
    grocery_id: '1'
};

const user2 = {
    userId: '2',
    name: 'Jack',
    favs: 'user2 favs',
    ingredient_id: '2',
    grocery_id: '2'
};

const users = [user1, user2];

const showAllUsers = () => new Promise((resolve) => resolve(users));
const getUserById = (id) => new Promise((resolve) => {
    const [user] = users.filter((user) => {
        return user.userId === id;
    });
    resolve(user);
});

const createUser = ({ name, favs, ingredient_id, grocery_id }) => {
    const user = {
        userId: (new Buffer(name, 'utf8')).toString('base64'),
        name,
        favs,
        ingredient_id,
        grocery_id
    };
    users.push(user);

    return user;
};

exports.showAllUsers = showAllUsers;
exports.createUser = createUser;
exports.getUserById = getUserById;
