import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormPage from '../UI/FormPage';
import classes from '../../Styles/Report Styles/Group.module.css';

const Group = () => {
  const navigate = useNavigate();
  return (
    <FormPage>
      <p>Group</p>
      <button
        onClick={() => {
          navigate('/dashboard');
        }}
      >
        Next
      </button>
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

export default Group;
