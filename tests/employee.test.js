const Employee = require('../lib/employee');
const employee = new Employee ('john', '1234', 'johnsummit@gmail.com');


test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('john');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('johnsummit@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('john');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1234');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('johnsummit@gmail.com');
});

test('test if we can get the rolde from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});