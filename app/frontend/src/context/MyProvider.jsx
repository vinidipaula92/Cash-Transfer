import MyContext from './MyContext';
import React, { useState } from 'react';
import { requestAPI, requestAll } from '../services/API';
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

  const [transfer, setTransfer] = useState({
    value: 0,
    debitedAccountCPF: '',
    creditedAccountCPF: '',
    description: '',
    password: '',
  });

  const [user, setUser] = useState({
    cpf: '',
    name: '',
    userInfo: {
      balance: 0,
    },
  });

  const [credentialError, setCredentialError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [userError, setUserError] = useState(false);
  const [transferMessage, setTransferMessage] = useState(false);
  const [message, setMessage] = useState('');

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

  const handleTransfer = async () => {
    try {
      if (transfer.value > 2000) {
        setTransferMessage(true);
        setMessage('Valor máximo é de R$ 2000,00');
      } else {
        const data = await requestAPI('/transfers', transfer);
        localStorage.setItem('transfer', JSON.stringify(data));
        setTransferMessage(true);
        setMessage('Transferência realizada com sucesso');
      }
    } catch (error) {
      if (error.response.status === StatusCodes.UNAUTHORIZED) {
        setTransferMessage(true);
        setMessage('Senha incorreta');
      } else if (error.response.status === StatusCodes.NOT_FOUND) {
        setTransferMessage(true);
        setMessage('Usuário não encontrado');
      } else if (error.response.status === StatusCodes.BAD_REQUEST) {
        setTransferMessage(true);
        setMessage('Saldo insuficiente');
      }
    }
  };

  const handleInfoUser = async () => {
    const userId = JSON.parse(localStorage.getItem('user')).accountId;
    const data = await requestAll(`/users/${userId}`);
    setUser(data);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
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
    handleTransfer,
    transfer,
    setTransfer,
    transferMessage,
    message,
    setTransferMessage,
    user,
    handleInfoUser,
    handleLogout,
  };

  return <Provider value={data}>{children}</Provider>;
}
