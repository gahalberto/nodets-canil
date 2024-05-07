import {Request, Response} from 'express';
import { createMenuObject } from '../helpers/createMenuObjects';
import { Pet } from '../models/Pet';

export const search = (req: Request, res:Response) => {
    let query: string = req.query.name as string;
    if (!query) {
        res.redirect('/');
    }
    const list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });
}