const BaseService = require("./base.service");
let _permissionRepository = null;

class PermissionService extends BaseService {
    constructor({ PermissionRepository }) {
        super(PermissionRepository);
        _permissionRepository = PermissionRepository;
    }
}
module.exports = PermissionService;