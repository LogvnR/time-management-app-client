import React from 'react';

import classes from '../Styles/Login.module.css';

const Login = (props) => {
  return (
    <div className={classes.background}>
      <section className={classes['title-container']}>
        <h1>tempus</h1>
        <div className={classes['welcome-container']}>
          <h2>Welcome Back</h2>
          <h3>Login to continue</h3>
        </div>
      </section>

      <section className={classes.container}>
        <div className={classes['input-container']}>
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
          <button onClick={props.loginUser}>login</button>
        </div>

        <div className={classes.options}>
          <p onClick={props.entryViewHandler}>Create New Account</p>
          <p>Forgot Password?</p>
        </div>
      </section>
    </div>
  );
};

export default Login;
