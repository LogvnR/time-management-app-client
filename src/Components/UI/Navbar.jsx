import React from 'react';

import classes from '../../Styles/Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <p>Tempus</p>
      <p>{props.congregation}</p>
    </div>
  );
};

export default Navbar;
