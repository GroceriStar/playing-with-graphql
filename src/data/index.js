var data = require('@groceristar/groceristar-fetch/groceristar')
//console.log(data.getDepartments());

const { createDepartment, showAllDepartments, getDepartmentById } = require('./departments');
const { createUser, showAllUsers, getUserById } = require('./users');

const createType = {
    createDepartment,
    createUser
};

const showType = {
    showAllDepartments,
    showAllUsers
};

const getTypeById = {
    getDepartmentById,
    getUserById
};


const getObjectById = (type, id) => {
  const types = {
      department: getDepartmentById,
      user: getUserById
  };

  return types[type](id);
}

exports.showType = showType;
exports.getTypeById = getTypeById;
exports.createType = createType;
exports.getObjectById = getObjectById;
