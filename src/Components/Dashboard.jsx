import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from '../Styles/Dashboard.module.css';
import Navbar from './UI/Navbar';
import UserTime from './UserTime';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = props.userData;

  const navigate = useNavigate();

  const serviceYearHandler = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    if (month >= 8) {
      props.setServiceYear(year + 1);
    } else {
      props.setServiceYear(year);
    }
  };

  useEffect(() => {
    serviceYearHandler();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });

  return (
    <div className={classes.background}>
      <div className={classes.dashboard}>
        <Navbar congregation={user?.congregation} />

        <div className={classes.content}>
          <div className={classes['test-bracket']}>
            <button onClick={props.logoutHandler}>logout</button>
            <button onClick={props.testUser}>TEST</button>
            <button onClick={props.checkUser}>Check User</button>
          </div>
          {!isLoading && (
            <>
              <p className={classes.welcome}>
                Welcome back, {user?.firstName}!
              </p>
              <UserTime serviceYear={props.serviceYear} userTime={user?.time} />
            </>
          )}
        </div>
        <button
          onClick={() => {
            navigate('/group');
          }}
          className={classes['submit-report']}
        >
          Start Service Report +
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
