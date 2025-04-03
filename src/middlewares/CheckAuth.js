const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const checkAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized',
        });
    }
}

module.exports = checkAuth;