import React, { useState, useEffect } from 'react';

import classes from '../../Styles/Month.module.css';
import MonthModal from './MonthModal';

const Month = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const monthName = props.month.month.slice(0, 3);

  const handleClickBtn = () => {
    if (props.month.isDisabled) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = modalOpen ? 'hidden' : 'auto';
  }, [modalOpen]);

  const closeMonthModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleClickBtn}
        className={
          !props.month.isDisabled
            ? classes.container
            : `${classes.container} ${classes.disabled}`
        }
      >
        <p className={classes.month}>{monthName}</p>
      </div>
      {modalOpen && <MonthModal month={props.month} close={closeMonthModal} />}
    </>
  );
};

export default Month;
