// import Employee constructor
const Employee = require('./Employee')

// manager constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // call employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // change employee role to manager
    getRole() {
        return 'Manager';
    }
}

// export
module.exports = Manager;