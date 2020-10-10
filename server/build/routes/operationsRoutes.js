"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const operationsController_1 = require("../controllers/operationsController");
class OperationsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', operationsController_1.operationsController.list);
        this.router.get('/:id', operationsController_1.operationsController.getOne);
        this.router.get('/ten', operationsController_1.operationsController.getTen);
        this.router.post('/', operationsController_1.operationsController.create);
        this.router.delete('/:id', operationsController_1.operationsController.delete);
        this.router.put('/:id', operationsController_1.operationsController.update);
    }
}
const operationsRoutes = new OperationsRoutes();
exports.default = operationsRoutes.router;
