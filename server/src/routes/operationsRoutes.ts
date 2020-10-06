import { Router } from  'express';

class OperationsRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',(req, res) => res.send('operaciones'));
    }
}

const operationsRoutes = new OperationsRoutes();
export default operationsRoutes.router;