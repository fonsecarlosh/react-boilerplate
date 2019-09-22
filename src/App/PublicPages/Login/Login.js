import React, { useState  } from 'react';
import PropTypes from 'prop-types';

import './Login.scss';
import LoginBox from '../../../Components/LoginBox';

function Login({ loadAuth }) {
  const [acessKey, setAcessKey] = useState('');
  const submit = async () => {
    await loadAuth({ acessKey });
  };

  const onChangeChave = (e) => {
    const newValue = e.target.value;
    setAcessKey(newValue);
  }

  return (
    <LoginBox onChangeChave={onChangeChave} onSubmit={submit} chave={acessKey}/>
  );
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loadAuth: PropTypes.func.isRequired,
};

export default Login;