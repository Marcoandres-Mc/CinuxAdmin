import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

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