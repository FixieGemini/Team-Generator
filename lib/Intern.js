// import Employee constructor
const Employee = require('./Employee');

// intern constructor extends employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        //call employee constructor
        super (name, id, email);
         
        this.school = school;
    }
    // return school from input
    getSchool () {
        return this.school;
    }

    //change employee role to intern
    getRole () {
        return 'Intern';
    }

}

// export
module.exports = Intern;