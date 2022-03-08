import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from '../Styles/Dashboard.module.css';
import Navbar from './UI/Navbar';
import UserTime from './UserTime';
import Settings from './UI/Settings';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
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

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = settingsOpen ? 'hidden' : 'auto';
  }, [settingsOpen]);

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  return (
    <div className={classes.background}>
      <div className={classes.dashboard}>
        <Navbar congregation={user?.congregation} />

        <div className={classes.content}>
          {/* <div className={classes['test-bracket']}>
            <button onClick={props.logoutHandler}>logout</button>
            <button onClick={props.testUser}>TEST</button>
            <button onClick={props.checkUser}>Check User</button>
          </div> */}
          {!isLoading && (
            <>
              <div className={classes['title-container']}>
                <p className={classes.welcome}>
                  Welcome back, {user?.firstName}!
                </p>
                <FontAwesomeIcon
                  onClick={toggleSettings}
                  className={
                    !settingsOpen
                      ? classes.settings
                      : `${classes.settings} ${classes.active}`
                  }
                  icon={faGear}
                />
              </div>
              <UserTime serviceYear={props.serviceYear} userTime={user?.time} />
            </>
          )}
          {settingsOpen && (
            <Settings logout={props.logoutHandler} close={closeSettings} />
          )}
        </div>
        <button
          onClick={() => {
            navigate('/group');
          }}
          className={classes['submit-report']}
        >
          Start Service Report
          <FontAwesomeIcon className={classes.icon} icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
