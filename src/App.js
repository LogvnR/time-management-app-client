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

// Form Components
import ServiceReport from './Components/ServiceReport';
import Group from './Components/Report/Group';
import UserMonth from './Components/Report/UserMonth';
import Placements from './Components/Report/Placements';
import Videos from './Components/Report/Videos';
import Hours from './Components/Report/Hours';
import Returns from './Components/Report/Returns';
import Studies from './Components/Report/Studies';

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

  // User Form States
  const [group, setGroup] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setCurrUser(currentUser);
  });

  const navigate = useNavigate();

  const checkUser = () => {
    console.log(currUser);
  };

  const testUser = () => {
    console.log(group);
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
      <Route path="/serviceReport" element={<ServiceReport />} />
      <Route
        path="/group"
        element={<Group group={group} setGroup={setGroup} />}
      />
      <Route path="/month" element={<UserMonth />} />
      <Route path="/placements" element={<Placements />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/hours" element={<Hours />} />
      <Route path="/returns" element={<Returns />} />
      <Route path="/studies" element={<Studies />} />
    </Routes>
  );
};

export default App;
