const knex = require('../../knex/knex');

const registerMethod = async (req, res) => {
  await knex('users').insert({
    email: req.body.email,
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password,
  });
  return res.redirect('/login');
};
const loginMethod = async (req, res) => {
  const hasUser = await knex('users').where({
    email: req.body.email,
    password: req.body.password,
  }).first();
  if (typeof hasUser === 'undefined') {
    return res.redirect('/login');
  }
  req.session.user = hasUser;
  return res.redirect('/');
};

const renderHomepage = (req, res) => {
  res.locals = {
    title: 'Administrator Board',
  };
  return res.render('pages/dashboard');
};

const logOut = (req, res) => {
  req.session.destroy();
  res.redirect('/login')
}

const userIsAuth = (req, res, next) => {
  if (typeof req.session.user !== 'undefined') {
    return res.redirect('/');
  }
  return next();
};

const userIsNotAuth = (req, res, next) => {
  if (typeof req.session.user !== 'undefined') {
    return next();
  }
  return res.redirect('/login');
}
module.exports = {
  registerMethod,
  loginMethod,
  userIsAuth,
  userIsNotAuth,
  renderHomepage,
  logOut
};
