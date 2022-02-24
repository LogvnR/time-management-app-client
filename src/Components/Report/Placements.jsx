import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormPage from '../UI/FormPage';
import classes from '../../Styles/Report Styles/Placements.module.css';

const Placements = () => {
  const navigate = useNavigate();
  return (
    <FormPage>
      <p>Placements</p>
      <button
        onClick={() => {
          navigate('/videos');
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          navigate('/month');
        }}
      >
        Go Back
      </button>
      <div></div>
    </FormPage>
  );
};

export default Placements;
