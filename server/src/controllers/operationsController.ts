import {Request, Response} from 'express';

import db from '../database';

class OperationsController {

    public async list(req: Request, res: Response){
        const operations = await db.query('SELECT * FROM operations');
        res.json(operations);
    }

    public async getTen(req: Request, res: Response){
        const operations = await db.query('SELECT * FROM operations ORDER BY date DESC LIMIT 3');
        res.json(operations);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        //const {id} = req.params;
        const operations = await db.query('SELECT * FROM operations WHERE id = ?', [req.params.id]);
        if(operations.length > 0){
            return res.json(operations[0]);
        }
        res.status(404).json({text: "La operacion solicitada no existe"});
    } 

    public async create(req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO operations set ?', [req.body]);
        res.json({message: 'creando operacion'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const operations = await db.query('DElETE FROM operations WHERE id = ?', [req.params.id]);
        res.status(404).json({text: "Se borro la operacion con exito"});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const operations = await db.query('UPDATE operations set ? WHERE id = ?', [req.body, req.params.id]);
        res.status(404).json({text: "Se actualizo la operacion con exito"});
    }

}

export const operationsController = new OperationsController();