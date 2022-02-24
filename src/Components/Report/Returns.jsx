import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormPage from '../UI/FormPage';
import classes from '../../Styles/Report Styles/Returns.module.css';

const Returns = () => {
  const navigate = useNavigate();
  return (
    <FormPage>
      <p>Returns</p>
      <button
        onClick={() => {
          navigate('/studies');
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

export default Returns;
