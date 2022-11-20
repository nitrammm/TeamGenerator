const Manager = require('../lib/Manager');
const manager = new Manager('john', '1234', 'johnsummit@gmail.com', '101');

describe('when we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('john');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('johnsummit@gmail.com');
    expect(manager.officeNumber).toBe('101');
});

it('when we get the name from the getName() method', () => {
    expect(manager.getName()).toBe('john');
});

it('when we get the id from the getId() method', () => {
    expect(manager.getId()).toBe('1234');
});

it('when we get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('johnsummit@gmail.com');
});

it('when we get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('101');
});

test('when we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});