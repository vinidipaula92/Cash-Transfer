require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('express-async-errors');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const userRoute = require('./routes/user.route');
const transferRoute = require('./routes/transfer.route');
const accountRoute = require('./routes/account.route');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('./docs/swagger.config');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(cors());
app.use(express.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/users', userRoute);
app.use('/transfers', transferRoute);
app.use('/accounts', accountRoute);
app.use(errorHandlerMiddleware);

app.listen(process.env.API_PORT, () => console.log('API rodando na porta 3001'));