import jwt from 'jsonwebtoken';

const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ mensaje: 'No autorizado' });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensaje: 'No autorizado' });
        }

        req.user = decoded;
        next();
    });
};

export default authRequired;