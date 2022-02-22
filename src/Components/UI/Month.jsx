import React from 'react';

import classes from '../../Styles/Month.module.css';

const Month = (props) => {
  const month = props.month.slice(0, 3);
  return (
    <div className={classes.container}>
      <p className={classes.month}>{month}</p>
    </div>
  );
};

export default Month;
