const { Router } = require("express");

module.exports = function ({ RoleController }) {
    const router = Router();

    router.get("/", RoleController.getAll);
    router.get("/:roleId", RoleController.get);
    router.post("/", RoleController.create);
    router.patch("/", RoleController.update);
    router.delete("/:roleId", RoleController.delete);
    router.delete("/:roleId/:permId", RoleController.deleteOnePermission);

    return router;
};