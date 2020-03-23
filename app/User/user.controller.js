const renderLogin = (req, res) => {
    res.render('pages/login', { layout: false });
};
const renderRegister = (req, res) => {
    res.render('pages/register', { layout: false });
};

const renderUser = (req, res) => {
    res.render('pages/user');
};
const renderDashboard = (req, res) => {
    res.locals = {
        title: 'Administrator Board | dashboard'
};
    res.render('pages/dashboard');
};
const renderIcon = (req, res) => {
    res.locals = {
        title: 'Administrator Board | icon',
};
    res.render('pages/icons');
};

const renderMap = (req, res) => {
    res.locals = {
        title: 'Administrator Board | map',
};
    res.render('pages/maps');
};
const renderNotificastion = (req, res) => {
    res.locals = {
        title: 'Administrator Board | notification',
};
    res.render('pages/notifications');
};
const renderTypography = (req, res) => {
    res.locals = {
        title: 'Administrator Board | typography'
};
    res.render('pages/typography');
};
const renderUpgrade = (req, res) => {
    res.locals = {
        title: 'Administrator Board | upgrade',
};
    res.render('pages/upgrade');
};
const renderRtl = (req, res) => {
    res.locals = {
        title: 'Administrator Board | rtl',
};
    res.render('pages/rtl');
};
module.exports = {
    renderLogin,
    renderRegister,
    renderUser,
    renderDashboard,
    renderIcon,
    renderMap,
    renderNotificastion,
    renderTypography,
    renderUpgrade,
    renderRtl
};