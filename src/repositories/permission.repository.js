const BaseRepository = require("./base.repository");
let _config = null;

class PermissionRepository extends BaseRepository {
    constructor({ config, Permission }) {
        super(config.PROCEDURES.permission, Permission);
        _config = config;
    }
}

module.exports = PermissionRepository;