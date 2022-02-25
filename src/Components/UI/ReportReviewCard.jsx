import React from 'react';

import classes from '../../Styles/ReportReviewCard.module.css';

const ReportReviewCard = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.type}>{props.type}</p>
      <p className={classes.value}>{props.value}</p>
    </div>
  );
};

export default ReportReviewCard;
