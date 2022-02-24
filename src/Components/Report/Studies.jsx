import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormPage from '../UI/FormPage';
import classes from '../../Styles/Report Styles/Studies.module.css';

const Studies = () => {
  const navigate = useNavigate();
  return (
    <FormPage>
      <p>Studies</p>
      <button
        onClick={() => {
          navigate('/serviceReport');
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          navigate('/returns');
        }}
      >
        Go Back
      </button>
      <div></div>
    </FormPage>
  );
};

export default Studies;
