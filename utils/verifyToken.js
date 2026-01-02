const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // صح

    if (!authHeader) {
        
        return res.json({error :"token is required"})
    }

    const token = authHeader.split(' ')[1]; 

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decodedToken; // تخزين بيانات المستخدم للي بعده
        
        next();
    } catch (err) {
       
        return res.json({error :err})
    }
    
};

module.exports = verifyToken;