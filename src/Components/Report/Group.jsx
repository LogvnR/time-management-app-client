import { useState, useEffect } from 'react';

import FormPage from '../UI/FormPage';
import NextButton from '../UI/NextButton';
import BackButton from '../UI/BackButton';
import classes from '../../Styles/Report Styles/Group.module.css';

const Group = (props) => {
  const [isGroupOne, setIsGroupOne] = useState(false);
  const [isGroupTwo, setIsGroupTwo] = useState(false);

  const groupOne = () => {
    setIsGroupOne(true);
    setIsGroupTwo(false);
    props.setGroup('1');
  };
  const groupTwo = () => {
    setIsGroupOne(false);
    setIsGroupTwo(true);
    props.setGroup('2');
  };

  useEffect(() => {
    if (props.group === '1') {
      setIsGroupOne(true);
    } else {
      setIsGroupTwo(true);
    }
  }, []);

  return (
    <FormPage title="okay, let's set started!">
      <div className={classes.container}>
        <p className={classes.question}>what field service group are you in?</p>
        <div className={classes.groups}>
          <div
            className={
              isGroupOne
                ? `${classes['group-container']} ${classes.selected}`
                : classes['group-container']
            }
            onClick={groupOne}
          >
            <p className={classes.group}>Group 1</p>
            <p className={classes.overseer}>j. ricard</p>
          </div>
          <div
            className={
              isGroupTwo
                ? `${classes['group-container']} ${classes.selected}`
                : classes['group-container']
            }
            onClick={groupTwo}
          >
            <p className={classes.group}>Group 2</p>
            <p className={classes.overseer}>a. beauchamp</p>
          </div>
        </div>
        <div className={classes['btn-container']}>
          <BackButton link="dashboard" action="back" />
          <NextButton link="month" action="next" />
        </div>
      </div>
    </FormPage>
  );
};

export default Group;
