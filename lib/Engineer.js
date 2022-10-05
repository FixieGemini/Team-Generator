// import Employee constructor
const Employee = require('./Employee');

// engineer constructor extends emloyee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // call employee constructor
        super (name, id, email);

        this.github = github;
    }

    // return github from input
    getGithub() {
        return this.github;
    }

    // change employee role to engineer
    getRole () {
        return 'Engineer';
    }
}

// export
module.exports = Engineer;