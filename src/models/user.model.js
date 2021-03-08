const Role = require('./role.model');
class User {
    constructor() {
        this.id;
        this.name;
        this.lastName;
        this.email;
        this.phoneNumber;
        this.role = Role;
    }

    set(id, name, lastName, email, phoneNumber, role) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber
        this.role = role;
    }

    toJSON() {
        const { id, name, lastName, email, phoneNumber, role } = this;
        return {
            id,
            name,
            lastName,
            email,
            phoneNumber,
            role
        }
    }
}

module.exports = new User;