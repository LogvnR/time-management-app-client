import React from 'react';

import classes from '../Styles/Login.module.css';

const Login = (props) => {
  return (
    <div className={classes.contianer}>
      <p>LOGIN</p>
      <input
        type="email"
        placeholder="Email"
        onChange={(event) => {
          props.setLoginEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => {
          props.setLoginPassword(event.target.value);
        }}
      />
      <button onClick={props.loginUser}>LOGIN</button>
      <p onClick={props.entryViewHandler}>Create New Account</p>
    </div>
  );
};

export default Login;
