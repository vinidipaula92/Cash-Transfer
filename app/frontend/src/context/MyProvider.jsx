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

  const [credentialError, setCredentialError] = useState(false);

  const handleLogin = async () => {
    try {
      const data = await requestAPI('/users', credential);
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/login');
    } catch (error) {
      if (error.response.status === StatusCodes.UNAUTHORIZED) {
        setCredentialError(true);
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
  };

  return <Provider value={data}>{children}</Provider>;
}
