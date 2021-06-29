import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        name: 'Carlos', 
        email: 'carloshalbuquerque2@gmail.com', 
        password: '123456',
        techs: [
            'Javascript', 
            'TypeScript', 
            'React',
            { title: 'Javascript', experience: 60 }
        ],
    });

    return response.json({
        message_01: "O usuário será apresentando!",
        name: user.name,
        email: user.email,
        password: user.password,
        message_02: "Quais tecnologias o usuário domina?",
        techs: user.techs,

    })
}