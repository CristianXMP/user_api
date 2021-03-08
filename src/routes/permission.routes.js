const { Router } = require("express");

module.exports = function ({ PermissionController }) {
    const router = Router();

    router.get("/", PermissionController.getAll);
    router.get("/:permId", PermissionController.get);
    router.post("/", PermissionController.create);
    router.patch("/", PermissionController.update);
    router.delete("/:permId", PermissionController.delete);

    return router;
};