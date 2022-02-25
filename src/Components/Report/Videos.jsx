import { useState, useEffect } from 'react';

import FormPage from '../UI/FormPage';
import NextButton from '../UI/NextButton';
import BackButton from '../UI/BackButton';
import classes from '../../Styles/Report Styles/Videos.module.css';

const Videos = (props) => {
  const [userSelection, setUserSelection] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (userSelection < 0 || userSelection === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
      props.setVideos(userSelection);
      // REMOVE ===
      console.log(userSelection);
    }
  }, [userSelection, props]);
  return (
    <FormPage title="almost done!">
      <div className={classes.container}>
        <p className={classes.question}>
          how many videos did you show this month?
        </p>
        <div className={classes.content}>
          <input
            placeholder="videos"
            type="number"
            onChange={(event) => setUserSelection(event.target.value)}
          />
        </div>
        <div className={classes['btn-container']}>
          <BackButton link="placements" action="back" />
          <NextButton isValid={isValid} link="hours" action="next" />
        </div>
      </div>
    </FormPage>
  );
};

export default Videos;
