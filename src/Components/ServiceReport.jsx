import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import FormPage from './UI/FormPage';
import BackButton from './UI/BackButton';
import classes from '../Styles/ServiceReport.module.css';
import ReportReviewCard from './UI/ReportReviewCard';

const Studies = (props) => {
  const report = { ...props.userServiceReport };

  const submitReportHandler = () => {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const currMonth = date.getMonth() + 1;
    const daySubmitted = `${currMonth}-${day}-${year}`;
    props.setDateSubmitted(daySubmitted);
    setTimeout(() => {
      props.postServiceReport();
    }, 1000);
  };

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
          <button className={classes.btn} onClick={submitReportHandler}>
            submit
            <FontAwesomeIcon className={classes.arrow} icon={faArrowRight} />
          </button>
        </div>
      </div>
    </FormPage>
  );
};

export default Studies;
