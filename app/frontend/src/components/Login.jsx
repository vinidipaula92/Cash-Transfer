import myContext from '../context/MyContext';
import { useContext, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {
    credential,
    setCredential,
    handleLogin,
    credentialError,
    messageError,
  } = useContext(myContext);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCredential({ ...credential, [name]: value });
  };

  useEffect(() => {
    setCredential({ cpf: '', password: '' });
  }, []);
  return (
    <div className="m-6 bg-indigo-100">
      <div className="box-border w-80 p-6 border-4">
        <form className="flex flex-col gap-5">
          <h1 className="flex justify-center text-5xl font-semibold">
            Sou usuário
          </h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="cpf">CPF:</label>
            <InputMask
              className="border-2 border-indigo-100 rounded-md p-2"
              type="text"
              name="cpf"
              id="cpf"
              value={credential.cpf}
              onChange={handleChange}
              mask="999.999.999-99"
            />
            <label htmlFor="password">Senha:</label>
            <input
              className="border-2 border-indigo-100 rounded-md p-2"
              type="password"
              name="password"
              id="password"
              value={credential.password}
              onChange={handleChange}
            />
          </div>
          {credentialError && <p className="text-red-500">{messageError}</p>}
          <div className="flex flex-col gap-2 py-3">
            <button
              type="button"
              className="bg-indigo-500 text-white rounded-md p-2"
              onClick={handleLogin}
            >
              Entrar
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="bg-indigo-500 text-white rounded-md p-2"
              onClick={() => navigate('/construction')}
            >
              Esqueci minha senha
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
