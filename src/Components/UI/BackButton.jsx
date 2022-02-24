import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import classes from '../../Styles/BackButton.module.css';

const BackButton = (props) => {
  const link = props.link;
  const navigate = useNavigate();

  return (
    <button
      className={`${classes.button} ${props.className}`}
      onClick={() => {
        navigate(`/${link}`);
      }}
    >
      <FontAwesomeIcon className={classes.arrow} icon={faArrowLeft} />
      {props.action}
    </button>
  );
};

export default BackButton;
