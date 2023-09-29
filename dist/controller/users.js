"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const uuid_1 = require("uuid");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json({
        users
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    res.json({
        user
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const newUser = user_1.default.build(body);
    const newuuid = (0, uuid_1.v4)();
    newUser.setDataValue('id', newuuid);
    newUser.setAttributes('createdAt', new Date());
    newUser.setAttributes('updatedAt', new Date());
    newUser.setDataValue('state', true);
    try {
        const existEmail = yield user_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existEmail != null) {
            return res.status(400).json({
                message: 'Email already exists'
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
    yield newUser.save();
    return res.status(201).json({
        newUser
    });
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const existUser = yield user_1.default.findByPk(id);
        if (existUser == null) {
            return res.status(400).json({
                message: 'User with id ' + id + ' does not exist'
            });
        }
        existUser.setAttributes('createdAt', existUser.getDataValue('createdAt'));
        existUser.setAttributes('updatedAt', new Date());
        existUser.setDataValue('state', true);
        yield existUser.update(body);
        return res.json({
            existUser
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const existUser = yield user_1.default.findByPk(id);
        if (existUser == null) {
            return res.status(400).json({
                message: 'User with id ' + id + ' does not exist'
            });
        }
        existUser.setAttributes('updatedAt', new Date());
        yield existUser.update({ state: false });
        return res.json({
            existUser
        });
    }
    catch (error) {
        return res.status(500).json({
            message: String(error)
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map