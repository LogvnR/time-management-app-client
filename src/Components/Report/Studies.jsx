import { useState, useEffect } from 'react';

import FormPage from '../UI/FormPage';
import NextButton from '../UI/NextButton';
import BackButton from '../UI/BackButton';
import classes from '../../Styles/Report Styles/Studies.module.css';

const Studies = (props) => {
  const [userSelection, setUserSelection] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (userSelection < 0 || userSelection === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
      props.setStudies(userSelection);
      // REMOVE ===
      console.log(userSelection);
    }
  }, [userSelection, props]);
  return (
    <FormPage>
      <div className={classes.container}>
        <p className={classes.question}>
          how many different bible studies did you conduct this month?
        </p>
        <div className={classes.content}>
          <input
            placeholder="bible studies"
            type="number"
            onChange={(event) => setUserSelection(event.target.value)}
          />
        </div>
        <div className={classes['btn-container']}>
          <BackButton link="returns" action="back" />
          <NextButton isValid={isValid} link="serviceReport" action="next" />
        </div>
      </div>
    </FormPage>
  );
};

export default Studies;
