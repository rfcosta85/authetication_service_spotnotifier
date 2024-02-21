import express from 'express'
import login from '../controllers/login.js';
import logout from '../controllers/logout.js';
import isAuthentication from '../controllers/is-authentication.js';
import isAuthorization from '../controllers/is-authorization.js';
import middlewareAuthentication from '../middlewares/middleware-is-autentication.js';

const authRouters = express.Router();

authRouters.get('/', (req, res) => {
    res.send('spotnotifier');
});

authRouters.get('/login', login);

authRouters.get('/logout', middlewareAuthentication, logout);

authRouters.get('/is-authentication', isAuthentication);

authRouters.get('/is-authorization', middlewareAuthentication ,isAuthorization);

export default authRouters;

