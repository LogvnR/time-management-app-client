import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormPage from '../UI/FormPage';
import classes from '../../Styles/Report Styles/UserMonth.module.css';

const UserMonth = () => {
  const navigate = useNavigate();
  return (
    <FormPage>
      <button
        onClick={() => {
          navigate('/dashboard');
        }}
      >
        Go Back
      </button>
      <div></div>
    </FormPage>
  );
};

export default UserMonth;
