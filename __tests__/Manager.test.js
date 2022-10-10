const Manager = require('../lib/Manager');

it('Test manager name.', () => {
    const newEmployee = new Manager ("manager name", 1, "manager@email.com", 1234);
    expect(newEmployee.name).toBe("manager name")
})
it('Test manager id.', () => {
    const newEmployee = new Manager ("manager name", 1, "manager@email.com", 1234);
    expect(newEmployee.id).toBe(1)
})
it('Test manager email.', () => {
    const newEmployee = new Manager ("manager name", 1, "manager@email.com", 1234);
    expect(newEmployee.email).toBe("manager@email.com")
})
it('Test manager office number.', () => {
    const newEmployee = new Manager ("manager name", 1, "manager@email.com", 1234);
    expect(newEmployee.officeNumber).toBe(1234)
})
