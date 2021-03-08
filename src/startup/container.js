const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");
// models
const {
  Permission,
  Role,
  User
} = require("../models");

// repositories
const {
  PermissionRepository,
  RoleRepository,
  UserRepository
} = require("../repositories");

// services
const {
  PermissionService,
  RoleService,
  UserService
} = require("../services");

// controllers
const {
  PermissionController,
  RoleController,
  UserController
} = require("../controllers");
// routes
const {
  PermissionRoutes,
  RolesRoutes,
  UserRoutes
} = require("../routes/index.routes");
const Routes = require("../routes");
//const GroupRepository = require("../repositories/group.repository");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  //register model 
  .register({
    Permission: asValue(Permission),
    Role: asValue(Role),
    User: asValue(User)
  })
  //register repository
  .register({
    PermissionRepository: asClass(PermissionRepository).singleton(),
    RoleRepository: asClass(RoleRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton()
  })
  //register service
  .register({
    PermissionService: asClass(PermissionService).singleton(),
    RoleService: asClass(RoleService).singleton(),
    UserService: asClass(UserService).singleton()
  })
  //register controlller
  .register({
    PermissionController: asClass(PermissionController.bind(PermissionController)).singleton(),
    RoleController: asClass(RoleController.bind(RoleController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton()
  })
  .register({
    PermissionRoutes: asFunction(PermissionRoutes).singleton(),
    RolesRoutes: asFunction(RolesRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton()
  });

module.exports = container;