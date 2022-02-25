import { useState, useEffect } from 'react';

import FormPage from './UI/FormPage';
import NextButton from './UI/NextButton';
import BackButton from './UI/BackButton';
import classes from '../Styles/ServiceReport.module.css';
import ReportReviewCard from './UI/ReportReviewCard';

const Studies = (props) => {
  const [userSelection, setUserSelection] = useState('');
  const [isValid, setIsValid] = useState(true);

  const report = { ...props.userServiceReport };

  // useEffect(() => {
  //   if (userSelection < 0 || userSelection === '') {
  //     setIsValid(false);
  //   } else {
  //     setIsValid(true);
  //     props.setStudies(userSelection);
  //     // REMOVE ===
  //     console.log(userSelection);
  //   }
  // }, [userSelection, props]);
  return (
    <FormPage title="does everything look correct?">
      <div className={classes.container}>
        <div className={classes.content}>
          <p className={classes.title}>
            name:{' '}
            <span className={classes.value}>
              {report.firstName} {report.lastName}
            </span>
          </p>
          <p className={classes.title}>
            group: <span className={classes.value}>{report.group}</span>
          </p>
          <p className={classes.title}>
            month: <span className={classes.value}>{report.month}</span>
          </p>
        </div>
        <div className={classes.content}>
          <ReportReviewCard type="placements" value={report.placements} />
          <ReportReviewCard type="videos" value={report.videos} />
          <ReportReviewCard type="hours" value={report.hours} />
          <ReportReviewCard type="return visits" value={report.returns} />
          <ReportReviewCard type="bible studies" value={report.studies} />
        </div>
        <div className={classes['btn-container']}>
          <BackButton link="studies" action="back" />
          <NextButton isValid={isValid} link="dashboard" action="submit" />
        </div>
      </div>
    </FormPage>
  );
};

export default Studies;
