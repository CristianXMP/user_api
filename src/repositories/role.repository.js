const BaseRepository = require("./base.repository");
const util = require("util");
let _config = null;
class RoleRepository extends BaseRepository {
    constructor({ config, Role }) {
        super(config.PROCEDURES.role, Role);
        _config = config;
    }

    async deleteOnePermission(_roleId, _permId) {
        let resp = {};
        const dbQuery = util.promisify(db.query).bind(db);
        const dbResp = await dbQuery(`call ${this.procedure.deleteOnePermission}(?,?)`, [_roleId, _permId]);
        resp = { success: dbResp[0][0].success == 1 ? true : false };
        return resp;
    }
}

module.exports = RoleRepository;