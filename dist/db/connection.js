"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize((_a = process.env.MYSQL_DATABASE) !== null && _a !== void 0 ? _a : 'devdb', (_b = process.env.MYSQL_USER) !== null && _b !== void 0 ? _b : 'devuser', (_c = process.env.MYSQL_PASSWORD) !== null && _c !== void 0 ? _c : 'devpass', {
    host: 'localhost',
    dialect: 'mysql',
    port: Number((_d = process.env.MYSQL_PORT) !== null && _d !== void 0 ? _d : 3308),
    logging: true
});
exports.default = db;
//# sourceMappingURL=connection.js.map