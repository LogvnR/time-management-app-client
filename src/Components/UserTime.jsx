import React from 'react';

import classes from '../Styles/UserTime.module.css';
import Month from './UI/Month';

const UserTime = (props) => {
  const userMonths = props.userTime;

  return (
    <div className={classes.container}>
      <p className={classes.year}>2022 Service Year</p>
      <div className={classes.months}>
        {userMonths.map((month) => (
          <Month key={month._id} month={month} />
        ))}
      </div>
    </div>
  );
};

export default UserTime;
