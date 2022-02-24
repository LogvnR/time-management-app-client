import { useState, useEffect } from 'react';
import { useNavigate, Route } from 'react-router-dom';

import classes from '../Styles/Dashboard.module.css';
import Navbar from './UI/Navbar';
import UserTime from './UserTime';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = props.userData;

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className={classes.background}>
      <div className={classes.dashboard}>
        <Navbar congregation={user?.congregation} />

        <div className={classes.content}>
          <div className={classes['test-bracket']}>
            <button onClick={props.logoutHandler}>logout</button>
            <button onClick={props.checkUser}>Check User</button>
          </div>
          {!isLoading && (
            <>
              <p className={classes.welcome}>
                Welcome back, {user?.firstName}!
              </p>
              <UserTime userTime={user?.time} />
            </>
          )}
        </div>
        <button
          onClick={() => {
            navigate('/group');
          }}
          className={classes['submit-report']}
        >
          Submit Service Report +
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
