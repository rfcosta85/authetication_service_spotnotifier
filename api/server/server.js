import express from 'express'
import authRouters from '../routes/routes.js';

const app = express()
app.use('/auth',authRouters)

export default app;