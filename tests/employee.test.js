const Employee = require('../lib/employee');
const employee = new Employee ('john', '1234', 'johnsummit@gmail.com');


describe('employee', () => {
    expect(employee.name).toBe('john');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('johnsummit@gmail.com');
});

it('when we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('john');
});

it('when we get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1234');
});

it('when we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('johnsummit@gmail.com');
});

it('when we can get the rolde from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});