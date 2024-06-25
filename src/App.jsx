import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeadSection from "./components/Head";
import Body from "./components/Body";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {
  // const [showSignUp, setShowSignUp] = useState(false);

  // const handleShowSignUp = () => {
  //   setShowSignUp(true);
  // };

  // const handleCloseSignUp = () => {
  //   setShowSignUp(false);
  // };


  const [currentPage, setCurrentPage] = useState('');

  const openSignIn = () => {
    setCurrentPage('signin');
  };
  const openLogIn = () => {
    setCurrentPage('login');
  };
  const switchToLogin = () => {
    setCurrentPage('login');
  }
  const switchToSignIn = () => {
    setCurrentPage('signin');
  }

  return (
    <>
      <Router>
        <div className="pb-20">
          {/* <NavBar onSignInClick={handleShowSignUp}/>
          {showSignUp && <SignUp onCloseSignUp={handleCloseSignUp} />} */}
        
        <NavBar openSignIn={openSignIn} openLogIn={openLogIn}/>
        {currentPage === 'signin' && <SignUp switchToLogin={switchToLogin} />}
         {currentPage === 'login' && <LogIn switchToSignIn={switchToSignIn} />}

          {/* <Routes> */}
    
            {/* <Route path="/signin" element={<SignUp />} /> */}
            {/* <Route path="/login" element={<LogIn />} /> */}
          {/* </Routes>            */}

          <HeadSection />
          <Body />
        </div>
      </Router>
    </>
  );
}



export default App;
