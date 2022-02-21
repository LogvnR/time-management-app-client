import { useState, useEffect } from 'react';

import classes from '../Styles/Dashboard.module.css';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = props.userData;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      <p>Welcome Back {props.userEmail}</p>
      <button onClick={props.logoutHandler}>logout</button>
      <button onClick={props.checkUser}>Check User</button>
      <button
        onClick={() => {
          console.log(user);
        }}
      >
        Log User
      </button>
      {!isLoading && (
        <>
          <h1>
            Name: {user?.firstName} {user?.lastName}
          </h1>
          <p>Congregation: {user?.congregation}</p>
          <p>Time for Jan: {user?.time[0]?.hours}</p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
