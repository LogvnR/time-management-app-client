import { useState } from 'react';

import classes from '../Styles/Entry.module.css';
import Login from './Login';
import SignUp from './SignUp';

const Entry = (props) => {
  const [entry, setEntry] = useState(true);

  const entryViewHandler = () => {
    setEntry(!entry);
  };

  return (
    <div className={classes.entry}>
      {entry && (
        <Login
          setLoginEmail={props.setLoginEmail}
          setLoginPassword={props.setLoginPassword}
          loginUser={props.loginUser}
          entryViewHandler={entryViewHandler}
        />
      )}
      {!entry && (
        <SignUp
          setFirstName={props.setFirstName}
          setLastName={props.setLastName}
          setCongregation={props.setCongregation}
          setSignUpEmail={props.setSignUpEmail}
          setSignUpPassword={props.setSignUpPassword}
          signUpUser={props.signUpUser}
          entryViewHandler={entryViewHandler}
        />
      )}
    </div>
  );
};

export default Entry;
