require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('express-async-errors');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const userRoute = require('./routes/user.route');
const transferRoute = require('./routes/transfer.route');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoute);
app.use('/transfers', transferRoute);
app.use(errorHandlerMiddleware);

app.listen(process.env.API_PORT, () => console.log('API rodando na porta 3001'));