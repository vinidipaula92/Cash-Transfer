import myContext from '../context/MyContext';
import { useContext } from 'react';
import InputMask from 'react-input-mask';

export default function Login() {
  const {
    credential,
    setCredential,
    handleLogin,
    credentialError,
    messageError,
  } = useContext(myContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCredential({ ...credential, [name]: value });
  };
  return (
    <div>
      <h1 className="flex justify-center py-10 text-5xl font-semibold">
        Sou usuário
      </h1>
      <div className="flex justify-center">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="cpf">CPF:</label>
            <InputMask
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              name="cpf"
              id="cpf"
              value={credential.cpf}
              onChange={handleChange}
              mask="999.999.999-99"
            />
            <label htmlFor="password">Senha:</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="password"
              name="password"
              id="password"
              value={credential.password}
              onChange={handleChange}
            />
          </div>
          {credentialError && <p className="text-red-500">{messageError}</p>}
          <button
            type="button"
            className="bg-indigo-500 text-white rounded-md p-2"
            onClick={handleLogin}
          >
            Entrar
          </button>
          <button
            type="button"
            className="bg-indigo-500 text-white rounded-md p-2"
          >
            Esqueci minha senha
          </button>
        </form>
      </div>
    </div>
  );
}
