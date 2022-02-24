import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormPage from '../UI/FormPage';
import classes from '../../Styles/Report Styles/Videos.module.css';

const Videos = () => {
  const navigate = useNavigate();
  return (
    <FormPage>
      <p>Videos</p>
      <button
        onClick={() => {
          navigate('/hours');
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          navigate('/placements');
        }}
      >
        Go Back
      </button>
      <div></div>
    </FormPage>
  );
};

export default Videos;
