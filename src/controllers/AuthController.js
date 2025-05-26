const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const prisma = require("../../prisma/client");
require("dotenv").config();

const sessionSecrets = {};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Cari admin berdasarkan email
        const admin = await prisma.admin.findUnique({
            where: { email },
        });

        if (!admin) {
            return res.status(404).json({ message: "User not found" });
        }

        // Cek password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const secretKey = process.env.JWT_SECRET;
        sessionSecrets[admin.id] = secretKey;

        // Generate token
        const token = jwt.sign(
            {
                id: admin.id,
                email: admin.email,
                role: admin.role,
            },
            secretKey,
            { expiresIn: "30m" }
        );

        return res.json({
            message: "Login successful",
            token,
            status: "success",
        });
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.logout = (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    let decoded;

    try {
        decoded = jwt.decode(token);
    } catch (error) {
        return res.status(400).json({ message: "Invalid token" });
    }

    const userId = decoded?.id;

    if (!userId || !sessionSecrets[userId]) {
        return res.status(400).json({ message: "Session not found" });
    }

    delete sessionSecrets[userId];
    return res.json({ message: "Logout successful" });
};

exports.sessionSecrets = sessionSecrets;
