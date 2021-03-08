const util = require("util");
const { ObjectParser } = require("../helpers")
let _entity = null;

class BaseRepository {
    constructor(procedure, entity) {
        this.procedure = procedure;
        _entity = entity;
        _entity = {};
    }

    async get(id) {
        let resp = {};
        const dbQuery = util.promisify(db.query).bind(db);
        const dbResp = await dbQuery(`call ${this.procedure.get}(?)`, [id]);
        resp = ObjectParser(_entity, JSON.parse(dbResp[0][0].data));
        return resp
    }

    async getAll() {
        let resp = {};
        const dbQuery = util.promisify(db.query).bind(db);
        const dbResp = await dbQuery(`call ${this.procedure.getAll}`);
        resp = [];
        dbResp[0][0].data === null ? [] : JSON.parse(dbResp[0][0].data).forEach(reg => {
            resp.push(ObjectParser(_entity, reg));
        });

        return resp


    }

    async create(entity) {
        let resp = {};
        const dbQuery = util.promisify(db.query).bind(db);
        const dbResp = await dbQuery(`call ${this.procedure.create}(?)`, [JSON.stringify(entity)]);
        resp = dbResp[0][0];
        return resp;
    }

    async update(entity) {
        let resp = {};
        const dbQuery = util.promisify(db.query).bind(db);
        const dbResp = await dbQuery(`call ${this.procedure.update}(?)`, [JSON.stringify(entity)]);
        resp = { success: dbResp[0][0].success == 1 ? true : false };
        return resp;
    }

    async delete(_id) {
        let resp = {};
        const dbQuery = util.promisify(db.query).bind(db);
        const dbResp = await dbQuery(`call ${this.procedure.delete}(?)`, [_id]);
        resp = { success: dbResp[0][0].success == 1 ? true : false };
        return resp;
    }
}

module.exports = BaseRepository;