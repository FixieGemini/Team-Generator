const Employee = require('../lib/Employee');

it('Test name of employee', () => {
    const employee = new Employee('Yari');
    expect (employee.name).toBe('Yari');
})