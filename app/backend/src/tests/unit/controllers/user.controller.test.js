const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const { createUser, loginUser, userExists, accId, userPhantasm, userWithoutPassword } = require('../mocks/user.mock');


chai.use(chaiAsPromised);

const { expect } = chai;

const { user } = require('../../../database/models');
const UserController = require('../../../controllers/user.controller');
const UserService = require('../../../services/user.service');

describe('User Controller', () => { 
  afterEach(() => { 
    sinon.restore();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(UserService, 'create').resolves(userExists);

      await UserController.create(req, res);

      expect(res.status.calledWith(201)).to.have.equal(true);
    });
   });

  describe('getAll', () => {
    it('should return a list of users', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(UserService, 'getAll').resolves([userExists]);

      await UserController.getAll(req, res);

      expect(res.status.calledWith(200)).to.have.equal(true);
    });
  });

  describe('getById', () => {
    it('should return a user', async () => {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(UserService, 'getById').resolves(accId);

      await UserController.getById(req, res);

      expect(res.status.calledWith(200)).to.have.equal(true);
    });
  });

  describe('login', () => {
    it('should return a user', async () => {
      const res = {};
      const req = { body: loginUser };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(UserService, 'login').resolves(userExists);

      await UserController.login(req, res);

      expect(res.status.calledWith(200)).to.have.equal(true);
    });
  });
});