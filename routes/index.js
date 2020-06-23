const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
var Const = require('../sharedConstants').constant;

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome', {
  wsAddress: Const.SOCKET_ADDR + ':' + Const.SOCKET_PORT
}));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
