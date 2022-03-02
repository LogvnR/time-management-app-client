import React from 'react';

import ReactDOM from 'react-dom';

import classes from '../../Styles/MonthModal.module.css';
import ValueContainer from './ValueContainer';

const MonthModal = (props) => {
  const month = {
    name: props.month.month,
    placements: props.month.placements,
    videos: props.month.videoShowings,
    hours: props.month.hours,
    returns: props.month.returnVisits,
    studies: props.month.bibleStudies,
    disabled: props.month.isDisabled,
    date: props.month.dateSubmitted,
  };
  return ReactDOM.createPortal(
    <>
      <div className={classes.modalContainer} onClick={() => props.close()}>
        <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
          <div className={classes['title-container']}>
            <p>{month.name} service report</p>
          </div>
          <div className={classes['content-container']}>
            <ValueContainer type="placements" amount={month.placements} />
            <ValueContainer type="video showings" amount={month.videos} />
            <ValueContainer type="hours" amount={month.hours} />
            <ValueContainer type="return visits" amount={month.returns} />
            <ValueContainer type="bible studies" amount={month.studies} />
          </div>
          <footer className={classes.Footer}>
            <div className={classes['date-container']}>
              <p>submitted</p>
              <p>{month.date}</p>
            </div>
            <button onClick={() => props.close()}>close</button>
          </footer>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default MonthModal;
