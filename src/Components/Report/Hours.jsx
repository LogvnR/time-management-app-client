import { useState, useEffect } from 'react';

import FormPage from '../UI/FormPage';
import NextButton from '../UI/NextButton';
import BackButton from '../UI/BackButton';
import classes from '../../Styles/Report Styles/Hours.module.css';

const Hours = (props) => {
  const [userSelection, setUserSelection] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (userSelection < 0 || userSelection === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
      props.setHours(userSelection);
      // REMOVE ===
      console.log(userSelection);
    }
  }, [userSelection, props]);
  return (
    <FormPage>
      <div className={classes.container}>
        <p className={classes.question}>
          how many hours did you spend in the ministry this month?
        </p>
        <div className={classes.content}>
          <input
            placeholder="hours"
            type="number"
            onChange={(event) => setUserSelection(event.target.value)}
          />
        </div>
        <div className={classes['btn-container']}>
          <BackButton link="videos" action="back" />
          <NextButton isValid={isValid} link="returns" action="next" />
        </div>
      </div>
    </FormPage>
  );
};

export default Hours;
