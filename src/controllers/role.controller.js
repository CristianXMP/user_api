let _roleService = null;
class RoleController {
    constructor({ RoleService }) {
        _roleService = RoleService;
    }

    async create(req, res) {
        const { body } = req;
        const role = await _roleService.create(body);
        return res.send(JSON.parse(role.data));
    }

    async get(req, res) {
        const { roleId } = req.params;
        const role = await _roleService.get(roleId);
        return res.send(role);
    }

    async getAll(req, res) {
        const roles = await _roleService.getAll();
        return res.send(roles);
    }

    async update(req, res) {
        const { body } = req;
        const resp = await _roleService.update(body);
        return res.send(resp);
    }

    async delete(req, res) {
        const { roleId } = req.params;
        const resp = await _roleService.delete(roleId);
        return res.send(resp);
    }

    async deleteOnePermission(req, res) {
        const { roleId, permId } = req.params;
        const resp = await _roleService.deleteOnePermission(roleId, permId);
        return res.send(resp);
    }
}

module.exports = RoleController;