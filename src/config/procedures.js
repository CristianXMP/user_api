module.exports = {
  user: {
    create: 'create_user',
    get: 'get_user',
    getAll: 'get_all_users',
    update: 'update_user',
    delete: 'delete_user'
  },
  role: {
    create: 'create_role',
    get: 'get_role',
    getAll: 'get_all_roles',
    update: 'update_role',
    delete: 'delete_role',
    deleteOnePermission: 'delete_one_permission_by_role'
  },
  permission: {
    create: 'create_permission',
    get: 'get_permission',
    getAll: 'get_all_permissions',
    update: 'update_permission',
    delete: 'delete_permission'
  }

}