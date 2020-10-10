import { Router } from  'express';
import { operationsController } from '../controllers/operationsController';
 
class OperationsRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', operationsController.list);
        this.router.get('/:id', operationsController.getOne);
        this.router.get('/ten', operationsController.getTen);
        this.router.post('/', operationsController.create);
        this.router.delete('/:id', operationsController.delete);
        this.router.put('/:id', operationsController.update);
    }
}

const operationsRoutes = new OperationsRoutes();
export default operationsRoutes.router;