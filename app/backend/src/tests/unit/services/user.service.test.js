const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const { createUser, loginUser, userExists, accId, userPhantasm, userWithoutPassword } = require('../mocks/user.mock');

chai.use(chaiAsPromised);

const { expect } = chai;

const { user } = require('../../../database/models');
const UserService = require('../../../services/user.service');

describe('User Service', () => { 
  afterEach(() => { 
    sinon.restore();
  });

  describe('create', () => { 
    it('should create a user', async () => {
      sinon.stub(user, 'create').resolves(userExists);

      expect(UserService.create(userExists)).to.be.fulfilled;
      expect(UserService.create(userExists)).to.eventually.have.property('name', userExists.name);
      expect(UserService.create(userExists)).to.eventually.have.property('cpf', userExists.cpf);
      expect(UserService.create(userExists)).to.eventually.have.property('password', userExists.password);
    });

    it('should catch error rollback transaction,', async () => {
      sinon.stub(user, 'create').throws();

      expect(UserService.create(userExists)).to.be.rejected;
     });
  });

  describe('getAll', () => { 
    it('should return a list of users', async () => {
      sinon.stub(user, 'findAll').returns([userExists]);

      expect(UserService.getAll()).to.be.fulfilled;
    });
  });

  describe('getById', () => {
    it('should return a user', async () => {
      sinon.stub(user, 'findByPk').returns(userExists); 

      expect(UserService.getById(1)).to.be.fulfilled;
    });
   });

  describe('login', () => {
    it('should return a user', async () => {
      sinon.stub(user, 'findOne').returns(userExists);

      expect(UserService.login(loginUser)).to.be.fulfilled;
      expect(UserService.login(loginUser)).to.eventually.have.property('name', userExists.name);
      expect(UserService.login(loginUser)).to.eventually.have.property('cpf', userExists.cpf);
      expect(UserService.login(loginUser)).to.eventually.have.property('password', userExists.password);
    });
   });

  describe('validateBody', () => {
    it('should return a user', async () => {
      const user = await UserService.validateBody(createUser);

      expect(user).to.be.an('object');
      expect(user).to.have.property('name', createUser.name);
      expect(user).to.have.property('cpf', createUser.cpf);
      expect(user).to.have.property('password', createUser.password);
    });
   });
});