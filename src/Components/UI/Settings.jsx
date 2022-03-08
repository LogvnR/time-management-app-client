import React from 'react';

import ReactDOM from 'react-dom';

import classes from '../../Styles/Settings.module.css';

const Settings = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={classes.modalContainer} onClick={() => props.close()}>
        <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
          <div className={classes.content}>
            <p>settings</p>
            <button onClick={props.logout}>logout</button>
          </div>

          <footer className={classes.Footer}>
            <button onClick={() => props.close()}>close</button>
          </footer>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default Settings;
