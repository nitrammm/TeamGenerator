const Intern = require('../lib/intern');
const intern = new Intern('john', '1234', 'johnsummit@gmail.com', 'UTAustin');


test('test if we can get the constructor values for the intern object', () => {
    expect(intern.name).toBe('john');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('johnsummit@gmail.com');
    expect(intern.school).toBe('UTAustin');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('john');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1234');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('johnsummit@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UTAustin');
});

test('test if we can get the rolde from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});