const BaseService = require("./base.service");
let _roleRepository = null;

class RoleService extends BaseService {
    constructor({ RoleRepository }) {
        super(RoleRepository);
        _roleRepository = RoleRepository;
    }
    async deleteOnePermission(_roleId, _permId) {
        if (!_roleId || !_permId) {
            const error = new Error();
            error.status = 400;
            error.message = "rolId or permId must be sent";
            throw error;
        }
        return await _roleRepository.deleteOnePermission(_roleId, _permId);
    }
}
module.exports = RoleService;