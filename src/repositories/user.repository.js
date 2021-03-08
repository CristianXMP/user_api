const BaseRepository = require("./base.repository");
let _config = null;

class UserRepository extends BaseRepository {
    constructor({ config, User }) {
        super(config.PROCEDURES.user, User);
        _config = config;
    }
}

module.exports = UserRepository;