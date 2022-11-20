const buildTeam = (team) => {
    console.log(team);

    const website = [];

    const buildManager = manager => {
        console.log(manager);
        let managerWebsite = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${manager.name} <br/>
            <i class="fas fa-mug-hot"></i>Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber} </li>
            </ul>
        </div>
        `;
        website.push(managerWebsite);
    }

    const buildEngineer = engineer => {
        console.log(engineer);
        let engineerWebsite = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${engineer.name} <br/>
            <i class="fas fa-glasses"></i>Engineer</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">Github Username: ${engineer.githubUsername} </li>
            </ul>
        </div>
        `;
        website.push(engineerWebsite);
    }

    const buildIntern = intern => {
        console.log(intern);
        let internWebsite = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${intern.name} <br/>
            <i class="fas fa-user-graduate"></i>Intern</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
        website.push(internWebsite);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            buildManager(team[i]);
        }
        if (team[i].getRole() === 'Engineer') {
            buildEngineer(team[i]);
        }
        if (team[i].getRole() === 'Intern') {
            buildIntern(team[i]);
        }
    }

    return website.join('');
}
    module.exports = team => {
        return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
        <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
        <title>Team Generator</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        </header>

    <main> ${buildTeam(team)} </main>


    
    </body>
    </html> `
    };
