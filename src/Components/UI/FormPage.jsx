import React from 'react';

import classes from '../../Styles/FormPage.module.css';

const FormPage = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h4 className={classes.title}>{props.title}</h4>
        {props.children}
      </div>
    </div>
  );
};

export default FormPage;
