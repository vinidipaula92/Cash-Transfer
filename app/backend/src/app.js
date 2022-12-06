require('dotenv').config();
const express = require('express');
require('express-async-errors');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const userRoute = require('./routes/user.route');

const app = express();

app.use(express.json());

app.use('/users', userRoute);
app.use(errorHandlerMiddleware);

app.listen(process.env.API_PORT, () => console.log('API rodando na porta 3001'));