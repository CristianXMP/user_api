class Permission {
    constructor() {
        this.id;
        this.name;
    }

    set(id, name) {
        this.id = id;
        this.name = name;
    }

    toJSON() {
        const { id, name } = this;
        return {
            id,
            name
        }
    }
}

module.exports = new Permission;