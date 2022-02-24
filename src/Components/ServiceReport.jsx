import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import FormPage from './UI/FormPage';
import classes from '../Styles/ServiceReport.module.css';

const ServiceReport = () => {
  const navigate = useNavigate();
  return (
    <FormPage>
      <p>Total Form</p>
      <button
        onClick={() => {
          navigate('/studies');
        }}
      >
        Go Back
      </button>
      <button
        onClick={() => {
          navigate('/dashboard');
        }}
      >
        Submit
      </button>
      <div></div>
      <Outlet />
    </FormPage>
  );
};

export default ServiceReport;
