const {
  nodeDefinitions,
  fromGlobalId
} = require('graphql-relay');
const { getObjectById } = require('./data');

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    return getObjectById(type.toLowerCase(), id);
  },
  (object) => {
    const { departmentType } = require('../');

    if (object.name) {
      return departmentType;
    }
    return null;
  }
);

exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;