let _permissionService = null;
class PermissionController {
    constructor({ PermissionService }) {
        _permissionService = PermissionService;
    }

    async create(req, res) {
        const { body } = req;
        const permission = await _permissionService.create(body);
        return res.send(JSON.parse(permission.data));
    }

    async get(req, res) {
        const { permId } = req.params;
        const permission = await _permissionService.get(permId);
        return res.send(permission);
    }

    async getAll(req, res) {
        const permissions = await _permissionService.getAll();
        return res.send(permissions);
    }

    async update(req, res) {
        const { body } = req;
        const resp = await _permissionService.update(body);
        return res.send(resp);
    }

    async delete(req, res) {
        const { permId } = req.params;
        const resp = await _permissionService.delete(permId);
        return res.send(resp);
    }
}

module.exports = PermissionController;