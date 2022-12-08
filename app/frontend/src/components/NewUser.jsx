import myContext from '../context/MyContext';
import { useContext, useEffect } from 'react';
import InputMask from 'react-input-mask';

export default function NewUser() {
  const { newUser, setNewUser, handleRegister, userError, messageError } =
    useContext(myContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewUser({ ...newUser, [name]: value });
  };

  useEffect(() => {
    setNewUser({
      name: '',
      cpf: '',
      password: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="m-6">
      <div className="box-border w-80 p-6 border-4">
        <form className="flex flex-col gap-5">
          <h1 className="flex justify-center text-5xl font-semibold">
            Novo usuário
          </h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="cpf">CPF:</label>
            <InputMask
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              name="cpf"
              id="cpf"
              value={newUser.cpf}
              onChange={handleChange}
              mask="999.999.999-99"
            />
            <label htmlFor="name">Nome completo:</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              name="name"
              id="name"
              value={newUser.name}
              onChange={handleChange}
            />
            <label htmlFor="passowrd">Senha:</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="password"
              name="password"
              id="password"
              value={newUser.password}
              onChange={handleChange}
            />
            {userError && <p className="text-red-500">{messageError}</p>}
            {/* <label htmlFor="confirmPassword">Confirme sua senha:</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="password"
              name="password"
              id="password"
              value={
                newUser.confirmPassword
                  ? newUser.confirmPassword
                  : newUser.password
              }
              onChange={handleChange}
            /> */}
          </div>
          <button
            type="button"
            className="bg-indigo-500 text-white rounded-md p-2"
            onClick={handleRegister}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
