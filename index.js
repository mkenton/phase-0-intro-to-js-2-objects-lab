const employee = {
    name: "Michael Bolton",
    streetAddress: "123 Office Space Dr"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
const updatedEmployee = {...employee};
updatedEmployee[key] = value;
return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
    