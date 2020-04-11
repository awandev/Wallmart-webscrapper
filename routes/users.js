const express = require('express')
const router = express.Router()
const passport = require('passport')
const crypto = require('crypto')
const async = require('async')
const nodemailer = require('nodemailer')

// requiring user model
const User = require('../models/usermodel')

// checks if user is authenticated
function isAuthenticatedUser(req, res, next) {
    if(req.isAuthenticatedUser()) {
        return next();
    }
    req.flash('error_msg', 'Please Login First to access this page')
    res.redirect('/login')
}

// get routes
router.get('/login', (req, res) => {
    res.render('./users/login')
})

module.exports = router;