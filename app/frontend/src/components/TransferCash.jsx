export default function TransferCash() {
  const username = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h1 className="flex justify-center py-10 text-5xl font-semibold">
        Bem vindo, {username.name}!
      </h1>
      <div className="flex flex-col gap-6 justify-center items-center">
        <span className="text-2xl">Seu saldo: </span>
        <span className="text-2xl">R$ {username.balance}</span>
        <h3 className="text-2xl">Fazer uma transferência</h3>
        <div className="flex justify-center">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="cpf">CPF do destinatário:</label>
              <input
                type="cpf"
                name="cpf"
                id="cpf"
                placeholder="000.000.000-00"
                className="border-2 border-gray-300 rounded-md p-2"
              />
              <label htmlFor="valor">Valor:</label>
              <input
                type="valor"
                name="valor"
                id="valor"
                placeholder="R$ 0,00"
                className="border-2 border-gray-300 rounded-md p-2"
              />
              <label htmlFor="descricao">Descrição:</label>
              <input
                type="descricao"
                name="descricao"
                id="descricao"
                placeholder="Descrição da transferência"
                className="border-2 border-gray-300 rounded-md p-2"
              />
              <label htmlFor="senha">Senha:</label>
              <input
                type="senha"
                name="senha"
                id="senha"
                placeholder="Senha"
                className="border-2 border-gray-300 rounded-md p-2"
              />
              <button
                type="button"
                className="bg-blue-500 text-white rounded-md p-2"
              >
                Transferir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
