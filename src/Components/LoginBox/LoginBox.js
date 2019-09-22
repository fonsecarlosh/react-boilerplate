import React from 'react';
import PropTypes from 'prop-types';

import './LoginBox.scss';

const LoginBox = ({ chave, onChangeChave, onSubmit }) =>(
  <div className="loginbox-wrapper">
    <div className="loginbox-input-wrapper">
      <div className="loginbox-input-label">Chave</div>
      <input className="loginbox-input" type="text" onChange={onChangeChave} value={chave}/>
      <div className="loginbox-input-button" onClick={onSubmit} >Entrar</div>
    </div>
  </div>
  )

  LoginBox.propTypes = {
    onChangeChave: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };
export default LoginBox;