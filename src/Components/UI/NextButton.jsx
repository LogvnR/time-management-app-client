import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import classes from '../../Styles/NextButton.module.css';

const NextButton = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const link = props.link;
  const navigate = useNavigate();

  useEffect(() => {
    setIsDisabled(props.isValid);
  }, [props.isValid]);

  return (
    <button
      className={
        isDisabled
          ? `${classes.button} ${props.className}`
          : `${classes.button} ${classes.disabled} ${props.className}`
      }
      onClick={() => {
        navigate(`/${link}`);
      }}
      disabled={!isDisabled}
    >
      {props.action}
      <FontAwesomeIcon className={classes.arrow} icon={faArrowRight} />
    </button>
  );
};

export default NextButton;
