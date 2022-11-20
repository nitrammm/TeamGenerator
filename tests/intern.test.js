const Intern = require('../lib/intern');
const intern = new Intern('john', '1234', 'johnsummit@gmail.com', 'UTAustin');


describe('when we can get the constructor values for the intern object', () => {
    expect(intern.name).toBe('john');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('johnsummit@gmail.com');
    expect(intern.school).toBe('UTAustin');
});

it('when we get the name from the getName() method', () => {
    expect(intern.getName()).toBe('john');
});

it('when we get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1234');
});

it('when we get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('johnsummit@gmail.com');
});

it('when we get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UTAustin');
});

it('when we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});