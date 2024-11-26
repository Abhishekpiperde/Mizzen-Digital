const express = require('express');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


const JWT_SECRET = 'random_secret'
//create user

router.post('/register', async (req, res)=>{
    try{
        const {name,email,password} = req.body;
        //check for existing user 
        const existingUser = await User.findOne({where:{email}});
        if(existingUser){
            return res.status(400).json({message: "Email already in use"})
        }

        const user = await User.create({name,email,password});
        res.status(201).json({message: "User registered", data: user})
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})

//get all user

// router.post("/register", async (req, res) => {
//   try {
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
//single user

//update user

// delete a user

module.exports = router;