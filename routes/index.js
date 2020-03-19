var express = require('express');
var router = express.Router();

  router.get( '/login', (req, res) => {
    res.render('pages/login', {layout: false});
  });
  router.get( '/register', (req, res) => {
    res.render('pages/register', {layout: false});
  });
  router.get( '/', (req, res) => {
    res.render('pages/dashboard');
  });
  router.get( '/user', (req, res) => {
    res.render('pages/user');
  });
  router.get( '/icons', (req, res) => {
    res.render('pages/icons');
  });
  router.get( '/user', (req, res) => {
    res.render('pages/user');
  });
  router.get( '/table', (req, res) => {
    res.render('pages/tables');
  });
  router.get( '/map', (req, res) => {
    res.render('pages/maps');
  });
  router.get( '/notifications', (req, res) => {
    res.render('pages/notifications');
  });
  router.get( '/typography', (req, res) => {
    res.render('pages/typography');
  });
  router.get( '/upgrade', (req, res) => {
    res.render('pages/upgrade');
  });
  router.get( '/rtl', (req, res) => {
    res.render('pages/rtl');
  });
// post
module.exports = router;
