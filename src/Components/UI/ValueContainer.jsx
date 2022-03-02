import React from 'react';

import classes from '../../Styles/ValueContainer.module.css';

const ValueContainer = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.type}>{props.type}</p>
      <p className={classes.amount}>{props.amount}</p>
    </div>
  );
};

export default ValueContainer;
