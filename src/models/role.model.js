const Permission = require('./permission.model');
class Role {
    constructor() {
        this.id;
        this.name;
        this.permissions = Permission;
    }

    set(id, name, permissions) {
        this.id = id;
        this.name = name;
        this.permissions = permissions;
    }

    toJSON() {
        const { id, name, permissions } = this;
        return {
            id,
            name,
            permissions
        }
    }
}

module.exports = new Role;