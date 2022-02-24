import React from 'react';

import classes from '../../Styles/FormPage.module.css';

const FormPage = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default FormPage;
