import MyContext from './MyContext';
import React, { useState } from 'react';
import { requestAPI } from '../services/API';
import { useNavigate } from 'react-router-dom';
const { StatusCodes } = require('http-status-codes');

export default function MyProvider(props) {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    cpf: '',
    password: '',
  });

  const [newUser, setNewUser] = useState({
    cpf: '',
    name: '',
    password: '',
  });

  const [credentialError, setCredentialError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [userError, setUserError] = useState(false);

  const handleLogin = async () => {
    try {
      const data = await requestAPI('/users', credential);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/login');
    } catch (error) {
      if (error.response.status === StatusCodes.UNAUTHORIZED) {
        setCredentialError(true);
        setMessageError('Senha incorreta');
      } else if (error.response.status === StatusCodes.NOT_FOUND) {
        setCredentialError(true);
        setMessageError('Usuário não encontrado');
      }
    }
  };

  const handleRegister = async () => {
    try {
      const data = await requestAPI('/users/create', newUser);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/login');
    } catch (error) {
      if (error.response.status === StatusCodes.CONFLICT) {
        setUserError(true);
        setMessageError('CPF já cadastrado');
      }
    }
  };
  const { children } = props;
  const { Provider } = MyContext;

  const data = {
    credential,
    setCredential,
    handleLogin,
    credentialError,
    setCredentialError,
    messageError,
    setMessageError,
    newUser,
    setNewUser,
    handleRegister,
    userError,
  };

  return <Provider value={data}>{children}</Provider>;
}
