const prisma = require("../../prisma/client");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { sessionSecrets } = require("../controllers/AuthController");

// JWT authentication middleware
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ 
        success: false,
        message: "No token provided" 
    });

    try {
        const decodedPayload = jwt.decode(token);
        const userId = decodedPayload?.id_users;

        const secret = sessionSecrets[userId];
        if (!secret)
            return res
                .status(403)
                .json({ 
                    success: false,
                    message: "Session not found. Please login again." 
                });

require("dotenv").config();
        const verified = jwt.verify(token, secret);
        req.admin = verified;
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res
                .status(401)
                .json({ 
                    success: false,
                    message: "Session expired. Please login again." 
                });
        }

        return res.status(403).json({ 
            success: false,
            message: "Invalid token" 
        });
    }
};