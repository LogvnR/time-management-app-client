import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormPage from '../UI/FormPage';
import classes from '../../Styles/Report Styles/UserMonth.module.css';

const UserMonth = () => {
  const navigate = useNavigate();
  return (
    <FormPage>
      <p>Month</p>
      <button
        onClick={() => {
          navigate('/placements');
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          navigate('/group');
        }}
      >
        Go Back
      </button>
      <div></div>
    </FormPage>
  );
};

export default UserMonth;
