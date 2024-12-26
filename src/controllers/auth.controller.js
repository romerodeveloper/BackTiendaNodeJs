import jwt from 'jsonwebtoken';
const config = { secret: 'first_secret_letter' };

export const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 

    if (!token) {
        return res.status(403).json({ message : "Se debe ingresar token"}); 
    }

    jwt.verify(token, config.secret, (err, user) => {
        if (err) {
            return res.status(403).json({ message : "Token incorrecto o caducado"}); 
        }
        req.user = user;
        next();
    });
};