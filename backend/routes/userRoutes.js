const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUsers, deleteUser, getUserById } = require("../controllers/userController");

const router = express.Router();


// User Management Routes
router.get("/", protect, adminOnly, getUsers); // Get all users (Admin Only)
router.get("/:id", protect, getUserById); // Get a specific user

module.exports = router;

