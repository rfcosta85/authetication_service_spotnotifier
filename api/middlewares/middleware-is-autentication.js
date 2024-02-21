const middlewareAuthentication = (req, res, next) => {
    const t = true
    if (t) {
        next();
    } else { 
        res.status(401).send('Unauthorized');
    }
};

export default middlewareAuthentication;