# Setting up the server
Install latest versions of  node.js and npm 
type the command `npm start`
open `http://localhost:3000/graphql` on your browser to test the server

# playing-with-graphql

# For setting up this project, follow:
https://graphql.org/graphql-js/

# Links/credentials to MongoDB databases:

#### Groceristar database
```
"url": "mongodb://heroku_p3w65n77:h3ab8q3uaqdk7tjrauhbl7dd6r@ds235065.mlab.com:35065/heroku_p3w65n77",
"name": "groceryDS",
```

#### Recipe Search API database
```
"searchDS": {
"url": "mongodb://heroku_ghbnqks1:eb8kogbcofqvkh13d6ccep825l@ds139994.mlab.com:39994/heroku_ghbnqks1"
},
```

#### ChickenKyiv(Recipe server) database
```
"recipeDS": {
"url": "mongodb://heroku_p0dxgncb:gl2rr2bi235aoqfdojelqspjn1@ds147052.mlab.com:47052/heroku_p0dxgncb"
}
```

# Database schemes for ChickenKyiv
- https://chickenkyiv.gitbook.io/documentation/database-schemes
- https://github.com/ChickenKyiv/database-visuals
- https://github.com/ChickenKyiv/database-visuals/tree/master/groceristar/models
- https://github.com/ChickenKyiv/database-visuals/tree/master/rapi/models
- https://github.com/ChickenKyiv/database-visuals/tree/master/recipeSearchAPI/models


# Long term goals
We have at least few databases and I prepare some plan so we actually will not just replicate logic of our current API servers, but we also will extend and update it.
Some details please read here: 
- https://medium.com/groceristar/chickenkyiv-database-logic-intro-part-1-b2c449d92aa3
- https://medium.com/groceristar/chickenkyiv-database-logic-simple-samples-part-2-1ee3ccc6b3d
- https://medium.com/groceristar/chicken-kyiv-recipe-db-schema-part3-b80f33ec5d96



# Other links for further reading
https://github.com/ChickenKyiv/awesome-graphql-beginner-links
