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
exports.operationsController = void 0;
const database_1 = __importDefault(require("../database"));
class OperationsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const operations = yield database_1.default.query('SELECT * FROM operations');
            res.json(operations);
        });
    }
    getTen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const operations = yield database_1.default.query('SELECT * FROM operations ORDER BY date DESC LIMIT 3');
            res.json(operations);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {id} = req.params;
            const operations = yield database_1.default.query('SELECT * FROM operations WHERE id = ?', [req.params.id]);
            if (operations.length > 0) {
                return res.json(operations[0]);
            }
            res.status(404).json({ text: "La operacion solicitada no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO operations set ?', [req.body]);
            res.json({ message: 'creando operacion' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const operations = yield database_1.default.query('DElETE FROM operations WHERE id = ?', [req.params.id]);
            res.status(404).json({ text: "Se borro la operacion con exito" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const operations = yield database_1.default.query('UPDATE operations set ? WHERE id = ?', [req.body, req.params.id]);
            res.status(404).json({ text: "Se actualizo la operacion con exito" });
        });
    }
}
exports.operationsController = new OperationsController();
