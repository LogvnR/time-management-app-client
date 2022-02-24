import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormPage from '../UI/FormPage';
import classes from '../../Styles/Report Styles/Hours.module.css';

const Hours = () => {
  const navigate = useNavigate();
  return (
    <FormPage>
      <p>Hours</p>
      <button
        onClick={() => {
          navigate('/returns');
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          navigate('/hours');
        }}
      >
        Go Back
      </button>
      <div></div>
    </FormPage>
  );
};

export default Hours;
