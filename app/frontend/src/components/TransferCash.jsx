import InputMask from 'react-input-mask';
import myContext from '../context/MyContext';
import { useContext, useEffect } from 'react';

export default function TransferCash() {
  const {
    handleTransfer,
    transfer,
    setTransfer,
    transferMessage,
    setTransferMessage,
    message,
    handleInfoUser,
    user,
  } = useContext(myContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransfer({ ...transfer, [name]: value });
  };

  const clearInputs = () => {
    setTransfer({
      creditedAccountCPF: '',
      debitedAccountCPF: user.cpf,
      value: 0,
      description: '',
      password: '',
    });
    setTransferMessage(false);
  };

  useEffect(() => {
    handleInfoUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (transfer.debitedAccountCPF === '') {
      setTransfer({ ...transfer, debitedAccountCPF: user.cpf });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transfer]);

  return (
    <div>
      <h1 className="flex justify-center py-10 text-5xl font-semibold">
        Bem vindo, {user.name}
      </h1>
      <div className="flex flex-col gap-6 justify-center items-center">
        <span className="text-2xl">Seu saldo: </span>
        <span className="text-2xl">R$ {user.userInfo.balance}</span>
        <h3 className="text-2xl">Fazer uma transferência</h3>
        <div className="flex justify-center">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="cpf">CPF do destinatário:</label>
              <InputMask
                mask="999.999.999-99"
                className="border-2 border-gray-300 rounded-md p-2"
                type="text"
                name="creditedAccountCPF"
                id="cpf"
                value={transfer.creditedAccountCPF}
                onChange={handleChange}
              />
              <label htmlFor="value">Valor:</label>
              <input
                placeholder="0,00"
                className="border-2 border-gray-300 rounded-md p-2"
                type="number"
                name="value"
                id="value"
                value={+transfer.value}
                onChange={handleChange}
              />
              <label htmlFor="description">Descrição:</label>
              <input
                placeholder="Descrição da transferência"
                className="border-2 border-gray-300 rounded-md p-2"
                type="text"
                name="description"
                id="description"
                value={transfer.description}
                onChange={handleChange}
              />
              <label htmlFor="password">Senha:</label>
              <input
                placeholder="Senha"
                className="border-2 border-gray-300 rounded-md p-2"
                type="password"
                name="password"
                id="password"
                value={transfer.password}
                onChange={handleChange}
              />{' '}
              {transferMessage ? (
                <>
                  <span>{message}</span>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={clearInputs}
                  >
                    Fazer outra transferência
                  </button>
                </>
              ) : (
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleTransfer}
                >
                  Transferir
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
