import {Request, Response} from 'express';
import { createMenuObject } from '../helpers/createMenuObjects';
import { Pet } from '../models/Pet';

export const home = (req: Request, res:Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'All Animals',
            description: 'All Animals avaible to adoption',
            backgroud: 'allanimals.jpg',
        },
        list
    });
}

export const dogs = (req: Request, res:Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Dogs',
            description: 'All Dogs avaible to adoption',
            backgroud: 'banner_dog.jpg',
        },
        list
    });
}

export const cats = (req: Request, res:Response) => {
    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'All Cats',
            description: 'All Cats avaible to adoption',
            backgroud: 'banner_cat.jpg',
        },
        list
    });
}

export const fishes = (req: Request, res:Response) => {
    let list = Pet.getFromType('fish'); 
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'All Fishes',
            description: 'All Fishes avaible to adoption',
            backgroud: 'banner_fish.jpg',
      },
      list
    });
}