import { useState, useEffect } from 'react';

import FormPage from '../UI/FormPage';
import NextButton from '../UI/NextButton';
import BackButton from '../UI/BackButton';
import classes from '../../Styles/Report Styles/Placements.module.css';

const Placements = (props) => {
  const [userSelection, setUserSelection] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (userSelection < 0 || userSelection === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
      props.setPlacements(userSelection);
      // REMOVE ===
      console.log(userSelection);
    }
  }, [userSelection, props]);
  return (
    <FormPage>
      <div className={classes.container}>
        <p className={classes.question}>
          how many placements did you make this month?
        </p>
        <div className={classes.content}>
          <input
            placeholder="placements"
            type="number"
            onChange={(event) => setUserSelection(event.target.value)}
          />
        </div>
        <div className={classes['btn-container']}>
          <BackButton link="month" action="back" />
          <NextButton isValid={isValid} link="videos" action="next" />
        </div>
      </div>
    </FormPage>
  );
};

export default Placements;
