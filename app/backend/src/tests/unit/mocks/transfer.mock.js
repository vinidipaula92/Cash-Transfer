const createTransfer = {
  value: 400,
  debitedAccountCPF: "123.456.789-10",
  creditedAccountCPF: "987.654.321-09",
  description: "Valores de mercado",
  password: "123456"
}

const transferReturn = {
  id: 1,
  value: 400,
  description: "Valores de mercado",
  debitedAccountId: 1,
  creditedAccountId: 2,
  createdAt: new Date(),
}

const allTransfer = {
    id: 1,
    debitedAccountId: 1,
    creditedAccountId: 2,
    value: 400,
    description: "Valores de mercado",
    createdAt: new Date(),
    debitedAccount: {
      id: 1,
      balance: 600
    },
    creditedAccount: {
      id: 2,
      balance: 11400
    }
}

const transferWithoutVALUE = {
  debitedAccountCPF: '123.456.789-10',
  creditedAccountCPF: '987.654.321-09',
  description: 'Valores de mercado',
  password: '123456'
}

  
module.exports = {
  createTransfer,
  transferReturn,
  allTransfer,
  transferWithoutVALUE,
}