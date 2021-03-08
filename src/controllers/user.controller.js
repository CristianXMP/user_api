let _userService = null;
class UserController {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async create(req, res) {
        const { body } = req;
        const user = await _userService.create(body);
        return res.send(JSON.parse(user.data));
    }

    async get(req, res) {
        const { userId } = req.params;
        const user = await _userService.get(userId);
        return res.send(user);
    }

    async getAll(req, res) {
        const users = await _userService.getAll();
        return res.send(users);
    }

    async update(req, res) {
        const { body } = req;
        const resp = await _userService.update(body);
        return res.send(resp);
    }

    async delete(req, res) {
        const { userId } = req.params;
        const resp = await _userService.delete(userId);
        return res.send(resp);
    }
}

module.exports = UserController;