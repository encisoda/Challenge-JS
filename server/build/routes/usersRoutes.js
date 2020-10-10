"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
class OperationsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', usersController_1.usersController.getOne);
        this.router.put('/:id', usersController_1.usersController.update);
    }
}
const operationsRoutes = new OperationsRoutes();
exports.default = operationsRoutes.router;
