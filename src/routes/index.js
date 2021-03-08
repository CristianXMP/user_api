const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { SWAGGER_PATH } = require("../config");

module.exports = function ({
  PermissionRoutes,
  RolesRoutes,
  UserRoutes
} = require("./index.routes")) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

  apiRoutes.use("/permission", PermissionRoutes);
  apiRoutes.use("/role", RolesRoutes);
  apiRoutes.use("/user", UserRoutes);
  router.use("/v1/api", apiRoutes);
  return router;
};
