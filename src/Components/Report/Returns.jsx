import { useState, useEffect } from 'react';

import FormPage from '../UI/FormPage';
import NextButton from '../UI/NextButton';
import BackButton from '../UI/BackButton';
import classes from '../../Styles/Report Styles/Returns.module.css';

const Returns = (props) => {
  const [userSelection, setUserSelection] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (userSelection < 0 || userSelection === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
      props.setReturns(userSelection);
      // REMOVE ===
      console.log(userSelection);
    }
  }, [userSelection, props]);
  return (
    <FormPage>
      <div className={classes.container}>
        <p className={classes.question}>
          how many return visits did you make this month?
        </p>
        <div className={classes.content}>
          <input
            placeholder="return visits"
            type="number"
            onChange={(event) => setUserSelection(event.target.value)}
          />
        </div>
        <div className={classes['btn-container']}>
          <BackButton link="hours" action="back" />
          <NextButton isValid={isValid} link="studies" action="next" />
        </div>
      </div>
    </FormPage>
  );
};

export default Returns;
