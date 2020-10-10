import {Request, Response} from 'express';

import db from '../database';

class UsersController {
 
    public async getOne(req: Request, res: Response): Promise<any>{
        //const {id} = req.params;
        const operations = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
        if(operations.length > 0){
            return res.json(operations[0]);
        }
        res.status(404).json({text: "La operacion solicitada no existe"});
    }
    
    public async update(req: Request, res: Response): Promise<void>{
        const operations = await db.query('UPDATE users set ? WHERE id = ?', [req.body, req.params.id]);
        res.status(404).json({text: "Se actualizo el monto con exito"});
    }

}

export const usersController = new UsersController();