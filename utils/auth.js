const withAuth = (req, res, next) => {
    // Redirect to login route
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
