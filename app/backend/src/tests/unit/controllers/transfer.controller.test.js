const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const { createUser, loginUser, userExists, accId, userPhantasm, userWithoutPassword } = require('../mocks/user.mock');
const { createTransfer, transferReturn, allTransfer, transferWithoutVALUE } = require('../mocks/transfer.mock');


chai.use(chaiAsPromised);

const { expect } = chai;

const TransferController = require('../../../controllers/transfer.controller');
const TransferService = require('../../../services/transfer.service');

describe('Transfer Controller', () => { 
  afterEach(() => { 
    sinon.restore();
  });

  describe('create', () => {
    it('should create a transfer and return status code 201 ', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(TransferService, 'create').resolves(transferReturn);

      await TransferController.create(req, res);

      expect(res.status.calledWith(201)).to.have.equal(true);
    });
  });

  describe('getAll', () => { 
    it('should return a list of transfers', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(TransferService, 'getAll').resolves([allTransfer]);

      await TransferController.getAll(req, res);

      expect(res.status.calledWith(200)).to.have.equal(true);
    });
  });

  describe('getById', () => { 
    it('should return a transfer', async () => {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(TransferService, 'getById').resolves(allTransfer);

      await TransferController.getById(req, res);

      expect(res.status.calledWith(200)).to.have.equal(true);
    });
  });
});