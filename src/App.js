import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { auth } from './Helpers/firebase';
import mainApi from './Helpers/axios';
import useUsers from './Helpers/swr';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import './App.css';
import Entry from './Components/Entry';
import Dashboard from './Components/Dashboard';

const App = () => {
  // Login State ====
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // SignUp State ====
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [congregation, setCongregation] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  // User Data State ====
  const [currUser, setCurrUser] = useState('');
  const { users, isLoading, isError } = useUsers();
  const [userData, setUserData] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setCurrUser(currentUser);
  });

  const navigate = useNavigate();

  const checkUser = () => {
    console.log(currUser);
  };

  const testUser = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(signUpEmail);
    console.log(congregation);
  };

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log(user);
      mainApi.post('createUser', {
        firstName: firstName,
        lastName: lastName,
        email: signUpEmail,
        congregation: congregation,
      });
      navigate('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    navigate('');
  };

  useEffect(() => {
    const getUserData = () => {
      const specUser = users.find(({ email }) => email === currUser.email);
      console.log(currUser.email);
      console.log(users);
      console.log(specUser);
      setUserData(specUser);
    };
    setTimeout(() => {
      getUserData();
    }, 100);
  }, [currUser, users]);

  return (
    <Routes>
      <Route
        path=""
        element={
          <Entry
            testUser={testUser}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setCongregation={setCongregation}
            setSignUpEmail={setSignUpEmail}
            setSignUpPassword={setSignUpPassword}
            setLoginEmail={setLoginEmail}
            setLoginPassword={setLoginPassword}
            signUpUser={signUp}
            loginUser={login}
          />
        }
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            currUser={currUser}
            userData={userData}
            checkUser={checkUser}
            logoutHandler={logout}
            userEmail={currUser?.email}
          />
        }
      />
    </Routes>
  );
};

export default App;
