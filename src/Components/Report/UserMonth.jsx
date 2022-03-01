import { useState, useEffect } from 'react';

import FormPage from '../UI/FormPage';
import NextButton from '../UI/NextButton';
import BackButton from '../UI/BackButton';
import classes from '../../Styles/Report Styles/UserMonth.module.css';

const UserMonth = (props) => {
  const [userSelection, setUserSelection] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (userSelection === 'select a month' || userSelection === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
      switch (userSelection) {
        case 'january':
          props.setMonthIndex('0');
          break;
        case 'february':
          props.setMonthIndex('1');
          break;
        case 'march':
          props.setMonthIndex('2');
          break;
        case 'april':
          props.setMonthIndex('3');
          break;
        case 'may':
          props.setMonthIndex('4');
          break;
        case 'june':
          props.setMonthIndex('5');
          break;
        case 'july':
          props.setMonthIndex('6');
          break;
        case 'august':
          props.setMonthIndex('7');
          break;
        case 'september':
          props.setMonthIndex('8');
          break;
        case 'october':
          props.setMonthIndex('9');
          break;
        case 'november':
          props.setMonthIndex('10');
          break;
        default:
          props.setMonthIndex('11');
      }
      props.setMonth(userSelection);
      // REMOVE ===
      console.log(userSelection);
    }
  }, [userSelection, props]);
  return (
    <FormPage>
      <div className={classes.container}>
        <p className={classes.question}>
          what month are you submitting time for?
        </p>
        <div className={classes.content}>
          <select
            onChange={(event) => {
              setUserSelection(
                event.target.options[event.target.selectedIndex].text
              );
            }}
            name="month"
            id="month"
          >
            <option value="none">select a month</option>
            <option value="jan">january</option>
            <option value="feb">february</option>
            <option value="mar">march</option>
            <option value="apr">april</option>
            <option value="may">may</option>
            <option value="jun">june</option>
            <option value="jul">july</option>
            <option value="aug">august</option>
            <option value="sep">september</option>
            <option value="oct">october</option>
            <option value="nov">november</option>
            <option value="dec">december</option>
          </select>
        </div>
        <div className={classes['btn-container']}>
          <BackButton link="group" action="back" />
          <NextButton isValid={isValid} link="placements" action="next" />
        </div>
      </div>
    </FormPage>
  );
};

export default UserMonth;
