const { Router } = require('express');
const userController = require('../controllers/user.controller');

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Endpoints de usuários
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - cpf
 *          - accountId
 *        properties:
 *          name:
 *            type: string
 *          cpf:
 *            type: string
 *          accountId:
 *            type: integer
 *        example:
 *          - name: Vinicius de Paula Martins
 *            cpf: 123.456.789-10
 *            accountId: 1
 *          - name: Roberta Dutra
 *            cpf: 987.654.321-09
 *            accountId: 2
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      LoginUser:
 *        type: object
 *        required:
 *          - cpf
 *          - password
 *        properties:
 *          name:
 *            type: string
 *          cpf:
 *            type: string
 *          password:
 *            type: string
 *          accountId:
 *            type: integer
 *          balance:
 *            type: integer
 *        example:
 *            cpf: 123.456.789-10
 *            password: vinicius
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserCreate:
 *        type: object
 *        required:
 *          - cpf
 *          - name
 *          - password
 *        properties:
 *          cpf:
 *            type: string
 *          name:
 *            type: string
 *          password:
 *            type: string
 *          accountId:
 *            type: integer
 *          balance:
 *            type: integer
 *        example:
 *            name: Vinicius de Paula
 *            cpf: 231.427.252-00  
 *            password: vinicius
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      LoginInfo:
 *        type: object
 *        required:
 *          - name
 *          - cpf
 *          - accountId
 *        properties:
 *          name:
 *            type: string
 *          cpf:
 *            type: string
 *          accountId:
 *            type: integer
 *        example:
 *            name: Vinicius de Paula Martins
 *            cpf: 123.456.789-10
 *            accountId: 1
 *            balance: 1000
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      IdInfoUser:
 *        type: object
 *        required:
 *          - name
 *          - cpf
 *          - accountId
 *        properties:
 *          name:
 *            type: string
 *          cpf:
 *            type: string
 *          accountId:
 *            type: integer
 *          userInfo:
 *            type: object
 *            properties:
 *              balance:
 *                type: integer 
 *        example:
 *            name: Vinicius de Paula
 *            cpf: 123.456.789-10
 *            accountId: 1
 *            userInfo:
 *              balance: 1000
 */

/**
 * @swagger
 * /users:
 *    get:
 *      tags: [Users]
 *      description: Endpoint retorna um lista de todos os usuários
 *      responses:
 *        200:
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                 $ref: '#/components/schemas/User'
 */

router.get('/', userController.getAll);

/**
 * @swagger
 * /users:
 *  post:
 *    tags: [Users]
 *    description: Endpoint para fazer login
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/LoginUser'
 *    responses:
 *      200:
 *        description: Login realizado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/LoginInfo'
 *        
 */

router.post('/', userController.login);


/**
 * @swagger
 * /users/create:
 *  post:
 *    tags: [Users]
 *    description: Endpoint para cadastrar os usuários
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/UserCreate'
 *    responses:
 *      201:
 *        description: Cadastro realizado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/UserCreate'
 *        
 */

router.post('/create', userController.create);

/**
 * @swagger
 *  /users/{id}:
 *    get:
 *      tags: [Users]
 *      description: Endpoint que retorna um usuário por id
 *      parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/IdInfoUser'
 */
router.get('/:id', userController.getById);

module.exports = router;