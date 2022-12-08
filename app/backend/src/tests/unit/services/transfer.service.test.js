const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const { createUser, loginUser, userExists, accId, userWithoutCPF, userPhantasm, userWithoutPassword } = require('../mocks/user.mock');
const { createTransfer, transferReturn, allTransfer, transferWithoutVALUE } = require('../mocks/transfer.mock');


chai.use(chaiAsPromised);

const { expect } = chai;

const { user, account, transaction } = require('../../../database/models');
const TransferService = require('../../../services/transfer.service');

describe('Transfer Service', () => { 
  afterEach(() => { 
    sinon.restore();
  });

  describe('create', () => { 
    it('While balance < value, should return an error "Insufficient funds" and code error 400 ', async () => {
      sinon.stub(account, 'findOne').returns(userPhantasm);
      sinon.stub(user, 'findOne').returns(userExists);

      expect(TransferService.create(createTransfer)).to.be.rejected;      
    });

    it('create a new transfer', async () => { 
      sinon.stub(account, 'findOne').returns(userExists);
      sinon.stub(user, 'findOne').returns(userExists);
      sinon.stub(transaction, 'create').resolves(transferReturn);

      expect(TransferService.create(createTransfer)).to.be.fulfilled;
      expect(TransferService.create(createTransfer)).to.have.eventually.property('value', createTransfer.value);
      expect(TransferService.create(createTransfer)).to.have.eventually.property('description', createTransfer.description);
      expect(TransferService.create(createTransfer)).to.have.eventually.property('debitedAccountCPF', createTransfer.debitedAccountCPF);
      expect(TransferService.create(createTransfer)).to.have.eventually.property('creditedAccountCPF', createTransfer.creditedAccountCPF);
    });
  });

  describe('getAll', () => { 
    it('should return a list of transfers with account info', async () => {
      sinon.stub(transaction, 'findAll').returns([allTransfer]);

      expect(TransferService.getAll()).to.be.fulfilled;
    });
  });

  describe('getById', () => { 
    it('should return a transfer', async () => {
      sinon.stub(transaction, 'findByPk').returns(transferReturn); 

      expect(TransferService.getById(1)).to.be.fulfilled;
    });
  });

  describe('userExists', () => { 
    it('should return a user', async () => {
      sinon.stub(user, 'findOne').returns(userExists);

      expect(TransferService.userExists(userExists)).to.be.fulfilled;
    });

    it('should return an error "User not found" ', async () => {
      sinon.stub(user, 'findOne').returns(null);

      expect(TransferService.userExists(userExists)).to.be.rejected;
     });
  });

  describe('passwordMatches', () => {
    it('should return a user', async () => {
      sinon.stub(user, 'findOne').returns(userExists);

      expect(TransferService.passwordMatches(userExists)).to.be.fulfilled;
    });

    it('should return an error "Credentials not found" ', async () => { 
      sinon.stub(user, 'findOne').returns(null);

      expect(TransferService.passwordMatches(userExists)).to.be.rejected;
    });
  });
});