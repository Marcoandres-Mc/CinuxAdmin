import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../config/config.js';

export default function createAssessToken(payLoad) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payLoad, 
            SECRET_KEY, 
            { expiresIn: '1d' }, 
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('No se pudo generar el token');
                }
                resolve(token);
        });
    });
}