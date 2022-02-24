import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import classes from '../../Styles/NextButton.module.css';

const NextButton = (props) => {
  //   const [isBackBtn, setIsBackBtn] = useState(false);
  const link = props.link;
  const navigate = useNavigate();

  return (
    <button
      className={`${classes.button} ${props.className}`}
      onClick={() => {
        navigate(`/${link}`);
      }}
    >
      {props.action}
      <FontAwesomeIcon className={classes.arrow} icon={faArrowRight} />
    </button>
  );
};

export default NextButton;
