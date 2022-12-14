const Engineer = require('../lib/engineer');
const engineer = new Engineer('john', '1234', 'johnsummit@gmail.com', 'nitrammm');

describe('if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('john');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('johnsummit@gmail.com');
    expect(engineer.githubUsername).toBe('nitrammm');
});

it('when we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('john');
});

it('when we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('1234');
});

it('when we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('johnsummit@gmail.com');
});

it('when we can get the github username from the getGithub()method', () => {
    expect(engineer.getGithub()).toBe('nitrammm');
});

it('when we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});