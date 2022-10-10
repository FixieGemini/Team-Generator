const { exportAllDeclaration } = require('@babel/types');
const Engineer = require('../lib/Engineer');

it('Test engineer name.', () => {
    const newEmployee = new Engineer ("yariname", 2, "yari@mail.com", "yari");
    expect(newEmployee.name).toBe("yariname")
})
it('Test engineer id.', () => {
    const newEmployee = new Engineer ("yariname", 2, "yari@mail.com", "yari");
    expect(newEmployee.id).toBe(2)
})
it('Test engineer email.', () => {
    const newEmployee = new Engineer ("yariname", 2, "yari@mail.com", "yari");
    expect(newEmployee.email).toBe("yari@mail.com")
})
it('Test engineer github.', () => {
    const newEmployee = new Engineer ("yariname", 2, "yari@mail.com", "yari");
    expect(newEmployee.github).toBe("yari")
})
