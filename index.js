const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const graphqlHTTP = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString, 
  GraphQLInt,
} = require('graphql');

const { showAllDepartments, getDepartmentById, createDepartment } = require('./src/data');

const {
  globalIdField,
  connectionDefinitions,
  connectionFromPromisedArray,
  connectionArgs,
  mutationWithClientMutationId,
} = require('graphql-relay');

const { nodeInterface, nodeField } = require('./src/node');

const departmentType = new GraphQLObjectType({
  name: 'Department',
  description: 'A department in grocery store',
  fields: {
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: 'The name of the department'
    },
    description: {
      type: GraphQLString,
      description: 'Description of the department'
    },
    created_at: {
      type: GraphQLString,
      description: 'Date on which the department was created'
    },
    updated_at: {
      type: GraphQLString,
      description: 'Date on which the department was updated'
    }
  },
  interfaces: [nodeInterface]
});
exports.departmentType = departmentType;

const { connectionType: departmentConnection } = connectionDefinitions({
  nodeType: departmentType,
  connectionFields: () => ({
    totalCount: {
      type: GraphQLInt,
      description: 'Total number of departments in this connection.',
      resolve: (connection) => {
        return connection.edges.length;
      }
    }
  })
});

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Root query type',
  fields: {
    node: nodeField,
    departments: {
      type: departmentConnection,
      args: connectionArgs,
      resolve: (_, args) => connectionFromPromisedArray(
        showAllDepartments(),
        args
      )
    },
    department: {
      type: departmentType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the department'
        }
      },
      resolve: (_, args) => {
        return getDepartmentById(args.id);
      }
    }
  }
});

const departmentMutation = mutationWithClientMutationId({
  name: 'AddDepartment',
  inputFields: {
    name: {
      type: GraphQLString,
      description: 'The name of the department'
    },
    description: {
      type: GraphQLString,
      description: 'Description of the department'
    }
  },
  outputFields: {
    department: {
      type: departmentType
    }
  },
  mutateAndGetPayload: (args) => new Promise((resolve, reject) => {
    Promise.resolve(createDepartment(args))
      .then((department) => resolve({ department }))
      .catch(reject);
  })
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation type',
  fields: {
    createDepartment: departmentMutation
  }
});

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});