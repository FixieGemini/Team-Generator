const Intern = require('../lib/Intern');

it('Test for Intern name.', () => {
    const newEmployee = new Intern ('Kevin', 3, 'kevin@email.com', 'Greendale');
    expect (newEmployee.name).toBe('Kevin')
})
it('Test for Intern ID.', () => {
    const newEmployee = new Intern ('Kevin', 3, 'kevin@email.com', 'Greendale');
    expect (newEmployee.id).toBe(3)
})
it('Test for Intern email.', () => {
    const newEmployee = new Intern ('Kevin', 3, 'kevin@email.com', 'Greendale');
    expect(newEmployee.email).toBe('kevin@email.com')
})
it('Test for Intern school.', () => {
    const newEmployee = new Intern ('Kevin', 3, 'kevin@email.com', 'Greendale');
    expect(newEmployee.school).toBe('Greendale')
})