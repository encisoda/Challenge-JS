"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class OperationsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('operaciones'));
    }
}
const operationsRoutes = new OperationsRoutes();
exports.default = operationsRoutes.router;
