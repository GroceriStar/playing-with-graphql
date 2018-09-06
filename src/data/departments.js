const department_1 = {
    id: '1',
    name: 'Department 1',
    description: 'our very first department',
    created_at: '1/1/2018',
    updated_at: '1/4/2018'
};

const department_2 = {
    id: '2',
    name: 'Department 2',
    description: 'our second department',
    created_at: '3/1/2018',
    updated_at: '7/4/2018'
};

const departments = [department_1, department_2];

const showAllDepartments = () => new Promise((resolve) => resolve(departments));
const getDepartmentById = (id) => new Promise((resolve) => {
    const [department] = departments.filter((department) => {
        return department.id === id;
    });
    resolve(department);
});
const createDepartment = ({ name, description }) => {
    const department = {
        id: (new Buffer(name, 'utf8')).toString('base64'),
        name,
        description,
        created_at: (new Date()).toLocaleString(),
        updated_at: (new Date()).toLocaleString()
    };
    departments.push(department);

    return department;
};

exports.createDepartment = createDepartment;
exports.showAllDepartments = showAllDepartments;
exports.getDepartmentById = getDepartmentById;
