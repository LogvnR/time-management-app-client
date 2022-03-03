import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import FormPage from './UI/FormPage';
import BackButton from './UI/BackButton';
import classes from '../Styles/ServiceReport.module.css';
import ReportReviewCard from './UI/ReportReviewCard';

const ServiceReport = (props) => {
  const form = useRef();
  const report = { ...props.userServiceReport };

  const sendEmail = (e) => {
    e.preventDefault();
    if (report.group === '1') {
      emailjs
        .sendForm(
          'service_6myluni',
          'group_one',
          form.current,
          'O4dS7XZ-BFsM94OQx'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      emailjs
        .sendForm(
          'service_6myluni',
          'group_two',
          form.current,
          'O4dS7XZ-BFsM94OQx'
        )
        .then(
          (result) => {
            console.log(result.text);
            // submitReportHandler();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

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
            <span name="" className={classes.value}>
              {report.firstName}
            </span>{' '}
            <span className={classes.value}>{report.lastName}</span>
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
          <form className={classes.form} ref={form}>
            <input
              type="text"
              value={report.firstName}
              name="first_name"
              readOnly
            />
            <input
              type="text"
              value={report.lastName}
              name="last_name"
              readOnly
            />
            <input
              type="text"
              value={
                report.month.charAt(0).toUpperCase() + report.month.slice(1)
              }
              name="month"
              readOnly
            />
            <input
              type="text"
              value={report.serviceYear}
              name="service_year"
              readOnly
            />
            <input
              type="text"
              value={report.placements}
              name="placements"
              readOnly
            />
            <input type="text" value={report.videos} name="videos" readOnly />
            <input type="text" value={report.hours} name="hours" readOnly />
            <input type="text" value={report.returns} name="returns" readOnly />
            <input type="text" value={report.studies} name="studies" readOnly />
          </form>
        </div>
        <div className={classes['btn-container']}>
          <BackButton link="studies" action="back" />
          <button className={classes.btn} onClick={sendEmail}>
            submit
            <FontAwesomeIcon className={classes.arrow} icon={faArrowRight} />
          </button>
        </div>
      </div>
    </FormPage>
  );
};

export default ServiceReport;
