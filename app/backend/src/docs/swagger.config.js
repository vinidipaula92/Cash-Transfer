const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Express API com Swagger',
      description: 'API express documentada pelo swagger',
      version: '1.0',
    },
    servers: [{
      url: 'http://localhost:3001',
      description: 'Servidor local'
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.route.js']
};

module.exports = swaggerConfig;