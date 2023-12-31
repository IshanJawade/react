const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const jwtSecret = "GoFoodCompisNotRegisteredYet";

router.post("/signup", [
    body('email', "Invalid email").isEmail(),
    body('password', "Password length should be at least 5").isLength({ min: 5 }),
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        // password encryption happening here
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
                location: req.body.location
            })
            res.json({ success: true })

        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    }
)

router.post("/login", [
    body('email', "Invalid email").isEmail(),
    body('password', "Password length should be at least 5").isLength({ min: 5 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "User not found" })
            }

            // compares password and returns true or false 
            const match = await bcrypt.compare(req.body.password, userData.password);
            if (!match) {
                return res.status(400).json({ errors: "Password is incorrect" })
                
            } 
            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            return res.json({ success: true, authToken: authToken })

        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    }
)



module.exports = router;