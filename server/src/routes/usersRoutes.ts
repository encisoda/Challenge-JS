import { Router } from  'express';
import { usersController } from '../controllers/usersController';
 
class OperationsRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
 
        this.router.get('/:id', usersController.getOne);
        this.router.put('/:id', usersController.update);

    }
}

const operationsRoutes = new OperationsRoutes();
export default operationsRoutes.router;