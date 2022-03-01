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
  const [userId, setUserId] = useState('');

  // User Form States
  const [group, setGroup] = useState('');
  const [month, setMonth] = useState('');
  const [monthIndex, setMonthIndex] = useState('');
  const [placements, setPlacements] = useState(0);
  const [videos, setVideos] = useState(0);
  const [hours, setHours] = useState(0);
  const [returns, setReturns] = useState(0);
  const [studies, setStudies] = useState(0);

  onAuthStateChanged(auth, (currentUser) => {
    setCurrUser(currentUser);
  });

  const navigate = useNavigate();

  // REMOVE ===
  const checkUser = () => {
    console.log(currUser);
    console.log(userData);
    console.log(userId);
  };

  // REMOVE ===
  const testUser = () => {
    console.log(group);
    console.log(month);
    console.log(monthIndex);
    console.log(placements);
    console.log(videos);
    console.log(hours);
    console.log(returns);
    console.log(studies);
  };

  const userServiceReport = {
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    group: group,
    month: month,
    placements: placements,
    videos: videos,
    hours: hours,
    returns: returns,
    studies: studies,
  };

  const reportValues = {
    month: month,
    placements: placements,
    videoShowings: videos,
    hours: hours,
    returnVisits: returns,
    bibleStudies: studies,
    isDisabled: false,
  };

  const postServiceReport = async () => {
    try {
      await mainApi.post(`edit/${userId}/time/${monthIndex}`, reportValues);
      navigate('/dashboard');
      setTimeout(() => {
        checkUser();
      }, 5000);
    } catch (error) {
      // REMOVE ===
      console.log(error.message);
    }
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
      // REMOVE ===
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
      // REMOVE ===
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
      // REMOVE ===
      console.log(currUser.email);
      console.log(users);
      console.log(specUser);
      setUserData(specUser);
      setUserId(specUser._id);
    };
    setTimeout(() => {
      getUserData();
    }, 100);
  }, [currUser, users, userData]);

  return (
    <Routes>
      <Route
        path=""
        element={
          <Entry
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
            testUser={testUser}
            currUser={currUser}
            userData={userData}
            checkUser={checkUser}
            logoutHandler={logout}
            userEmail={currUser?.email}
          />
        }
      />
      <Route
        path="/serviceReport"
        element={
          <ServiceReport
            checkUser={checkUser}
            postServiceReport={postServiceReport}
            userServiceReport={userServiceReport}
          />
        }
      />
      <Route
        path="/group"
        element={<Group group={group} setGroup={setGroup} />}
      />
      <Route
        path="/month"
        element={
          <UserMonth setMonthIndex={setMonthIndex} setMonth={setMonth} />
        }
      />
      <Route
        path="/placements"
        element={<Placements setPlacements={setPlacements} />}
      />
      <Route path="/videos" element={<Videos setVideos={setVideos} />} />
      <Route path="/hours" element={<Hours setHours={setHours} />} />
      <Route path="/returns" element={<Returns setReturns={setReturns} />} />
      <Route path="/studies" element={<Studies setStudies={setStudies} />} />
    </Routes>
  );
};

export default App;
