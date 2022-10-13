const Manager = require('../lib/Manager');
const manager = new Manager('john', '1234', 'johnsummit@gmail.com', '101');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('john');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('johnsummit@gmail.com');
    expect(manager.officeNumber).toBe('101');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('john');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('1234');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('johnsummit@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('101');
});

test('test if we can get the rolde from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});