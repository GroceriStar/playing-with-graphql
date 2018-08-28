Here is the server I built with graphql-relay, I had tested it with the following queries using GraphiQL tool

```
query AllDepartmentsQuery {
  departments {
    edges {
      node {
        id
      	name
      	description
      	created_at
      	updated_at
      }
    }
  }
}
```

And also this query
```
mutation AddDepartmentQuery($input: AddDepartmentInput!) {
  createDepartment(input: $input) {
    department {
      id
      name
      description
      created_at
      updated_at
    }
  }
}
```
I use the following for the query variables field for the mutation
```
{
  "input": {
    "name": "Fresh veggies department",
    "description": "Fresh vegetables"
  }
}
```
