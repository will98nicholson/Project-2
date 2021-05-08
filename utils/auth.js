const withAuth = (req, res, next) => {
    // Redirect to login route
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
