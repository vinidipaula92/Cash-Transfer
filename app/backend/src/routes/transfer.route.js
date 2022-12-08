const { Router } = require('express');
const transferController = require('../controllers/transfer.controller');

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Transfers
 *  description: Endpoints de transferências
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Transfer:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *          debitedAccountId:
 *            type: integer
 *          creditedAccountId:
 *            type: integer
 *          value:
 *            type: integer
 *          description:
 *            type: string
 *          createdAt:
 *            type: string
 *          debitedAccount:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *              balance:
 *                type: integer
 *          creditedAccount:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *              balance:
 *                type: integer
 *        example:
 *          id: 1
 *          debitedAccountId: 1
 *          creditedAccountId: 2
 *          value: 100
 *          description: Transferência de teste
 *          createdAt: "2021-09-01T00:00:00.000Z"
 *          debitedAccount:
 *            id: 1
 *            balance: 900
 *          creditedAccount:
 *            id: 2
 *            balance: 1100
 * 
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      TransferCreate:
 *        type: object
 *        required:
 *          - value
 *          - debitedAccountCPF
 *          - creditedAccountCPF
 *          - description
 *          - password
 *        properties:
 *          value:
 *            type: integer
 *          debitedAccountCPF:
 *            type: string
 *          creditedAccountCPF:
 *            type: string
 *          description:
 *            type: string
 *          password:
 *            type: string
 *        example:
 *            value: 100
 *            debitedAccountCPF: 123.456.789-10
 *            creditedAccountCPF: 987.654.321-09  
 *            description: Transferência de teste
 *            password: vinicius
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      TransferInfo:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *          value:
 *            type: integer
 *          description:
 *            type: string
 *          debitedAccountId:
 *            type: integer
 *          creditedAccountId:
 *            type: integer
 *          createdAt:
 *            type: string
 *        example:
 *            id: 1
 *            value: 100
 *            description: Transferência de teste
 *            debitedAccountId: 1
 *            creditedAccountId: 2
 *            createdAt: "2021-09-01T00:00:00.000Z"
 */

/**
 * @swagger
 * /transfers:
 *  post:
 *    tags: [Transfers]
 *    description: Endpoint para fazer uma transferência
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/TransferCreate'
 *    responses:
 *      201:
 *        description: Transferência realizado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/TransferInfo'
 *        
 */

router.post('/', transferController.create);

/**
 * @swagger
 * /transfers:
 *    get:
 *      tags: [Transfers]
 *      description: Endpoint retorna um lista de todas as transferências
 *      responses:
 *        200:
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                 $ref: '#/components/schemas/Transfer'
 */
router.get('/', transferController.getAll);


/**
 * @swagger
 *  /transfers/{id}:
 *    get:
 *      tags: [Transfers]
 *      description: Endpoint que retorna uma transferência pelo id
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
 *                $ref: '#/components/schemas/Transfer'
 */
router.get('/:id', transferController.getById);

module.exports = router;