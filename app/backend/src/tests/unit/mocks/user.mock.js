const createUser = {
  name: 'John Doe',
  cpf: '321.654.987-01',
  password: 'password',
}

const loginUser = {
  cpf: '123.456.789-10',
  password: '123456',
}

const userExists = {
  name: 'Vinicius de Paula',
  cpf: '123.456.789-10',
  password: '123456',
}

const userPhantasm = {
  cpf: 10101010101,
  password: '102030',
}

const userWithoutPassword = {
  name: 'John Doe',
  cpf: '321.654.987-01',
}

const accId = 1;

const balanceUser = 1000;

module.exports = {
  createUser,
  loginUser,
  userExists,
  accId,
  userPhantasm,
  userWithoutPassword,
  balanceUser,
}