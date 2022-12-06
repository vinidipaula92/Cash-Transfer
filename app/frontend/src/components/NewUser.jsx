import { useNavigate } from 'react-router-dom';

export default function NewUser() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="flex justify-center py-10 text-5xl font-semibold">
        Novo usuário
      </h1>
      <div className="flex justify-center">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="cpf"
              name="cpf"
              id="cpf"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <label htmlFor="name">Nome completo:</label>
            <input
              type="name"
              name="name"
              id="name"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <label htmlFor="passowrd">Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <label htmlFor="confirmPassword">Confirme sua senha:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="border-2 border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="button"
            className="bg-indigo-500 text-white rounded-md p-2"
            onClick={() => navigate('/login')}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
