const Engineer = require('../lib/engineer');
const engineer = new Engineer('john', '1234', 'johnsummit@gmail.com', 'nitrammm');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('john');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('johnsummit@gmail.com');
    expect(engineer.github).toBe('nitrammm');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('john');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('1234');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('johnsummit@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(engineer.getGithub()).toBe('nitrammm');
});

test('test if we can get the rolde from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});