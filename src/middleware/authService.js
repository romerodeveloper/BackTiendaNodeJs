import jwt from 'jsonwebtoken';
const config = { secret: 'first_secret_letter' };

export const createToken = (user) => {
    const payload = {
        id: user.id,
        name: user.username,
    };
    return jwt.sign(payload, config.secret, { expiresIn: '8h' }); 
};

export const verifyToken = (token) => {
    return jwt.verify(token, config.secret);
};