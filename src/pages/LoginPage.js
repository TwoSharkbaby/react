import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  const { history } = props;

  return (
    <div>
      <button onClick={() => history.go(-1)}>뒤로가기</button>
      <button onClick={() => history.push('/')}>홈가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
