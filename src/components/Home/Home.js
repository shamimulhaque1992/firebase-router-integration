import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
const auth = getAuth(app);
const Home = () => {
  const [ user ] = useAuthState(auth);
  return (
    <div>
      <h2>This is home</h2>
      <h1>
        Welcome <br /> {user ? user.displayName : "Please Login First"}
      </h1>
      <img src={user ? user.photoURL : "Something went worong"} alt="" />
    </div>
  );
};

export default Home;
