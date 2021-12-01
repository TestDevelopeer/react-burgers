import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
  return (
    <div className={'login-container'}>
        <nav className={'login'}>
            <h2>Авторизация</h2>
            <p>Войти с помощью GitHub</p>
            <button onClick={() => props.authenticate()} className={'github'}>Войти</button>
        </nav>
    </div>
  );
};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;